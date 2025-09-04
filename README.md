Project Mitra - BCCL Digital Assistant
</p>
A modern digital assistant website for Bharat Coking Coal Limited (BCCL), featuring an interactive map, a multi-page React frontend, and a smart Python/Flask backend with a Gemini-powered AI chatbot.
</p>

✨ Key Features
Interactive Operations Map: A fully responsive map of BCCL's operational areas in Dhanbad. Users can zoom, pan, and click on points of interest to get detailed descriptions.

AI-Powered Chatbot: "CoalBot" provides instant answers to user queries. It first searches a local knowledge base for FAQs and, if no match is found, uses Google's Gemini AI to generate a live, context-aware response.

Multi-Page Navigation: The site is structured as a modern multi-page application using React Router, with dedicated, professionally designed pages for Careers and Contact Us.

Fully Responsive Design: The entire user interface is optimized for a seamless experience on all devices, from large desktops to small mobile phones (320px).

Dynamic Content Pages:

Careers Page: Features a clean, card-based layout with a filtering system to easily sort through different types of notices (Recruitment, Results, etc.).

Contact Page: A comprehensive page displaying corporate information, a contact form, and a full directory of key personnel.

🛠️ Tech Stack
Frontend:

Framework: React.js

Routing: React Router

Styling: CSS3 with a focus on responsive design (Media Queries)

Backend:

Framework: Python / Flask

AI Integration: Google Gemini API (gemini-1.5-flash)

Environment Management: python-dotenv

Deployment:

Backend: Render

Frontend: Render

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js & npm: Download Node.js

Python & pip: Download Python

Backend Setup (project_mitra_backend)
Navigate to the backend folder:

cd project_mitra_backend

Create a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

Install dependencies:

pip install -r requirements.txt

Create an environment file:
Create a file named .env in this directory and add your Google AI Studio API key:

GOOGLE_API_KEY="YOUR_API_KEY_HERE"

Run the server:

flask run

The backend will be running on http://127.0.0.1:5000.

Frontend Setup (project_mitra_frontend)
Navigate to the frontend folder:

cd project_mitra_frontend

Install dependencies:

npm install

Run the development server:

npm start
