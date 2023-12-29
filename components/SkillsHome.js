import assetsURLs from "./Constants"
import Image from "next/image"

export default function SkillsHome() {
  const { htmlIcon, cssIcon, javascriptIcon, reactIcon, nextIcon, reduxIcon } = assetsURLs

  return (
    <div className="skillsHome__container">
      <div className="skillsHome__title">
        <h1>Skills</h1>
      </div>
      <div className="skillsHome__development">
        <div className="skillsHome__coding-icon"></div>
        <br />
        <h4 className="skillsHome__title">Development </h4>
        <Image
          src="/images/coding-icon.webp"
          className="skillsHome__download-icon"
          width={30}
          height={30}
          alt="coding-icon"
        />
        <div className="skillsHome__col-12">
          <div className="skillsHome__icon">
            <Image
              src={htmlIcon}
              width={80}
              height={80}
              alt="html icon"
            />
            <p className="skillsHome__text">HTML</p>
          </div>
          <div className="skillsHome__icon">
            <Image
              src={cssIcon}
              width={80}
              height={80}
              alt="css icon"
            />
            <p className="skillsHome__text">CSS</p>
          </div>
          <div className="skillsHome__icon">
            <Image
              src={javascriptIcon}
              width={80}
              height={80}
              alt="js icon"
            />
            <p className="skillsHome__text">JavaScript</p>
          </div>
        </div>
        <div className="skillsHome__col-12">
          <div className="skillsHome__icon">
            <Image
              src={reactIcon}
              width={80}
              height={80}
              alt="react icon"
            />
            <p className="skillsHome__text">React</p>
          </div>
          <div className="skillsHome__icon">
            <Image
              src={reduxIcon}
              width={80}
              height={80}
              alt="redux icon"
            />
            <p className="skillsHome__text">Redux</p>
          </div>
        </div>
        <div className="skillsHome__col-12">
          <div className="skillsHome__icon">
            <Image
              src={nextIcon}
              width={80}
              height={80}
              alt="next icon"
            />
            <p className="skillsHome__text">Next.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}
