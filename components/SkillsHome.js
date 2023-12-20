// import '../App.css'
import assetsURLs from "./Constants"
import Image from "next/image"

export default function SkillsHome() {
  const { htmlIcon, cssIcon, javascriptIcon, reactIcon, nextIcon, reduxIcon } = assetsURLs

  return (
    <div className="skillsHome__container">
      <div className="skillsHome__title">
        <h1>Skills</h1>
      </div>
      <div className="skillsHome__coding-icon">
        <Image
          src="/images/coding-icon.webp"
          className="skillsHome__download-icon"
          width={80}
          height={80}
          alt="coding-icon"
        />
      </div>
      <h4 className="skillsHome__title">Development </h4>
      <div className="skillsHome__col-12">
        <Image
          src={htmlIcon}
          width={80}
          height={80}
          alt="html icon"
        />
        <p>HTML</p>
        <Image
          src={cssIcon}
          width={80}
          height={80}
          alt="css icon"
        />
        <p>CSS</p>
        <Image
          src={javascriptIcon}
          width={80}
          height={80}
          alt="js icon"
        />
        <p>JavaScript</p>
      </div>
      <div className="skillsHome__col-12">
        <Image
          src={reactIcon}
          width={80}
          height={80}
          alt="react icon"
        />
        <p>React</p>
        <Image
          src={reduxIcon}
          width={80}
          height={80}
          alt="redux icon"
        />
        <p>Redux</p>
      </div>
      <div className="skillsHome__col-12">
        <Image
          src={nextIcon}
          width={80}
          height={80}
          alt="next icon"
        />
        <p>Next.js</p>
      </div>
    </div>
  )
}
