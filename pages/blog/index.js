import ListGroup from "react-bootstrap/ListGroup"
import Navbar from "../../components/Navbar"
import assetsURLs from "../../components/Constants"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function BlogIndex() {
  const { javascriptIcon } = assetsURLs

  return (
    <div className="index__blog-container">
      <Navbar />
      <h2 className="index__title">Blog</h2>
      <div className="index__blog-image">
        <Image
          src={javascriptIcon}
          width={150}
          height={150}
          alt="js icon"
        />
      </div>

      <div className="index__content">
        <div className="index__article">
          <br />
          <h2 className="index__article-title">Introduction</h2>
          <br />
          <h3 className="index__sub-title">What is javascript?</h3>
          <p>
            JavaScript, is a versatile and foundational programming language for web development. It
            emerged in the 1990s as a tool to imbue web pages with interactivity and dynamism,
            evolving since then to become one of the most popular and widely used languages in the
            world of software development.
          </p>
          <p>
            Unlike other programming languages, JavaScript is interpreted and executed directly by
            web browsers, enabling developers to create interactive experiences without relying on
            constant communication with the server. Its versatility is evident in a wide range of
            applications, from creating dynamic visual effects to real-time data manipulation.
          </p>
          <p>
            Among its standout features is its ability to modify the content of a web page after it
            has loaded, respond to user events, and communicate asynchronously with servers to load
            or send information without needing to reload the page. Furthermore, JavaScript is an
            essential component in the development of single-page web applications (SPA) and the
            construction of modern user interfaces.
          </p>
          <p>
            As web technology has advanced, JavaScript has kept pace, expanding beyond the browser
            to power the development of mobile applications and servers through platforms like
            Node.js. Its active community and ongoing evolution through standards like ECMAScript
            ensure that JavaScript will continue to be a key tool in any web developers kit.
          </p>

          <h3 className="index__sub-title">The tools you need</h3>
          <p>
            Before delving into JavaScript, it&apos;s crucial to ensure you have the necessary
            tools. While JavaScript runs directly in web browsers, meaning you don&apos;t need a
            complex setup, there are some basic tools that will streamline your development process.
          </p>

          <ul className="index__tool-list">
            <li>
              <h4 className="index__list-title">Web Browser</h4>
              <p>
                An up-to-date web browser is essential for testing and running your JavaScript code.
                Some common options include Google Chrome, Mozilla Firefox, Microsoft Edge, and
                Safari. You can choose based on your preferences, as all of them support JavaScript
                development.
              </p>
            </li>
            <li>
              <h4 className="index__list-title">Code Editor: Workspace</h4>
              <p>
                To write and organize your code, you&apos;ll need a code editor. There are various
                options, from the lightweight and versatile Visual Studio Code to more specialized
                alternatives like Atom or Sublime Text. These editors offer features such as syntax
                highlighting, automatic suggestions, and extensions that facilitate efficient
                JavaScript coding.
              </p>
            </li>
            <li>
              <h4 className="index__list-title">Browser Console: Interactivity Tool</h4>
              <p>
                Each browser includes a built-in console that allows you to run JavaScript commands
                in real-time and debug your code. The console is useful for understanding how your
                code interacts with the browser and for identifying potential errors.
              </p>
              <p>If you need more information *link to javascript documentation*</p>
            </li>
          </ul>
        </div>
        <ListGroup defaultActiveKey="/blog">
          <ListGroup.Item
            action
            href="/blog">
            Introduction
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="/blog/grammar-types">
            Grammar and types
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="/blog/logic-flow">
            Logic and flow
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="/blog/arrays">
            Arrays
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="/blog/objects">
            Objects
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="/blog/loops">
            Loops
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="/blog/functions">
            Functions
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Footer />
    </div>
  )
}
