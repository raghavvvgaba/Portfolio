import { useEffect, useRef, useState } from 'react'
import { decode } from 'blurhash'

export default function BlurhashProfile({ hash, imageUrl, width, height }) {
  const canvasRef = useRef(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    try {
      const pixels = decode(hash, width, height)
      const imageData = ctx.createImageData(width, height)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)
    } catch (error) {
      console.error('Failed to decode blurhash:', error)
    }
  }, [hash, width, height])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageLoaded(true)
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: imageLoaded ? 0 : 1,
          transition: 'opacity 500ms ease-out',
        }}
      />
      <img
        src={imageUrl}
        alt="Profile"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 500ms ease-out',
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  )
}
