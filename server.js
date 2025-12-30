import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portfolio-backend-7p3g.onrender.com'
  ],
  credentials: true
}))
app.use(express.json())

// MongoDB Local Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err))

// Message Schema
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Message = mongoose.model('Message', messageSchema)

// API Endpoint - Save Message
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      })
    }

    // Create new message
    const newMessage = new Message({
      name,
      email,
      message
    })

    await newMessage.save()

    console.log('✅ New message saved:', { name, email })

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully! 🦅',
      data: newMessage
    })

  } catch (error) {
    console.error('❌ Error saving message:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again.' 
    })
  }
})

// Get all messages (to view in Compass)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })
    res.json({ success: true, count: messages.length, data: messages })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📊 API Health: http://localhost:${PORT}/api/health`)
  console.log(`📧 Messages API: http://localhost:${PORT}/api/messages`)
})
