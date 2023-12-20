import Image from "next/image"
// import '../App.css'

export default function Hero() {
  return (
    <div className="hero__wrapper">
      <h2 className="hero__title">Home</h2>
      <div className="hero__content">
        <div className="hero__text">
          <h3 className="hero__preheadline">Hello! I&apos;m</h3>
          <h2 className="hero__headline">Mónica López</h2>
          <p>Software developer &amp; Frontend</p>
          <button
            href="#resume"
            className="hero__download-button">
            Get Resume
            <Image
              src="/images/download.png"
              className="hero__download-icon"
              width={15}
              height={15}
              alt="Me"
            />
          </button>
        </div>
        <div className="hero__portrait">
          <Image
            className="hero__image"
            src="/images/me.png"
            width={300}
            height={500}
            alt="Me"
          />
        </div>
      </div>
    </div>
  )
}
