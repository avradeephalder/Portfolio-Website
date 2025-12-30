# 🍃 Naruto-Themed Portfolio Website

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Local-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)

> *"I never go back on my word! That's my ninja way. Dattebayo!"* - Naruto Uzumaki

A unique, fully-themed portfolio website inspired by the Naruto universe. Features immersive sound effects, animated UI elements, and a complete backend for message handling.

**🌐 Live Demo:** [Coming Soon]  
**👤 Developer:** Avradeep Halder  
**📍 Location:** Kolkata, India

---

## ✨ Features

### 🎵 Immersive Audio Experience
- **Background Music**: Naruto theme plays in loop with play/pause controls
- **Sound Effects**:
  - 🦅 Hawk call when sending messages
  - ⚡ Kuchiyose no Jutsu when summoning projects
  - 👁️ Sharingan sound when opening chat assistant
  - 🔥 Naruto jutsu for navigation interactions

### 🎨 Unique UI/UX
- **Start Experience Screen**: Epic entrance with Naruto and Sasuke characters
- **Scroll-Based Design**: Traditional ninja scroll aesthetics
- **Animated Components**: Smooth Framer Motion animations
- **Responsive Design**: Mobile-first approach with perfect mobile layout
- **Naruto Theme**: Complete theming with orange/black color scheme

### 💼 Portfolio Sections
- **Hero Section**: Dynamic introduction with animated elements
- **About**: Personal background and ninja profile
- **Projects**: Showcase of A-Rank and B-Rank missions (projects)
- **Tech Stack**: Skills displayed with icons
- **Experience**: Professional journey timeline
- **Education**: Academic background
- **Contact**: Messenger Hawk form with MongoDB integration

### 🗄️ Backend Features
- MongoDB integration for contact form messages
- RESTful API with Express.js
- Local database storage
- Message tracking and retrieval

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Shadcn/ui** - UI component library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (Local)
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

---

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Installed locally with MongoDB Compass)
- **npm** or **yarn**

### Clone Repository
```
git clone https://github.com/avradeephalder/your-portfolio.git
cd your-portfolio
```

### Install Dependencies
```
npm install
```

### Environment Setup
Create a `.env` file in the root directory:
```
MONGODB_URI= YOUR-MONGODB-URI
PORT= YOUR-PORT
```

---

## 🚀 Running the Project

### Start MongoDB
Make sure MongoDB is running locally:
```
# Check if MongoDB is running
mongod --version

# If not running, start MongoDB service
```

### Development Mode

**Option 1: Run Both Servers Together**
```
npm run dev:all
```

**Option 2: Run Separately**

Terminal 1 - Backend:
```
npm run server
```

Terminal 2 - Frontend:
```
npm run dev
```

### Production Build
```
npm run build
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── sounds/                          # Audio files
│   │   ├── naruto-theme.mp3
│   │   ├── hawk-call-sound.mp3
│   │   ├── kuchiyose-no-jutsu.mp3
│   │   ├── sharingan.mp3
│   │   └── naruto-jutsu.mp3
│   ├── project-images/                  # Project screenshots
│   ├── icons/                           # Icons and assets
│   └── *.jpg                            # Character images
├── src/
│   ├── components/
│   │   ├── naruto/
│   │   │   ├── BackgroundMusic.jsx     # Audio player
│   │   │   └── ChatAssistant.jsx       # Chat feature
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── TechStack.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/                          # Reusable UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       └── Textarea.jsx
│   ├── lib/
│   │   ├── soundEffects.js             # Sound utilities
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server.js                            # Express backend
├── .env                                 # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎮 Usage Guide

### Audio Controls
- **Play/Pause**: Top-right corner buttons
- **Mute/Unmute**: Volume control available
- **Auto-play**: Click "ENTER SHINOBI WORLD" on start screen

### Contact Form
1. Fill in your ninja name, email, and message
2. Click "Release Messenger Hawk" 
3. Message saves to MongoDB automatically
4. View messages in MongoDB Compass

### Viewing Messages
```
# Open MongoDB Compass
# Connect to: mongodb://localhost:27017
# Database: portfolio
# Collection: messages
```

---

## 🔧 Configuration

### Customization

**Update Personal Info:**
Edit `src/components/sections/About.jsx` and other section files.

**Change Sound Files:**
Replace files in `public/sounds/` directory.

**Modify Colors:**
Update `tailwind.config.js` for theme colors.

**Add Projects:**
Edit the projects array in `src/components/sections/Projects.jsx`.

---

## 📊 API Endpoints

### POST `/api/messages`
Save contact form message
```
{
  "name": "Kakashi Hatake",
  "email": "kakashi@hiddenleaf.com",
  "message": "Great portfolio!"
}
```

### GET `/api/messages`
Retrieve all messages
```
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### GET `/api/health`
Health check endpoint
```
{
  "status": "OK",
  "message": "Server is running",
  "mongodb": "Connected"
}
```

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
```
# Check if MongoDB is running
ps aux | grep mongod

# Restart MongoDB
sudo systemctl restart mongod
```

### Audio Not Playing
- Check browser autoplay policies
- Click "ENTER SHINOBI WORLD" to enable audio
- Verify sound files exist in `public/sounds/`

### Build Errors
```
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

```
Copyright 2025 Avradeep Halder

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

## 👨‍💻 Developer

**Avradeep Halder**  
Full-Stack Developer | Data Science Enthusiast | Naruto Fan

- 🌐 Portfolio: [Your Website URL]
- 💼 LinkedIn: [linkedin.com/in/avradeep-halder-847995324](https://www.linkedin.com/in/avradeep-halder-847995324/)
- 🐙 GitHub: [github.com/avradeephalder](https://github.com/avradeephalder)
- 📍 Kolkata, India

---

## 🙏 Acknowledgments

- **Naruto** by Masashi Kishimoto - Inspiration for the theme
- **Naruto Community** - For the amazing artwork and assets
- **Open Source Community** - For the incredible tools and libraries

---

## 📝 Changelog

### v1.0.0 (2025-01-01)
- Initial release
- Naruto-themed design
- MongoDB integration
- Sound effects system
- Responsive mobile layout
- Start experience screen
- Contact form with backend

---

## 🎯 Future Enhancements

- [ ] Deploy to production
- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add more sound effects
- [ ] Create admin dashboard for messages
- [ ] Add email notifications
- [ ] Implement analytics
- [ ] Add more anime themes

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Built with 🍃 and determination in Kolkata, India**

*Believe it! Dattebayo!* 🦊
```
