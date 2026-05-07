# Team Task Manager

Live URL:
https://team-task-manager-xi-two.vercel.app/

GitHub Repository:
https://github.com/SrishanthAllola/team-task-manager

Project Overview:
Team Task Manager is a full-stack web application developed to manage projects and tasks with role-based access control. The application allows Admin users to create projects, assign tasks, manage members, and track overall project progress, while Member users can view assigned tasks and update task status.

Features:
1. Authentication System
- User Signup
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Role-based Authentication

2. Role-Based Access Control

Admin:
- Create Projects
- Delete Projects
- Create Tasks
- Assign Tasks
- Manage Team Members
- View All Tasks and Projects

Member:
- View Assigned Tasks
- Mark Tasks as Completed
- Cannot Create or Delete Projects/Tasks

3. Project Management
- Create Projects
- Delete Projects
- Add Team Members
- View Project Details

4. Task Management
- Create Tasks
- Assign Tasks to Members
- Update Task Status
- Delete Tasks
- Task Status Tracking

5. Dashboard
- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

Technology Stack:

Frontend:
- React.js
- Tailwind CSS
- Axios
- Vite

Backend:
- Node.js
- Express.js
- JWT Authentication
- bcrypt

Database:
- MongoDB Atlas

Deployment:
- Frontend: Vercel
- Backend: Railway

Project Structure:

team-task-manager
│
├── frontend
│   ├── src
│   ├── pages
│   ├── components
│   └── package.json
│
├── backend
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── server.js
│   └── package.json
│
└── README.txt

How to Run Locally:
1. Clone the repository
2. Install dependencies for frontend and backend
3. Add MongoDB Atlas connection string in .env
4. Start backend using:
   npm start
5. Start frontend using:
   npm run dev

Conclusion:
The Team Task Manager application successfully implements project management, task tracking, authentication, and role-based access control using the MERN stack. The application is fully deployed and functional.
