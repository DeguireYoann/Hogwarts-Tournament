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
cp .env.example .env  # Add your Firebase credentials
npm run dev
```

## 🏗️ Future Improvements  
- Add support for all four Hogwarts houses  
- Implement leaderboard history  
- Enhance UI with animations  
