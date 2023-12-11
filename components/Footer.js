import Image from "next/image"
// import '../App.css'

export default function Footer() {
  return (
    <div className="footer__wrapper">
      <p className="footer__text">
        <h2>Contact</h2>
        <Image
          src="/images/phone-icon.png"
          width={150}
          height={150}
          alt="js icon"
        />
        <b>+57 3016560150</b>
      </p>
      <br />
      <p className="footer__text">
        <Image
          src="/images/mail-icon.png"
          width={150}
          height={150}
          alt="js icon"
        />
        <b>monicalopezarroyave@gmail.com</b>
      </p>
      <br />
      <p className="footer__text">
        <Image
          src="/images/github-icon.png"
          width={150}
          height={150}
          alt="js icon"
        />
        <b>Monila8</b>
      </p>
      <br />
      <p className="footer__text">
        <Image
          src="/images/location-icon.png"
          width={150}
          height={150}
          alt="location icon"
        />
        <b>Medellín, Colombia</b>
      </p>
      <br />
    </div>
  )
}
