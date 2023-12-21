import Image from "next/image"

export default function Footer() {
  return (
    <footer className="footer__wrapper">
      <h2>Contact</h2>
      <p className="footer__text">
        <Image
          src="/images/phone-icon.png"
          width={25}
          height={25}
          alt="js icon"
        />
        <b>+57 3016560150</b>
      </p>
      <br />
      <p className="footer__text">
        <Image
          src="/images/mail-icon.png"
          width={25}
          height={25}
          alt="js icon"
        />
        <b>monicalopezarroyave@gmail.com</b>
      </p>
      <br />
      <p className="footer__text">
        <Image
          src="/images/github-icon.png"
          width={25}
          height={25}
          alt="js icon"
        />
        <b>Monila8</b>
      </p>
      <br />
      <p className="footer__text">
        <Image
          src="/images/location-icon.png"
          width={25}
          height={25}
          alt="location icon"
        />
        <b>Medellín, Colombia</b>
      </p>
      <br />
    </footer>
  )
}
