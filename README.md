# Smart Expense Tracker

A full-stack expense tracking application that enables users to securely manage and monitor their personal expenses. The application provides authentication, expense management, and cloud-based data persistence with a responsive user interface.

## Live Demo

**Frontend:** https://smart-expense-tracker-rosy.vercel.app/

**Backend:** https://smart-expense-tracker-backend-1.onrender.com

---

## Features

* User Registration and Login
* JWT-based Authentication
* Secure HTTP-only Cookie Management
* Add Expenses
* View Expenses
* Delete Expenses
* Cloud Database Integration
* Responsive User Interface
* Persistent Data Storage

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JWT (JSON Web Tokens)
* HTTP-only Cookies

### Deployment

* Vercel (Frontend)
* Render (Backend)

---


## Application Workflow

1. User registers with email, username, and password.
2. User logs in using valid credentials.
3. Backend generates JWT access and refresh tokens.
4. Tokens are stored securely using HTTP-only cookies.
5. Authenticated users can:

   * Add expenses
   * View expenses
   * Delete expenses
6. Expense data is stored in MongoDB Atlas.
7. Data remains accessible across sessions and devices.

---

## API Integration

The frontend communicates with the deployed backend through REST APIs.

### Authentication APIs

```http
POST /api/v1/user/register
POST /api/v1/user/login
POST /api/v1/user/logout
```

### Expense APIs

```http
POST   /api/v1/expense
GET    /api/v1/expense
DELETE /api/v1/expense/:id
```

---

## Security Features

* JWT Authentication
* Protected Routes
* HTTP-only Cookies
* Server-side Validation
* Error Handling
* User-specific Expense Access

---

## Key Learnings

During the development of this project, I gained practical experience in:

* Frontend and Backend Integration
* REST API Development
* Authentication and Authorization
* MongoDB Atlas Integration
* Deployment using Vercel and Render
* Debugging Production Issues
* Secure Cookie Management
* Full-Stack Application Development

---

## Future Enhancements

* Update/Edit Expense Feature
* Expense Categories and Filters
* Monthly Analytics Dashboard
* Expense Charts and Visualizations
* Forgot Password Functionality
* Profile Management
* Mobile-first UI Improvements

---

## Author

**Dyuti Saini**

B.Tech CSE (Artificial Intelligence)
Indira Gandhi Delhi Technical University for Women (IGDTUW)

---

⭐ If you found this project useful, consider giving the repository a star.
