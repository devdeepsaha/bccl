import json
import os
import re # Import the regular expression library
from flask import Flask, request, jsonify
from flask_cors import CORS

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

try:
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
    model = genai.GenerativeModel('gemini-1.5-flash')
    print("Successfully configured Generative AI model.")
except Exception as e:
    print(f"Error configuring Generative AI: {e}")
    model = None

app = Flask(__name__)
CORS(app)

def load_knowledge_base():
    try:
        with open('knowledge_base.json', 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"faqs": []}

knowledge_base = load_knowledge_base()

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '').lower()

    if not user_message:
        return jsonify({"response": "Please provide a message."}), 400

    # --- UPDATED KEYWORD SEARCH LOGIC ---
    # 1. Clean and split the user's message into a set of unique words
    words = set(re.sub(r'[^\w\s]', '', user_message).split())
    
    # 2. Check for an intersection between the user's words and the FAQ tags
    for faq in knowledge_base.get('faqs', []):
        faq_tags = set(faq.get('tags', []))
        if faq_tags.intersection(words):
            print("Found a whole-word match in the local knowledge base.")
            return jsonify({"response": faq['answer']})
    # --- END OF UPDATED LOGIC ---


    # If No Match, Fallback to Generative AI
    print("No local match found. Querying Generative AI...")
    if not model:
        fallback_response = "I'm sorry, my advanced AI capabilities are currently offline. Please try again later."
        return jsonify({"response": fallback_response}), 503

    try:
        prompt = f"""
        You are CoalBot, a professional and helpful digital assistant for Bharat Coking Coal Limited (BCCL), a major coal mining company in India. 
        Your persona is knowledgeable and concise. Do not mention that you are an AI. Your answers should be relevant to a corporate or mining context.

        Answer the following user question as CoalBot.

        User Question: "{user_message}"

        CoalBot's Answer:
        """
        
        ai_response = model.generate_content(prompt)
        
        return jsonify({"response": ai_response.text})

    except Exception as e:
        print(f"An error occurred with the Generative AI call: {e}")
        error_response = "I'm having trouble connecting to my advanced knowledge base right now. Please try again in a moment."
        return jsonify({"response": error_response}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
