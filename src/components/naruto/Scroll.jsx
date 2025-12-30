import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function Scroll({ title, children, className, isOpen = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "bg-scroll-paper border-2 border-kunai-metal rounded-lg p-6 paper-texture",
        className
      )}
    >
      <h3 className="text-xl font-bold mb-4 text-center border-b border-border pb-2">
        {title}
      </h3>
      {children}
    </motion.div>
  )
}
