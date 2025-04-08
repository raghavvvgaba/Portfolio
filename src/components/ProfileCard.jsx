import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import ProfileImg from '../assets/Profile.jpg'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedlnIcon } from '../icons/LinkedlnIcon'
import { MailIcon } from '../icons/MailIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { IconComponent } from './IconComponent'

export function ProfileCard() {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(200)
  const mouseY = useMotionValue(250)

  const rotateX = useSpring(useTransform(mouseY, [0, 500], [15, -15]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [0, 400], [-15, 15]), { stiffness: 200, damping: 20 })

  const translateImageY = useSpring(useTransform(mouseY, [0, 500], [-10, 10]), { stiffness: 300, damping: 25 })
  const translateImageX = useSpring(useTransform(mouseX, [0, 400], [-10, 10]), { stiffness: 300, damping: 25 })

  const translateIconsY = useSpring(useTransform(mouseY, [0, 500], [5, -5]), { stiffness: 300, damping: 25 })
  const translateIconsX = useSpring(useTransform(mouseX, [0, 400], [5, -5]), { stiffness: 300, damping: 25 })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseX.set(x)
      mouseY.set(y)
    }

    const handleMouseLeave = () => {
      mouseX.set(200)
      mouseY.set(250)
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      className="relative w-[400px] h-[500px] rounded-2xl p-6 flex flex-col items-center justify-start bg-gradient-to-tl from-secondary to-background text-text group overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl z-0 pointer-events-none " />
      <div className="absolute -inset-1 rounded-3xl z-0 pointer-events-none blur-2xl" />

      <motion.div
        style={{
          x: translateImageX,
          y: translateImageY
        }}
        whileHover={{ scale: 1.05 }}
        className="w-64 mb-4 z-10"
      >
        <img src={ProfileImg} alt="Profile" className="w-full h-auto object-contain rounded-xl shadow-lg" />
      </motion.div>

      <h1 className="text-xl font-bold z-10">Raghav Gaba</h1>
      <p className="text-sm text-gray-300 mt-1 text-center z-10">This is a short description about yourself.</p>

      <motion.div
        style={{
          x: translateIconsX,
          y: translateIconsY
        }}
        className="flex space-x-4 mt-4 pt-9 gap-3 z-10"
      >
        <IconComponent link="https://www.linkedin.com/in/raghav-gaba-30724b285/" icon={<LinkedlnIcon />} />
        <IconComponent link="https://github.com/raghavvvgaba" icon={<GithubIcon />} />
        <IconComponent link="https://x.com/raghavvvgaba" icon={<TwitterIcon />} />
        <IconComponent link="mailto:raghavvvgaba@gmail.com" icon={<MailIcon />} />
      </motion.div>
    </motion.div>
  )
}
