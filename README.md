# Collage-Site
This is a Collage Website

https://ankit303s.github.io/Collage-Management-System/

# Web Application Project

This project is a full-stack web application that includes both frontend and backend components. The frontend is built using HTML, CSS, and JavaScript, while the backend is powered by Node.js, Express, and MongoDB Atlas. The application features a user-friendly interface with functionalities such as a notice board, courses, and more.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (Signup/Login)
- Notice board for announcements
- Courses section with detailed information
- Responsive and modern UI
- Data persistence with MongoDB Atlas

## Tech Stack

**Frontend:**
- HTML
- CSS
- JavaScript

**Backend:**
- Node.js
- Express

**Database:**
- MongoDB Atlas

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account and cluster set up.

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://ankit303s.github.io/Collage-Management-System/
    cd Collage-Management-System
    ```

2. **Install backend dependencies:**
    ```bash
    cd server
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add your MongoDB Atlas connection string:
    ```env
    MONGO_URI=your-mongodb-atlas-connection-string
    ```

4. **Run the backend server:**
    ```bash
    node server.js
    ```

5. **Serve the frontend:**
    Open the `index.html` file in your browser or use a live server extension in your code editor.

## Usage

1. Open your browser and navigate to the login page.
2. Sign up for a new account or log in with existing credentials.
3. Access the notice board and courses sections from the main interface.


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



