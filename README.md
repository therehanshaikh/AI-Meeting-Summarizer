AI Meeting Summarizer

An AI-powered full-stack app that converts meeting audio into transcripts and generates concise summaries, action items, and follow-up emails using OpenAI Whisper and BART. Built with React.js (frontend) and Flask (backend) for seamless user experience.


## Repository Structure

- `frontend/` - Contains all frontend code (React, HTML, CSS, etc.)
- `backend/` - Contains all backend code (Python Flask, APIs, Whisper model, etc.)

## Prerequisites

Before running this project, make sure you have:

- Python 3.x installed
- Node.js and npm installed
- Git installed
- **FFmpeg installed and added to system PATH**

## Getting Started

These instructions will help you run the project locally.

### Clone the Repository


### Backend Setup

1. Navigate to the backend folder:
    ```
    cd backend
    ```

2. Create a virtual environment and activate it:

    - On Windows:
      ```
      python -m venv env
      .\env\Scripts\activate
      ```
    - On Mac/Linux:
      ```
      python3 -m venv env
      source env/bin/activate
      ```

3. Install the backend dependencies:
    ```
    pip install -r requirements.txt
    ```

4. **Download and Install FFmpeg**

- Download FFmpeg for your OS from [FFmpeg official website](https://ffmpeg.org/download.html).
- For Windows, download the essentials build zip, extract it, and add the path to the `bin` directory (like `...\ffmpeg\bin`) to your system’s PATH environment variable.
- You can verify FFmpeg installation by running this command in the terminal:
    ```
    ffmpeg -version
    ```

5. Run the backend application:
    ```
    python app.py
    ```

### Frontend Setup

1. Open a new terminal window/tab and navigate to the frontend folder:
    ```
    cd frontend
    ```

2. Install frontend dependencies:
    ```
    npm install
    ```

3. Start the frontend development server:
    ```
    npm start
    ```

4. The frontend will open automatically in your browser, usually at:
    ```
    http://localhost:3000
    ```

### Environment Variables

If your project requires environment variables:

- Create `.env` files as needed in the frontend and backend folders.
- Do **not** commit `.env` files to the repository.
- Provide sample `.env.example` files with placeholder values, if applicable.

## Usage

- Access the frontend in the browser at `http://localhost:3000`.
- Ensure backend is running to handle API requests.

## Notes

- Make sure to activate the Python virtual environment whenever working on the backend.
- Confirm FFmpeg is installed and accessible via PATH before running Whisper transcription.
- Use Git Bash, Terminal, Command Prompt, or your IDE’s integrated terminal to run the commands.
- Do not include sensitive keys or credentials in this repository.


For any questions or help, contact Rehan Shaikh or open an issue in this repository.
