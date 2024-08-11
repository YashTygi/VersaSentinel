'use client'
import { animate, KeyframeOptions, useIsomorphicLayoutEffect } from 'framer-motion'
import { FC, useRef } from 'react'

type DataboxProps = {
  from: number,
  to: number,
  duration?: number
  animationOperations?: KeyframeOptions
}

const AnimatedCounter = ({from, to, animationOperations, duration}: DataboxProps) => {
    const ref = useRef<HTMLSpanElement>(null)
    useIsomorphicLayoutEffect(() => {
        const element = ref.current;

        if(!element) return;

        element.textContent = String(0)

        const controls = animate(from, to, {
            duration: duration || 10,
            ease: "easeInOut",
            ...animationOperations,
            onUpdate(value) {
                element.textContent = value.toFixed(0)
            }
        })
        return () => controls.stop()
    }, [ref, from, to, animationOperations])

  return <span ref={ref} className='font-mono text-6xl font-semibold' /> 
}

export default AnimatedCounter