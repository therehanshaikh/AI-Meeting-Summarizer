import os
import requests
from dotenv import load_dotenv

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")

def analyze_meeting(transcript):
    API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
    headers = {"Authorization": f"Bearer {HF_API_KEY}"}
    payload = {"inputs": transcript}

    response = requests.post(API_URL, headers=headers, json=payload)
    
    if response.status_code == 200:
        summary = response.json()[0]['summary_text']
        return summary
    else:
        return f"Error: {response.status_code}, {response.text}"
