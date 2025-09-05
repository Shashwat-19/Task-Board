# 📌 Task-Board  

![GitHub repo size](https://img.shields.io/github/repo-size/Shashwat-19/Task-Board?color=blue) ![GitHub stars](https://img.shields.io/github/stars/Shashwat-19/Task-Board?style=social) ![GitHub forks](https://img.shields.io/github/forks/Shashwat-19/Task-Board?style=social) ![License](https://img.shields.io/github/license/Shashwat-19/Task-Board?color=green) ![Made with Flask](https://img.shields.io/badge/Made%20with-Flask-blue)  

Organize your workflow, one task at a time.  
Task-Board is a simple yet powerful **task management web app** built with **Flask and AI-powered assistance**. It helps you add, update, and track tasks visually with categories like **Not Started, In Progress, and Completed**.  

---

##  Overview  
Task-Board is designed to help users manage their daily tasks effectively.  
You can:  
- Add tasks with due dates.  
- Change their status dynamically.  
- Track progress visually.  
- Delete tasks when done.  

The UI is clean, modern, and responsive, making it a perfect lightweight productivity tool.  

---

##  Key Features  
- 📅 **Task Creation** – Add tasks with optional due date & time.  
- 🔄 **Task Status Update** – Move tasks between `Not Started`, `In Progress`, and `Completed`.  
- 🗑️ **Delete Tasks** – Remove completed/unwanted tasks.  
- 🎨 **Responsive UI** – Built with a modern and clean design.  
- ⚡ **AI Assistance** – Smart suggestions for managing and organizing tasks (extendable).  

---

##  Tech Stack  
- **Backend:** Flask (Python)  
- **Frontend:** HTML, CSS, JavaScript  
- **Styling:** Custom CSS (Dark Theme)  
- **Database:** (Specify if SQLite / JSON / etc., otherwise mention "Lightweight storage for tasks")  

---

##  Installation & Setup  

Clone the repository:  
```
git clone https://github.com/Shashwat-19/Task-Board.git
cd Task-Board
```
## Create a virtual environment & install dependencies:
```
python -m venv venv
source venv/bin/activate   # On Mac/Linux
venv\Scripts\activate      # On Windows
```
```
pip install -r requirements.txt
Run the Flask server:
python app.py
```
- Visit the app in your browser:
http://127.0.0.1:5000
- ---
## Usage Guide
Enter a task description and an optional due date & time.
Click Add Task.
Manage tasks by moving them across Not Started → In Progress → Completed.
Delete tasks when they are no longer needed.
---
## Project Architecture
```
Task-Board/
├── app.py              # Main Flask application
├── requirements.txt    # Dependencies
├── static/             # CSS, JS, and assets
├── templates/          # HTML templates
└── README.md           # Project documentation
```
---
## Testing
You can test the project by:
- Adding multiple tasks with different due dates.
- Changing task statuses to ensure updates are saved.
- Deleting tasks and refreshing to confirm removal.
- ---
## Performance Optimization
- Lightweight Flask backend for quick responses.
- Minimalistic CSS for faster rendering.
- Extendable for database or AI-based enhancements.
- ---
## Documentation
- Flask official docs: https://flask.palletsprojects.com
- Python virtual environments: https://docs.python.org/3/library/venv.html
## Contribution Guidelines
Fork the repo.
Create a feature branch (feature-new-task-ui).
Commit changes (git commit -m 'Added new task UI').
Push and create a PR.
🚀 Deployment
You can deploy Task-Board on:
Heroku
Render
Vercel (with Flask adapter)
Docker (Optional)
📜 License
This project is licensed under the MIT License – free to use and modify.
📬 Contact
👤 Shashwat
GitHub: Shashwat-19
LinkedIn: [Your LinkedIn Link]
