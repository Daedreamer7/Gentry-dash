"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from "lucide-react"
import { presentationData } from "@/lib/presentation-data"
import { PortableTextRenderer } from "@/components/portable-text/portable-text-renderer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PresentationViewer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const slides = presentationData.slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const resetPresentation = () => {
    setCurrentSlide(0)
    setIsPlaying(false)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-advance slides when playing
  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev === slides.length - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, 5000) // 5 seconds per slide

      return () => clearInterval(interval)
    }
  }, [isPlaying, slides.length])

  const slide = slides[currentSlide]

  return (
    <div className="h-full flex flex-col">
      {/* Presentation Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div>
          <h1 className="text-lg font-mono text-zinc-200">{presentationData.title}</h1>
          <p className="text-sm text-zinc-500">{presentationData.subtitle}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={resetPresentation}>
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleAutoPlay}>
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <span className="text-sm text-zinc-500 font-mono">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="flex-1 flex">
        {/* Slide Navigation */}
        <div className="w-64 border-r border-zinc-800 p-4 overflow-y-auto">
          <h3 className="text-sm font-mono text-zinc-400 mb-4">SLIDES</h3>
          <div className="space-y-2">
            {slides.map((slideItem, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-full text-left p-3 rounded-lg text-sm transition-colors",
                  currentSlide === index
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white",
                )}
              >
                <div className="font-medium">{slideItem.title}</div>
                {slideItem.subtitle && <div className="text-xs text-zinc-500 mt-1">{slideItem.subtitle}</div>}
              </button>
            ))}
          </div>
        </div>

        {/* Slide Display */}
        <div className="flex-1 flex flex-col">
          <div
            className={cn(
              "flex-1 p-8 overflow-y-auto",
              slide.layout === "hero" && "flex items-center justify-center text-center",
              slide.background === "gradient" && "bg-gradient-to-br from-zinc-900 to-zinc-800",
            )}
          >
            <div className={cn("max-w-4xl", slide.layout === "hero" ? "mx-auto" : "")}>
              {/* Slide Header */}
              <div className="mb-8">
                <h1
                  className={cn(
                    "font-mono tracking-wider text-zinc-100 mb-2",
                    slide.layout === "hero" ? "text-4xl" : "text-2xl",
                  )}
                >
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className={cn("text-zinc-400", slide.layout === "hero" ? "text-xl" : "text-lg")}>
                    {slide.subtitle}
                  </p>
                )}
              </div>

              {/* Slide Content */}
              <div
                className={cn(
                  slide.layout === "split" && "grid grid-cols-1 lg:grid-cols-2 gap-8",
                  slide.layout === "hero" && "max-w-3xl mx-auto",
                )}
              >
                <PortableTextRenderer blocks={slide.content} />
              </div>
            </div>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center justify-between p-4 border-t border-zinc-800">
            <Button
              variant="ghost"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    currentSlide === index ? "bg-zinc-300" : "bg-zinc-600",
                  )}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
