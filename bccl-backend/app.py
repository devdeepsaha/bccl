import json
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

# Import new libraries
import google.generativeai as genai
from dotenv import load_dotenv

# --- Load Environment Variables and Configure API ---
load_dotenv()

try:
    # Configure the generative AI model with the API key from the .env file
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
    # Initialize the model
    model = genai.GenerativeModel('gemini-1.5-flash')
    print("Successfully configured Generative AI model.")
except Exception as e:
    print(f"Error configuring Generative AI: {e}")
    model = None

# --- Basic Flask App Setup ---
app = Flask(__name__)
CORS(app)

# --- Load Knowledge Base ---
def load_knowledge_base():
    """Loads the FAQ data from the knowledge_base.json file."""
    try:
        with open('knowledge_base.json', 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"faqs": []}

knowledge_base = load_knowledge_base()

# --- API Endpoint ---
@app.route('/api/chat', methods=['POST'])
def chat():
    """
    Handles chat messages.
    1. Searches the local knowledge_base.json first.
    2. If no match is found, it calls the Generative AI model.
    """
    user_message = request.json.get('message', '').lower()

    if not user_message:
        return jsonify({"response": "Please provide a message."}), 400

    # --- 1. Search Knowledge Base First ---
    for faq in knowledge_base.get('faqs', []):
        if any(tag in user_message for tag in faq.get('tags', [])):
            print("Found a match in the local knowledge base.")
            return jsonify({"response": faq['answer']})

    # --- 2. If No Match, Fallback to Generative AI ---
    print("No local match found. Querying Generative AI...")
    if not model:
        fallback_response = "I'm sorry, my advanced AI capabilities are currently offline. Please try again later."
        return jsonify({"response": fallback_response}), 503

    try:
        # Construct a well-defined prompt for the AI
        prompt = f"""
        You are CoalBot, a professional and helpful digital assistant for Bharat Coking Coal Limited (BCCL), a major coal mining company in India. 
        Your persona is knowledgeable and concise. Do not mention that you are an AI. Your answers should be relevant to a corporate or mining context.

        Answer the following user question as CoalBot.

        User Question: "{user_message}"

        CoalBot's Answer:
        """
        
        # Call the API
        ai_response = model.generate_content(prompt)
        
        return jsonify({"response": ai_response.text})

    except Exception as e:
        print(f"An error occurred with the Generative AI call: {e}")
        error_response = "I'm having trouble connecting to my advanced knowledge base right now. Please try again in a moment."
        return jsonify({"response": error_response}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)