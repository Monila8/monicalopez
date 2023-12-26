import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Navbar from "../components/Navbar"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <div className="about__content">
      <Navbar />
      <h2 className="about__page-title">About</h2>
      <div className="about__wrapper">
        <button
          type="button"
          className="btn btn-outline-light">
          Get Resume
          <Image
            src="/images/download.png"
            className="about__download-icon"
            width={15}
            height={15}
            alt="Me"
          />
        </button>
        <div className="about__text">
          <h2 className="about__title">I&apos;m Mónica López</h2>
          <h3 className="about__sub-title">Software Developer &amp; Frontend.</h3>
          <p>
            Experienced frontend developer with a strong background in administrative and quality
            management systems. I&apos;ve gained 1 year of practical experience in developing web
            applications, and I&apos;m dedicated to applying my skills to deliver high-quality
            frontend solutions. With a solid track record of implementing quality management
            systems, I bring a unique blend of technical expertise and organizational skills to
            deliver high-quality frontend solutions.
          </p>
        </div>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="about__about-navbar">
        <Tab
          eventKey="education"
          title="Education"
          className="about__about-title">
          <div
            className="about__education"
            id="education-tab"
            role="tabpanel">
            <ul className="about__education-list">
              <li className="about__education-list">
                <div className="about__education-content">
                  <span className="about__education-year">2023</span>
                  <h4 className="about__education-title">
                    The Coding Interview Bootcamp: Algorithms + Data Structures
                  </h4>
                  <span className="about__institute-name">Udemy</span>
                </div>
              </li>
              <li className="about__education-list">
                <div className="about__education-content">
                  <span className="about__education-year">2023</span>
                  <h4 className="about__education-title">
                    Technical Test: Frontend Development with JavaScript
                  </h4>
                  <span className="about__institute-name">Platzi</span>
                </div>
              </li>
              <li className="about__education-list">
                <div className="about__education-content">
                  <span className="about__education-year">2023</span>
                  <h4 className="about__education-title">Modern React with Redux</h4>
                  <span className="about__institute-name">Udemy</span>
                </div>
              </li>
              <li className="about__education-list">
                <div className="about__education-content">
                  <span className="about__education-year">2022</span>
                  <h4 className="about__education-title">
                    Bachelor&apos;s Degree in Industrial Engineering
                  </h4>
                  <span className="about__institute-name">University of Antioquia</span>
                </div>
              </li>
              <li className="about__education-list">
                <div className="about__education-content">
                  <span className="about__education-year">2022</span>
                  <h4 className="about__education-title">Practical JavaScript Course</h4>
                  <span className="about__institute-name">Platzi</span>
                </div>
              </li>
              <li className="about__education-list">
                <div className="about__education-content">
                  <span className="about__education-year">2022</span>
                  <h4 className="about__education-title">The Modern Javascript Bootcamp Course</h4>
                  <span className="about__institute-name">Udemy</span>
                </div>
              </li>
              <li className="about__education-list">
                <div className="about__education-content">
                  <span className="about__education-year">2020</span>
                  <h4 className="about__education-title">Diploma HSEQ</h4>
                  <span className="about__institute-name">University of Antioquia</span>
                </div>
              </li>
            </ul>
          </div>
        </Tab>
        <Tab
          eventKey="experience"
          title="Experience">
          <div
            className="about__experience"
            id="experience-tab"
            role="tabpanel">
            <ul className="about__experience-list">
              <li className="about__experience-list">
                <div className="about__experience-content">
                  <span className="about__experience-year">2023</span>
                  <h4 className="about__experience-title">Web UI Developer</h4>
                  <span className="about__experience-institute-name">@App Tiempo</span>
                  <p>
                    Contributed to the development and maintenance of responsive web applications
                    using modern frontend technologies such as nextJS, React, and Sass. Collaborated
                    with cross-functional teams to translate design concepts into functional
                    websites. Participated Participated in the implementation and optimization of
                    user interfaces to seamless user experience. Engaged in code reviews, applying
                    constructive feedback to learn and continuously improve.
                  </p>
                </div>
              </li>
              <li className="about__experience-list">
                <div className="about__experience-content">
                  <span className="about__experience-year">2015 - 2022</span>
                  <h4 className="about__experience-title">Administrative roles</h4>
                  <span className="about__experience-institute-name">@App Tiempo</span>
                  <p>
                    Supported the implementation of the QualityManagement System (QMS) according to
                    ISO 9001, achieving successful certification. Developed and supervised training
                    programs for personnel, ensuring with established quality procedures and
                    standards. internal and external audits to assess compliance with quality
                    quality standards and propose improvement actions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Tab>

        <Tab
          eventKey="projects"
          title="Projects">
          <div
            className="about__projects"
            id="projects-tab"
            role="tabpanel">
            <ul className="about__projects-list">
              <li className="about__projects-list">
                <div className="about__projects-content">
                  <span className="about__projects-year">2023</span>
                  <h4 className="about__projects-title">@App Tiempo</h4>
                  <Image
                    src="/images/appTiempo.jpg"
                    className="about__appTiempo-image"
                    width={250}
                    height={150}
                    alt="AppTiempo"
                  />
                  <p className="about__appTiempo-description">Description @AppTiempo.</p>
                </div>
              </li>
              <li className="about__projects-list">
                <div className="about__projects-content">
                  <span className="about__projects-year">2023</span>
                  <h4 className="about__projects-title">Memorym game</h4>
                  <Image
                    src="/images/memorym.jpg"
                    className="about__appTiempo-image"
                    width={250}
                    height={150}
                    alt="Memorym"
                  />
                  <p className="about__memorym-description">
                    Description Memorym game. *Link to play*
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Tab>
      </Tabs>
      <Footer />
    </div>
  )
}
