import Image from "next/image"

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
            type="button"
            className="btn btn-outline-light">
            <a
              href="/resume/ResumeMLA.pdf"
              download="ResumeMLA.pdf"
              className="about__download-link">
              Get Resume
              <Image
                src="/images/download.png"
                className="about__download-icon"
                width={15}
                height={15}
                alt="download"
              />
            </a>
          </button>
        </div>
        <div className="hero__portrait">
          <Image
            className="hero__image"
            src="/images/me.png"
            width={400}
            height={600}
            alt="Me"
          />
        </div>
      </div>
    </div>
  )
}
