import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize the Gemini API with the key
genai.configure(api_key=GEMINI_API_KEY)

# List available models (this returns a generator)
available_models = genai.list_models()

# Convert the generator to a list or iterate through it
print(list(available_models))  # Convert to list to print all models
