
import { Link } from "react-router"
import { FileTextIcon } from "lucide-react"

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "radial-gradient(125% 125% at 50% 10%, #000 60%, #00FF9D40 100%)" }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(0,255,157,0.1)", border: "1px solid rgba(0,255,157,0.25)" }}
          >
            <FileTextIcon size={18} color="#00FF9D" className="sm:hidden" />
            <FileTextIcon size={22} color="#00FF9D" className="hidden sm:block" />
          </div>
          <span className="text-lg sm:text-2xl font-mono font-semibold tracking-tight text-white">
            Craft<span style={{ color: "#00FF9D" }}>Board</span>
          </span>
        </div>
   
        <Link
          to="/login"
          className="text-sm sm:text-base font-medium px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:text-black"
          style={{ border: "0.5px solid rgba(255,255,255,0.25)", color: "#fff", background: "transparent" }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#00FF9D";
            e.currentTarget.style.border = "0.5px solid #00FF9D";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.border = "0.5px solid rgba(255,255,255,0.25)";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Login
        </Link>

      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-8">
        <p
          className="text-xs sm:text-sm font-medium uppercase mb-4 sm:mb-5"
          style={{ color: "rgba(0,255,157,0.7)", letterSpacing: "2px" }}
        >
          Note-taking, reimagined
        </p>

        <h1
          className="font-bold text-white mb-4 sm:mb-5"
          style={{ fontSize: "clamp(30px, 8vw, 56px)", letterSpacing: "-2px", lineHeight: 1.1 }}
        >
          Your notes.<br />
          <em className="not-italic" style={{ color: "#00FF9D" }}>Your space.</em>
        </h1>

        <p
          className="text-sm leading-relaxed mb-8 sm:mb-10 max-w-xs sm:max-w-sm"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          A distraction-free note-taking app built for people who think in words.
        </p>

        <Link
          to="/register"
          className="px-8 sm:px-10 py-3 rounded-lg text-sm font-bold text-black transition-all duration-300 ease-in-out hover:scale-105"
          style={{ background: "#00FF9D" }}
        >
          Get started →
        </Link>
      </div>
    </div>
  )
}

export default LandingPage