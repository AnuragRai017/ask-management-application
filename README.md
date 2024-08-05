# Task Manager Application
![image](https://github.com/user-attachments/assets/bc6970a9-e395-418f-af08-89e91e8cc48a)

This is a simple task management application built with Flask (backend) and React (frontend).

## Prerequisites

- Python 3.7+
- Node.js 12+
- npm 6+

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required packages:
   ```
   pip install flask flask-sqlalchemy flask-cors
   ```

5. Run the Flask application:
   ```
   python app.py
   ```

The backend server will start running on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

The frontend application will start running on `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Use the form to add new tasks.
3. View, edit, and delete tasks in the task list.
4. Use the filter dropdown to filter tasks by status.

## Assumptions

1. The application uses a SQLite database for simplicity. In a production environment, a more robust database system like PostgreSQL would be preferred.
2. Basic error handling is implemented, but more comprehensive error handling and user feedback would be necessary for a production application.
3. The application doesn't include user authentication or authorization. In a real-world scenario, these features would be crucial for data security and user-specific task management.
4. The frontend makes direct API calls to the backend. In a production environment, you might want to use an API gateway or implement more sophisticated state management (e.g., Redux).
5. The styling is basic and primarily for demonstration purposes. A real application would benefit from a more polished UI and possibly the use of a UI component library.
6. CORS is enabled for all origins in the backend for ease of development. In a production environment, you would want to restrict this to specific origins.

## Testing

The code provides basic functionality but does not include unit tests. In a real-world scenario, you would want to write tests for both the backend API endpoints and the frontend React components.

## Security Considerations

1. Input validation is performed on both the frontend and backend, but additional security measures would be necessary for a production application.
2. The application doesn't use HTTPS. In a production environment, all communications should be encrypted.
3. There's no rate limiting implemented, which could be necessary to prevent abuse in a real-world scenario.

## Future Enhancements

1. Implement user authentication and authorization.
2. Add due dates and reminders for tasks.
3. Implement task searching and sorting capabilities.
4. Add user profiles with avatars.
5. Improve error handling and user feedback.
6. Enhance the UI/UX design.
7. Implement comprehensive unit and integration tests.
