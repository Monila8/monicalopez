// import '../App.css'
import assetsURLs from './Constants'

export default function SkillsHome() {
  const { htmlIcon, cssIcon, javascriptIcon, reactIcon, nextIcon, reduxIcon } = assetsURLs

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="service-box-single-item swiper-slide swiper-slide-next"
            role="group"
            aria-label="5 / 9"
            style={{ width: '352px', marginRight: '45px' }}
            data-swiper-slide-index="1"
          >
            <div className="inner-shape inner-shape-top-right" />
            <div className="icon">
              <img src="/service-icon-2.webp" alt="service Icon" />
            </div>
            <h4 className="title">Development </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="gray-box text-center">
            <img className="skills_img" src={htmlIcon} alt="html icon" />
            <p>HTML</p>
          </div>
          <div className="gray-box text-center">
            <img className="skills_img" src={cssIcon} alt="css icon" />
            <p>CSS</p>
          </div>
          <div className="gray-box text-center">
            <img className="skills_img" src={javascriptIcon} alt="js icon" />
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="gray-box text-center">
            <img className="skills_img" src={reactIcon} alt="react icon" />
            <p>React</p>
          </div>
          <div className="gray-box text-center">
            <img className="skills_img" src={reduxIcon} alt="redux icon" />
            <p>Redux</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="gray-box text-center">
            <img className="skills_img" src={nextIcon} alt="next icon" />
            <p>Next.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}
