export function KunaiBullet({ className }) {
  return (
    <div className={`inline-flex items-center justify-center ${className || ''}`}>
      <img 
        src="/icons/kunai.svg" 
        alt="Kunai" 
        className="w-5 h-5"  /* Changed from w-4 h-4 to w-5 h-5 (20px) */
      />
    </div>
  )
}
