# 🧩 Realtime Chat Application

A simple **real-time chat app** built using the **MERN stack**, **Socket.IO**, and **Zustand** for global state management. This project was developed by following a YouTube tutorial to better understand full-stack development and real-time communication in web apps.

## 🚀 Features

- **Real-Time Messaging**: Send and receive messages instantly with WebSocket using **Socket.IO**
- **Global State Management**: Clean and scalable state handling using **Zustand**
- **Responsive UI**: Built with **React** for a smooth and interactive user experience
- **Backend API**: RESTful API using **Node.js + Express**
- **Data Storage**: User and message data stored in **MongoDB**

## 🔧 Technologies Used

### Frontend
- React
- Zustand
- Socket.IO Client

### Backend
- Node.js
- Express
- MongoDB (with Mongoose)
- Socket.IO

## 📦 Environment Variables

To run this project, you'll need to set up the following environment variables in a `.env` file:

```env
PORT=8000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
