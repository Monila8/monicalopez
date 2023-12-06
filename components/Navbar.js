// import '../App.css'
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar__container">
      <ul className="navbar__list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
