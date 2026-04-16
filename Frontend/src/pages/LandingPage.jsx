import { Link } from "react-router"
import { FileTextIcon } from "lucide-react"

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "radial-gradient(125% 125% at 50% 10%, #000 60%, #00FF9D40 100%)" }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-16 py-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(0,255,157,0.1)", border: "1px solid rgba(0,255,157,0.25)" }}
          >
            <FileTextIcon size={25} color="#00FF9D" />
          </div>
          <span className="text-2xl font-mono font-semibold tracking-tight">
            Craft<span style={{ color: "#00FF9D" }}>Board</span>
          </span>
        </div>

        <Link
          to="/login"
          className="text-base font-medium px-6 py-2 rounded-lg text-black "
          style={{ background: "#00FF9D" }}
        >
          Login
        </Link>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
        <p
          className="text-sm font-medium uppercase tracking-widest mb-5"
          style={{ color: "rgba(0,255,157,0.7)", letterSpacing: "2px" }}
        >
          Note-taking, reimagined
        </p>

        <h1
          className="font-bold text-white mb-5"
          style={{ fontSize: "clamp(36px, 6vw, 56px)", letterSpacing: "-2.5px", lineHeight: 1.1 }}
        >
          Your notes.<br />
          <em className="not-italic" style={{ color: "#00FF9D" }}>Your space.</em>
        </h1>

        <p
          className="text-sm leading-relaxed mb-10 max-w-sm"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          A distraction-free note-taking app built for people who think in words.
        </p>

        <Link
          to="/register"
          className="px-10 py-3 rounded-lg text-sm font-bold text-black"
          style={{ background: "#00FF9D" }}
        >
          Get started →
        </Link>
      </div>
    </div>
  )
}

export default LandingPage