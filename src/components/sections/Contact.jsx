import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { Send, Bird, Loader2 } from "lucide-react"
import { sounds } from "../../lib/soundEffects"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Play hawk sound
    sounds.hawkCall()
    
    setStatus({ loading: true, success: false, error: '' })

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ loading: false, success: true, error: '' })
        setFormData({ name: '', email: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: '' })
        }, 5000)
      } else {
        setStatus({ loading: false, success: false, error: data.error })
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Failed to send message. Please check if the server is running.' 
      })
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">SEND A MESSENGER HAWK</h2>
          <p className="text-muted-foreground italic">
            "Need assistance with a mission? I am available for hire."
          </p>
        </motion.div>

        {/* Scroll-Style Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#2d2416] to-[#1a1410] border-4 border-[#8b6f47] rounded-lg p-8 md:p-12 shadow-2xl"
        >
          {/* Scroll Handles with Leaf Icon - Top */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-48 h-9 bg-gradient-to-b from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
            <img 
              src="/icons/leaf-village.svg" 
              alt="Leaf Village" 
              className="w-12 h-12 opacity-70"
            />
          </div>
          
          {/* Scroll Handles with Leaf Icon - Bottom */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-48 h-9 bg-gradient-to-t from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
            <img 
              src="/icons/leaf-village.svg" 
              alt="Leaf Village" 
              className="w-12 h-12 opacity-70"
            />
          </div>

          {/* Decorative Bird Icon */}
          <div className="absolute top-6 right-6 opacity-20">
            <Bird className="w-16 h-16 text-primary" />
          </div>

          {/* Form Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-primary/30">
              <Bird className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-[#f5deb3]">Mission Request Form</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ninja Name Field */}
              <div>
                <label className="block mb-2 text-sm font-bold text-[#f5deb3] uppercase tracking-wide">
                  Ninja Name
                </label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Kakashi Hatake" 
                  className="bg-black/30 border-2 border-primary/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block mb-2 text-sm font-bold text-[#f5deb3] uppercase tracking-wide">
                  Email Address
                </label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hokage@hiddenleaf.com" 
                  className="bg-black/30 border-2 border-primary/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                />
              </div>

              {/* Mission Details Field */}
              <div>
                <label className="block mb-2 text-sm font-bold text-[#f5deb3] uppercase tracking-wide">
                  Mission Details
                </label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your feedback, project or inquiry..." 
                  rows={6} 
                  className="bg-black/30 border-2 border-primary/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                variant="jutsu" 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={status.loading}
              >
                {status.loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Hawk...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Release Messenger Hawk
                </>
              )}
              </Button>
            </form>

            {/* Success Message */}
            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg"
              >
                <p className="text-sm text-primary italic">
                  ✓ Your message has been sent! I will respond as soon as possible.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-900/20 border-l-4 border-red-500 rounded-r-lg"
              >
                <p className="text-sm text-red-400 italic">
                  ✗ {status.error}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Social Links - Only GitHub and LinkedIn */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Or connect through these channels:</p>
          <div className="flex justify-center gap-6 flex-wrap">
            {/* GitHub Link */}
            <a 
              href="https://github.com/avradeephalder" 
              onClick={sounds.narutoJutsu}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 rounded-lg text-foreground hover:bg-primary/30 transition-all hover:scale-105"
            >
              <span className="font-semibold">Github</span>
            </a>
            
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/avradeep-halder-847995324/" 
              onClick={sounds.narutoJutsu}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-secondary/20 to-secondary/10 border-2 border-secondary/50 rounded-lg text-foreground hover:bg-secondary/30 transition-all hover:scale-105"
            >
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
