"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

import { MotionButton } from "@/components/motion"

export const Fab = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = typeof window !== undefined ? window.scrollY : 0
      const scrollThreshold = 50
      setIsScrolled(scrollY > scrollThreshold)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (isScrolled) {
    return (
      <MotionButton
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full z-50 size-16 flex justify-center items-center"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUp className="h-8 w-8" />
      </MotionButton>
    )
  }

  return null
}
