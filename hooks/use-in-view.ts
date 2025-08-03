"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface Options extends IntersectionObserverInit {
  once?: boolean
}

export const useInView = (options: Options = { once: true, threshold: 0.1 }): [RefObject<HTMLDivElement>, boolean] => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options.once && ref.current) {
          observer.unobserve(ref.current)
        }
      } else if (!options.once) {
        setIsInView(false)
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return [ref, isInView]
}
