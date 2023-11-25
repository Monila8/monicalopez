// import '../App.css'
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="header-section sticky-header d-none d-lg-block">
      <div className="header-wrapper">
        <div className="container">
          <ul className="header-nav">
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
      </div>
    </header>
  )
}
