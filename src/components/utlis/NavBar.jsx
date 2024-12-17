import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="bg-[#4C5958] sticky top-0 z-50">
      <Link to="/"><div className="text-lg text-white p-4 hover:underline">Home</div></Link>
    </nav>
  )
}