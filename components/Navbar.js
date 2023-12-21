import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar__container">
      <ul className="navbar__list">
        <li>
          <Link
            href="/"
            className="navbar__link">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="navbar__link">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="navbar__link">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}
