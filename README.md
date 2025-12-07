# Assignment Management App - TP5

**Author:** Taha Simsek  
**Course:** Angular - M1 MIAGE (UCA)

## Overview
This project is an Angular application for managing assignments, connected to a Node.js/Express backend and a MongoDB Atlas database. It demonstrates full-stack integration, pagination, and authentication handling.

## Features
- **CRUD Operations:** Create, Read, Update, and Delete assignments.
- **Pagination:** Efficient server-side pagination integrated with a custom Angular Material UI (Items per page selection, Next/Prev controls).
- **Authentication:** Role-based access control (Admin/User).
- **Database Tools:** "Peupler BD" to seed 500+ mock records and "Reset BD" to clear the database.
- **UI/UX:** Responsive design using Angular Material components (Toolbar, Sidenav, Cards, Lists).

## Tech Stack
- **Frontend:** Angular 18, Angular Material
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB Atlas

## How to Run

### 1. Backend API
```bash
cd api
npm install
npm start
```
The server will start on `http://localhost:8010`.

### 2. Frontend Application
```bash
cd assignment-app
npm install
ng serve
```
Navigate to `http://localhost:4200`.
