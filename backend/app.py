from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# 1. THE CORS SOLUTION
# This explicitly allows your Vite React app to talk to this Flask server
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}})

# 2. Register your authentication blueprint
# This means your routes will look like: http://localhost:5000/api/auth/signup
app.register_blueprint(auth_bp, url_prefix='/api/auth')

@app.route("/", methods=["GET"])
def health_check():
    return {"status": "Urban Planner Backend is running!"}, 200

if __name__ == '__main__':
    # Start the server on port 5000
    print("Starting the Flask server on port 5000...")
    app.run(debug=True, port=5000)