# Student Wall – Open Source Practice

This project is created to help students **learn Git, GitHub, and open-source collaboration**.

Each student will:

* Clone the repository
* Run the project locally
* Create their own branch
* Add a file with their introduction
* Create a Pull Request

After your Pull Request is merged, **your message will appear on the website**.

---

# Project Overview

This is a small **Node.js + Express** web application.

The backend reads student files from the `students` folder and the frontend displays them on a webpage.

Project Structure:

```
student-wall
│
├── server.js
├── package.json
│
├── students
│   └── example.json
│
└── public
    ├── index.html
    ├── style.css
    └── script.js
```

---

# Prerequisites

Make sure the following tools are installed on your system:

* Node.js
* Git

Check installation:

```
node -v
git --version
```

---

# Step 1 – Clone the Repository

Clone the project to your computer.

```
git clone https://github.com/Pradeeprajpoot434680/student-names
```

Move into the project folder:

```
cd simple-task
```

---

# Step 2 – Install Dependencies

Install the required Node.js packages.

```
npm install
```

---

# Step 3 – Run the Project

Start the server:

```
node server.js
```

You should see:

```
Server running on http://localhost:3000
```

Open your browser and go to:

```
http://localhost:3000
```

You will see the **Student Wall website**.

---

# Step 4 – Create Your Branch

Create a new branch using your name.

Example:

```
git checkout -b your-name
```

Example:

```
git checkout -b pradeep
```

---

# Step 5 – Add Your Contribution

Go to the `students` folder.

Create a new file with **your name**.

Example:

```
students/pradeep.json
```

File content example:

```
{
  "name": "Pradeep",
  "message": "Hello! This is my first open source contribution."
}
```

---

# Step 6 – Commit Your Changes

Add the new file:

```
git add .
```

Commit your changes:

```
git commit -m "Added Pradeep introduction"
```

---

# Step 7 – Push Your Branch

Push your branch to GitHub.

```
git push origin your-name
```

Example:

```
git push origin pradeep
```

---

# Step 8 – Create a Pull Request

1. Go to the GitHub repository
2. Click **Compare & Pull Request**
3. Submit your Pull Request

Your contribution will be reviewed and merged.

---

# Contribution Rules

* Create a **branch with your name**
* Only add **one file inside the students folder**
* Do not modify other student files
* Keep your message appropriate

---

# Example Contribution

File:

```
students/example.json
```

Content:

```
{
  "name": "Example Student",
  "message": "Hello everyone! Excited to learn open source."
}
```

---

# What You Will Learn

By contributing to this project you will practice:

* Git clone
* Git branching
* Git commit
* Git push
* Pull Requests
* Open source workflow

---

Happy contributing!
