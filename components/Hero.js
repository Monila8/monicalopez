// import '../App.css'

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="breadcrumb-content">
              <h2 className="title">Home</h2>
            </div>
            <div className="hero-content">
              <h3 className="title-big">Hello! I&apos;m</h3>
              <h2 className="title-large">
                Mónica <span className="shape-mark">López</span>
              </h2>
              <p>Software developer &amp; Frontend</p>
              <a href="#resume" className="btn btn-dark">
                Get Resume <i className="icofont-download" />
              </a>
            </div>
          </div>
          <div className="col-5">
            <img className="img-fluid" src="/me.png" alt="me" />
          </div>
        </div>
      </div>
    </div>
  )
}
