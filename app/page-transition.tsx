import {
  AnimatePresence,
  Variants,
  motion,
  useReducedMotion,
} from "framer-motion"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
  isVisible: boolean
  duration: number
  childrenProps?: object
}

export default function PageTransition({
  children,
  isVisible,
  duration,
  childrenProps,
}: PageTransitionProps) {
  const path = usePathname()

  const HomeAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration,
      },
    },
  }

  const AboutAnimation = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration,
      },
    },
  }

  const ContactAnimation = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration,
      },
    },
  }

  const PortfolioAnimation = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration,
      },
    },
  }

  const variants: {
    [key: string]: Variants
  } = {
    "/": HomeAnimation,
    "/about": AboutAnimation,
    "/contact": ContactAnimation,
    "/projects": PortfolioAnimation,
  }

  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="w-full h-full"
          key={path}
          variants={!shouldReduceMotion ? undefined : variants[path]}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
