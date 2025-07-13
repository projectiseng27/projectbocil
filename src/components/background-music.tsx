import * as React from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

interface BackgroundMusicProps {
  src?: string
  autoPlay?: boolean
}

export function BackgroundMusic({ src = "/audio/semuaLaguCinta.mp3", autoPlay = true }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [volume, setVolume] = React.useState(0.3)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  // Initialize the audio when the component mounts
  React.useEffect(() => {
    const audio = audioRef.current || new Audio(src)
    audio.loop = true
    audio.volume = volume
    audio.preload = "auto"
    audioRef.current = audio

    // If autoplay is enabled, start playing the audio on user interaction
    if (autoPlay) {
      const playAudio = () => {
        if (!audio.paused) return; // Don't restart the audio if it's already playing
        audio.play()
          .then(() => {
            setIsPlaying(true)
            document.removeEventListener("click", playAudio)
            document.removeEventListener("keydown", playAudio)
          })
          .catch(console.error)
      }

      document.addEventListener("click", playAudio)
      document.addEventListener("keydown", playAudio)

      return () => {
        document.removeEventListener("click", playAudio)
        document.removeEventListener("keydown", playAudio)
      }
    }

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [src, volume, autoPlay])

  // Handle play/pause toggle
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(console.error)
      }
    }
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle volume changes
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-lg flex items-center space-x-2">
      <Button variant="ghost" size="sm" onClick={togglePlay} className="rounded-full p-2 hover:bg-pink-100">
        {isPlaying ? <Pause className="h-4 w-4 text-pink-600" /> : <Play className="h-4 w-4 text-pink-600" />}
      </Button>

      <Button variant="ghost" size="sm" onClick={toggleMute} className="rounded-full p-2 hover:bg-pink-100">
        {isMuted ? <VolumeX className="h-4 w-4 text-pink-600" /> : <Volume2 className="h-4 w-4 text-pink-600" />}
      </Button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
        className="w-16 h-1 bg-pink-200 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>
  )
}
