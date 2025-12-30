// Sound effect utility functions
export const playSound = (soundFile, volume = 0.5) => {
  const audio = new Audio(soundFile)
  audio.volume = volume
  audio.play().catch(err => console.log('Sound play failed:', err))
}

export const sounds = {
  sharingan: () => playSound('/sounds/sharingan.mp3', 0.4),
  hawkCall: () => playSound('/sounds/hawk-call-sound.mp3', 0.5),
  kuchiyose: () => playSound('/sounds/kuchiyose-no-jutsu.mp3', 0.5),
  narutoJutsu: () => playSound('/sounds/naruto-jutsu.mp3', 0.4),
}
