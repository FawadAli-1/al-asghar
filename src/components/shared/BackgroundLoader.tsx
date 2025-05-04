"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BackgroundLoader = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = "/bg.jpg"
    img.onload = () => {
        setTimeout(() => setLoaded(true), 800)
    }
  }, [])

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-green-700 flex items-center justify-center z-[100]"
        >
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <div>
            <h1 className="text-xl font-medium ml-8">Please wait...</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackgroundLoader
