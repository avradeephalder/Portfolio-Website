import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showStartScreen, setShowStartScreen] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('/sounds/naruto-theme.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.1

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
  if (showStartScreen) {
    // Disable scrolling
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    // Enable scrolling
    document.body.style.overflow = 'unset'
    document.documentElement.style.overflow = 'unset'
  }

  // Cleanup on unmount
  return () => {
    document.body.style.overflow = 'unset'
    document.documentElement.style.overflow = 'unset'
  }
}, [showStartScreen])

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
      setShowStartScreen(false)
    }
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      {/* Naruto-Themed Start Screen */}
      <AnimatePresence>
        {showStartScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.5,
              filter: "blur(20px)"
            }}
            transition={{ exit: { duration: 0.8 } }}
            className="fixed inset-0 z-[100] bg-black overflow-hidden"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                linear-gradient(to bottom, #000000, #1a1a1a, #000000)
              `
            }}
          >
            {/* Animated Leaf Pattern Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                    y: -100,
                    rotate: 0,
                    opacity: 0
                  }}
                  animate={{
                    y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                    rotate: 360,
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear"
                  }}
                  className="absolute text-4xl md:text-6xl"
                >
                  🍃
                </motion.div>
              ))}
            </div>

            {/* Top Scroll Banner */}
            <motion.div
              initial={{ y: -200, rotateX: -90 }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 h-12 md:h-32 bg-gradient-to-b from-orange-900/50 via-orange-800/30 to-transparent border-b-2 md:border-b-4 border-orange-600/50 z-0"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(249,115,22,0.1)\" stroke-width=\"1\"/%3E%3C/pattern%3E%3Crect width=\"100\" height=\"100\" fill=\"url(%23grid)\" /%3E%3C/svg%3E')"
              }}
            />

            {/* Bottom Scroll Banner */}
            <motion.div
              initial={{ y: 200, rotateX: 90 }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 right-0 h-12 md:h-32 bg-gradient-to-t from-orange-900/50 via-orange-800/30 to-transparent border-t-2 md:border-t-4 border-orange-600/50 z-0"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(249,115,22,0.1)\" stroke-width=\"1\"/%3E%3C/pattern%3E%3Crect width=\"100\" height=\"100\" fill=\"url(%23grid)\" /%3E%3C/svg%3E')"
              }}
            />

            {/* Mobile Layout - Stacked Vertically */}
            <div className="h-full flex flex-col justify-center items-center md:justify-between md:py-0 relative">
              
              {/* Naruto - Top on Mobile, Left on Desktop */}
              <motion.div
                initial={{ y: -400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full flex justify-center items-end md:absolute md:left-0 md:bottom-0 md:w-auto md:h-[85vh] z-10 h-56 md:h-auto mb-8 md:mb-0"
              >
                <motion.img
                  src="/naruto.png"
                  alt="Naruto"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] max-w-none"
                />
                {/* Orange glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 md:w-64 md:h-64 bg-orange-500/30 rounded-full blur-3xl pointer-events-none"
                />
              </motion.div>

              {/* Center Content with Scroll Design */}
                <div className="flex-shrink-0 z-20 px-4 w-full max-w-2xl my-6 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <motion.div
                  initial={{ scale: 0, rotateY: -180, opacity: 0 }}
                  animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, type: "spring" }}
                  className="relative"
                >
                  {/* Scroll Background */}
                  <div className="relative bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 rounded-2xl md:rounded-3xl shadow-2xl border-4 md:border-8 border-orange-900 p-4 md:p-16"
                    style={{
                      backgroundImage: `
                        linear-gradient(180deg, 
                          rgba(254, 243, 199, 1) 0%, 
                          rgba(253, 230, 138, 0.8) 50%, 
                          rgba(254, 243, 199, 1) 100%
                        ),
                        repeating-linear-gradient(90deg, 
                          transparent, 
                          transparent 2px, 
                          rgba(180, 83, 9, 0.05) 2px, 
                          rgba(180, 83, 9, 0.05) 4px
                        )
                      `,
                      boxShadow: `
                        inset 0 2px 20px rgba(0,0,0,0.1),
                        0 20px 60px rgba(0,0,0,0.5),
                        0 0 100px rgba(249,115,22,0.3)
                      `
                    }}
                  >
                    {/* Scroll Top Decoration */}
                    <div className="absolute -top-2 md:-top-6 left-1/2 -translate-x-1/2 w-3/4 h-2 md:h-6 bg-gradient-to-b from-orange-900 to-orange-800 rounded-t-full border-2 md:border-4 border-orange-950" />
                    <div className="absolute -bottom-2 md:-bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-2 md:h-6 bg-gradient-to-t from-orange-900 to-orange-800 rounded-b-full border-2 md:border-4 border-orange-950" />
                    
                    {/* Hidden Leaf Symbol */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl opacity-5 pointer-events-none"
                    >
                      🍃
                    </motion.div>

                    {/* Japanese Title */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="text-center mb-3 md:mb-6 relative"
                    >
                      <div className="text-3xl md:text-7xl font-bold mb-1 md:mb-2" style={{ 
                        color: '#dc2626',
                        textShadow: '2px 2px 0 #7f1d1d, 4px 4px 8px rgba(0,0,0,0.3)',
                        fontFamily: 'serif',
                        letterSpacing: '0.1em'
                      }}>
                        忍道
                      </div>
                      <div className="text-xs md:text-base text-orange-900/70 font-semibold tracking-widest">
                        NINDŌ - WAY OF THE NINJA
                      </div>
                    </motion.div>

                    {/* Divider Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="w-full h-0.5 md:h-1 bg-gradient-to-r from-transparent via-orange-900 to-transparent mb-3 md:mb-6"
                    />

                    {/* Quote */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="text-orange-900 text-center text-sm md:text-xl font-semibold mb-2 md:mb-6 italic"
                    >
                      "I never go back on my word!"
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="text-orange-800/80 text-center text-xs md:text-base mb-4 md:mb-8"
                    >
                      That's my ninja way. Dattebayo! 🍥
                    </motion.p>

                    {/* Main Button */}
                    <motion.button
                      onClick={startExperience}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 40px rgba(249, 115, 22, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-full py-3 md:py-5 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white font-bold text-base md:text-2xl rounded-xl shadow-2xl overflow-hidden border-2 md:border-4 border-orange-800 group"
                    >
                      {/* Shine effect */}
                      <motion.div
                        animate={{ x: [-300, 300] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                      />
                      
                      <span className="relative flex items-center justify-center gap-2 md:gap-3">
                        <span className="text-sm md:text-2xl">ENTER SHINOBI WORLD</span>
                      </span>
                    </motion.button>

                    {/* Kanji decorations on sides - Hidden on mobile */}
                    <motion.div
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -left-8 top-1/2 -translate-y-1/2 text-4xl text-red-800 font-bold rotate-90 hidden lg:block"
                    >
                      火
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="absolute -right-8 top-1/2 -translate-y-1/2 text-4xl text-blue-800 font-bold -rotate-90 hidden lg:block"
                    >
                      雷
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Sasuke - Bottom on Mobile, Right on Desktop */}
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full flex justify-center items-start md:absolute md:right-0 md:bottom-0 md:w-auto md:h-[85vh] z-10 h-56 md:h-auto mt-8 md:mt-0"
              >
                <motion.img
                  src="/sasuke.png"
                  alt="Sasuke"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                  className="h-full w-auto object-contain object-top drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] max-w-none"
                />
                {/* Blue glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 md:w-64 md:h-64 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Floating Chakra Particles - Desktop only */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: typeof window !== 'undefined' ? window.innerHeight : 1000,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  y: -100,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeOut"
                }}
                className="absolute pointer-events-none hidden md:block"
              >
                <div className={`w-2 h-2 rounded-full ${
                  i % 3 === 0 ? 'bg-orange-400' : 
                  i % 3 === 1 ? 'bg-blue-400' : 'bg-yellow-400'
                }`} 
                style={{
                  boxShadow: `0 0 10px ${
                    i % 3 === 0 ? 'rgba(249, 115, 22, 0.8)' : 
                    i % 3 === 1 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(234, 179, 8, 0.8)'
                  }`
                }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Controls */}
      {!showStartScreen && (
        <div className="fixed top-6 right-6 z-50 flex gap-2">
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-800 shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            )}
          </motion.button>

          <motion.button
            onClick={toggleMute}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-800 shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
              </svg>
            )}
          </motion.button>
        </div>
      )}
    </>
  )
}
