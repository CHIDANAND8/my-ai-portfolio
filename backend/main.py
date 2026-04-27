
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import httpx
import os
from dotenv import load_dotenv
from groq import AsyncGroq

load_dotenv()

app = FastAPI()

# Configure CORS so the React frontend can communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (in production, specify your frontend URL)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request bodies
class ChatRequest(BaseModel):
    message: str

class ExplainRequest(BaseModel):
    word: str

# -----------------
# Groq API Integration
# -----------------
GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "")
client = AsyncGroq(api_key=GROQ_API_KEY)
MODEL_NAME = "llama-3.1-8b-instant" 

async def generate_ai_response(prompt: str) -> str:
    """Helper function to communicate with Groq API."""
    if not GROQ_API_KEY:
        return "Error: GROQ_API_KEY not found in environment."
        
    try:
        chat_completion = await client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model=MODEL_NAME,
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        return f"Error: {str(e)}"

# -----------------
# AI Endpoints
# -----------------
@app.post("/chat")
async def chat_endpoint(req: ChatRequest):
    # Contextualize the chatbot to act as Chidanand's personal AI assistant
    system_prompt = (
        "You are a professional AI assistant representing the portfolio of a Full Stack AI/ML Engineer. "
        "Your primary goal is to assist recruiters, HR professionals, and hiring managers by answering questions about the candidate's profile. "
        "CRITICAL RULES:\n"
        "1. If the user says a simple greeting (e.g., 'hello', 'hi', 'hey'), respond politely with: 'Hello! How can I assist you with this profile today?'\n"
        "2. Do NOT repeatedly state or overuse the candidate's name in your responses. Speak naturally.\n"
        "3. Keep answers concise, professional, and tailored to highlight technical value for recruiters.\n"
        f"\nUser says: {req.message}"
    )
    
    reply = await generate_ai_response(system_prompt)
    return {"reply": reply}

class ExplainProjectRequest(BaseModel):
    title: str
    details: List[str]

@app.post("/explain")
async def explain_endpoint(req: ExplainRequest):
    # Ask Ollama to explain a technical keyword
    prompt = (
        f"Explain the technical keyword '{req.word}' in 2-3 short, clear sentences. "
        "Make it easy to understand for someone looking at a tech portfolio."
    )
    
    explanation = await generate_ai_response(prompt)
    return {"result": explanation}

@app.post("/explain_project")
async def explain_project_endpoint(req: ExplainProjectRequest):
    details_str = "\n".join(f"- {d}" for d in req.details)
    prompt = (
        f"You are a professional AI explaining a software engineering project titled '{req.title}'.\n"
        f"Here are the core bullet points of the project:\n{details_str}\n\n"
        "IMPORTANT: This is a technical software portfolio summary, do NOT provide medical advice. "
        "Please summarize this project into a highly impressive, cohesive 3-4 sentence paragraph. "
        "Do NOT use bullet points in your response. Focus purely on the value delivered, the tech stack used, and the technical achievements."
    )
    
    explanation = await generate_ai_response(prompt)
    return {"result": explanation}
