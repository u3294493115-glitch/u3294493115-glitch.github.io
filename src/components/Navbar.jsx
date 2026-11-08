import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/[.06]' : 'bg-white/70'
    }`}>
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]">
          KKK的AI修炼场
        </Link>
        <div className="flex items-center gap-5 text-[13.5px]">
          <Link
            to="/"
            className={location.pathname === '/' ? 'text-[#1f5c52] font-semibold' : 'text-[#6e6e73] hover:text-[#1d1d1f]'}
          >
            首页
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'text-[#1f5c52] font-semibold' : 'text-[#6e6e73] hover:text-[#1d1d1f]'}
          >
            关于我
          </Link>
        </div>
      </div>
    </nav>
  )
}
