# 🏆 Hogwarts Tournament  

Hogwarts Tournament is a **Next.js** web application designed for a friendly competition among students, inspired by the **Harry Potter** universe. The app tracks house points for **Gryffindor** and **Slytherin**, allowing only the admin to update scores using **Firebase Authentication**.  

## ✨ Features  
- 🔥 **Real-time points tracking** with **Firebase Firestore**  
- 🔐 **Secure login** with **Firebase Authentication** (Google Sign-In)  
- 🚀 **Next.js** for a fast and efficient UI  
- ⚡ **Context API** for managing global state  

## 🛠 Tech Stack  
- **Next.js** (React Framework)  
- **Firebase** (Authentication & Firestore)  
- **TypeScript**  
- **Tailwind CSS**  

## 📌 How It Works  
1. **Admin Login** – Only authorized users can modify points  
2. **Points Page** – Secure access to update Gryffindor & Slytherin scores  
3. **Leaderboard** – Displays current standings  

## 🚀 Setup & Run  
```bash
git clone https://github.com/yourusername/hogwarts-tournament.git
cd hogwarts-tournament
npm install
cp .env.example .env  # Copy the environment variables example file
# Open .env and add your Firebase credentials
npm run dev
```

## 🛠 Setting an Admin
- In order to set an admin, you will need to run the command setAdmin <USER_UID>

## 🏗️ Future Improvements  
- Add support for all four Hogwarts houses  
- Enhance UI with animations
- Add a chatbox to interact with Tom Riddle.
