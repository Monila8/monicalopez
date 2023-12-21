import "bootstrap/dist/css/bootstrap.min.css"
import "@/styles/globals.css"
import "../pages/blog/blog-post.css"
import "../pages/blog/index.css"
import "../components/footer.css"
import "../components/hero.css"
import "../components/navbar.css"
import "../components/skillsHome.css"
import "../pages/about.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
