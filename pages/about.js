import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
// import '../App.css'

export default function About() {
  return (
    <div className="father">
      <div className="breadcrumb-section section-bg overflow-hidden pos-relative">
        <div className="breadcrumb-box">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="title">About</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-info-display-section section-gap-tb-165">
        <div className="video-info-display-box">
          <div className="container">
            <div className="video-info-display-wrapper">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-10">
                  <div className="video-card">
                    <a
                      href="#tatata"
                      className="btn btn-xl btn-outline-one icon-space-left">
                      Get Resume
                      <i className="icofont-download" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-8 offset-md-2 offset-lg-0 offset-xl-1">
                  <div className="video-info-content">
                    <h2 className="title">I&apos;m Mónica López</h2>
                    <h3 className="sub-title">Software Developer &amp; Frontend.</h3>
                    <p>
                      Experienced frontend developer with a strong background in administrative and
                      quality management systems. I&apos;ve gained 1 year of practical experience in
                      developing web applications, and I&apos;m dedicated to applying my skills to
                      deliver high-quality frontend solutions. With a solid track record of
                      implementing quality management systems, I bring a unique blend of technical
                      expertise and organizational skills to deliver high-quality frontend
                      solutions.
                    </p>
                  </div>
                </div>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3">
                  <Tab
                    eventKey="education"
                    title="Education">
                    <div
                      className="tab-pane fade show active"
                      id="education-tab"
                      role="tabpanel">
                      <ul className="resume-list">
                        <li className="resume-tab-list-single-item">
                          <div className="content">
                            <div className="left">
                              <span className="year">2023</span>
                            </div>
                            <div className="right">
                              <h3 className="title">
                                The Coding Interview Bootcamp: Algorithms + Data Structures
                              </h3>
                              <span className="institute-name">Udemy</span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="left">
                              <span className="year">2023</span>
                            </div>
                            <div className="right">
                              <h3 className="title">
                                Technical Test: Frontend Development with JavaScript
                              </h3>
                              <span className="institute-name">Platzi</span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="left">
                              <span className="year">2023</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Modern React with Redux</h3>
                              <span className="institute-name">Udemy</span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="left">
                              <span className="year">2022</span>
                            </div>
                            <div className="right">
                              <h3 className="title">
                                Bachelor&apos;s Degree in Industrial Engineering
                              </h3>
                              <span className="institute-name">
                                University of Antioquia, Medellín
                              </span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="left">
                              <span className="year">2022</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Practical JavaScript Course</h3>
                              <span className="institute-name">Platzi</span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="left">
                              <span className="year">2022</span>
                            </div>
                            <div className="right">
                              <h3 className="title">The Modern Javascript Bootcamp Course</h3>
                              <span className="institute-name">Udemy</span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="left">
                              <span className="year">2020</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Diploma HSEQ</h3>
                              <span className="institute-name">
                                University of Antioquia, Medellín
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="experience"
                    title="Experience">
                    <div
                      className="tab-pane fade active show"
                      id="experience-tab"
                      role="tabpanel">
                      <ul className="resume-list">
                        <li className="resume-tab-list-single-item">
                          <div className="content">
                            <div className="left">
                              <span className="year">2023</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Web UI Developer</h3>
                              <span className="institute-name">@App Tiempo</span>
                              <p>
                                Contributed to the development and maintenance of responsive web
                                applications using modern frontend technologies such as nextJS,
                                React, and Sass. Collaborated with cross-functional teams to
                                translate design concepts into functional websites. Participated
                                Participated in the implementation and optimization of user
                                interfaces to seamless user experience. Engaged in code reviews,
                                applying constructive feedback to learn and continuously improve.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="resume-tab-list-single-item">
                          <div className="content">
                            <div className="left">
                              <span className="year">2015 - 2022</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Administrative roles</h3>
                              <span className="institute-name">University of Antioquia</span>
                              <p>
                                Supported the implementation of the QualityManagement System (QMS)
                                according to ISO 9001, achieving successful certification. Developed
                                and supervised training programs for personnel, ensuring with
                                established quality procedures and standards. internal and external
                                audits to assess compliance with quality quality standards and
                                propose improvement actions.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="projects"
                    title="Projects">
                    <div
                      className="tab-pane fade show active"
                      id="projects-tab"
                      role="tabpanel">
                      <ul className="resume-list">
                        <li className="resume-tab-list-single-item">
                          <div className="content">
                            <div className="left">
                              <span className="year">2023</span>
                            </div>
                            <div className="right">
                              <h3 className="title">@App Tiempo</h3>
                              <img
                                src="ruta/a/la/imagen.jpg"
                                alt="AppTiempo"
                                className="appTiempo-image"
                              />
                              <p className="appTiempo-description">Description @AppTiempo.</p>
                            </div>
                          </div>
                          <div className="content">
                            <div className="left">
                              <span className="year">2023</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Memorym game</h3>
                              <img
                                src="ruta/a/la/imagen.jpg"
                                alt="Memory Game"
                                className="game-image"
                              />
                              <p className="game-description">Description Memorym game</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
