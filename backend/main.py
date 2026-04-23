from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import httpx
import uuid
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

# Mock database for users (Adding a default admin user so it survives server restarts)
users_db = {
    "admin@chidanand.ai": {"password": "admin"}
}

# Pydantic models for request bodies
class AuthRequest(BaseModel):
    email: str
    password: str

class ChatRequest(BaseModel):
    message: str

class ExplainRequest(BaseModel):
    word: str

# -----------------
# Auth Endpoints
# -----------------
@app.post("/register")
async def register(req: AuthRequest):
    if req.email in users_db:
        raise HTTPException(status_code=400, detail="User already registered")
    
    # Store the user (in a real app, hash the password!)
    users_db[req.email] = {"password": req.password}
    return {"message": "Registered successfully"}

@app.post("/login")
async def login(req: AuthRequest):
    user = users_db.get(req.email)
    if not user or user["password"] != req.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Generate a dummy token
    access_token = f"token-{uuid.uuid4()}"
    return {"access_token": access_token}

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
        "You are an AI assistant for Chidanand M, a Full Stack AI/ML Engineer. "
        "Keep your responses concise, professional, and helpful. "
        f"User says: {req.message}"
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
