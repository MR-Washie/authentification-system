# 🔐 Authentication System

## 📌 Overview

This project implements a secure Authentication System for the redesigned website of
**National Institute of Technology Patna**.

The system provides:

* Secure user registration (Signup)
* Secure user login
* Password hashing using bcrypt
* JWT-based authentication
* Strict input validation
* Protected route middleware

The authentication system is designed following modern backend security best practices.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt (Password Hashing)
* JSON Web Token (JWT)
* express-validator
* dotenv

---

## 🔑 Features

### ✅ 1. Secure Signup API

* Validates user inputs (name, email, password)
* Enforces strong password rules:

  * Minimum 6 characters
  * At least one uppercase letter
  * At least one numeric digit
* Checks for duplicate email registration
* Hashes passwords using bcrypt before storing in database

---

### ✅ 2. Secure Login API

* Validates input credentials
* Compares hashed passwords using bcrypt
* Generates signed JWT token on successful login
* Token includes expiration time
* Prevents sensitive data exposure

---

### ✅ 3. Password Security

Passwords are never stored in plain text.

Security measures include:

* bcrypt salt rounds (12)
* Hashed password storage
* Secure comparison during login
* No password returned in API responses

---

### ✅ 4. JWT Authentication

* Signed using secret key from environment variables
* Configurable expiration time
* Used for protecting private routes
* Token required in Authorization header

Example:

```
Authorization: Bearer <your_token>
```

---

### ✅ 5. Input Validation

Strict validation implemented using express-validator:

* Email format validation
* Password strength validation
* Required fields enforcement
* Trimmed and sanitized inputs

Invalid requests return proper 400 status codes.

---

## 📂 API Endpoints

### 🔹 Signup

```
POST /api/auth/signup
```

Request Body:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "Password1"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

### 🔹 Login

```
POST /api/auth/login
```

Request Body:

```json
{
  "email": "user@example.com",
  "password": "Password1"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>"
}
```

---

## 🛡 Security Best Practices Implemented

* Password hashing with bcrypt
* JWT-based stateless authentication
* Environment variable protection
* Error handling without exposing sensitive details
* Unique email constraint
* Secure token verification middleware

---

## 🚀 How to Run

1. Install dependencies:

```
npm install
```

2. Configure environment variables in `.env`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
JWT_EXPIRES=7d
```

3. Start the server:

```
npm start
```

4. API base URL:

```
http://localhost:5000/api/auth
```

---

## 📚 Learning Outcomes

Through this implementation, the following concepts were demonstrated:

* Secure password hashing
* JWT authentication flow
* Middleware-based route protection
* Input validation and sanitization
* Backend security best practices
* REST API design

---

## 📌 Future Enhancements

* Refresh token implementation
* Role-based access control (Admin/User)
* Email verification system
* Two-factor authentication (2FA)
* OAuth integration (Google Login)

---

## 📄 Conclusion

This Authentication System ensures secure user management by following modern security standards. It demonstrates strong backend development practices, proper validation, and secure data handling suitable for production-level applications.
