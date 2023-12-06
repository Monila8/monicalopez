import ListGroup from "react-bootstrap/ListGroup"
import assetsURLs from "../../components/Constants"
import Image from "next/image"

export default function BlogIndex() {
  const { javascriptIcon } = assetsURLs

  return (
    <div className="index__blog-container">
                <div className="project-hero-image">
                  <Image
                    src={javascriptIcon}
                    width={150}
                    height={150}
                    alt="js icon"
                  />
                </div>

                <div className="row">
                  <div className="col-lg-8">
                    <div className="default-content-style pos-relative">
                      <span className="section-tag">Givest - Non Profit Website</span>
                      <h2 className="title">Givest is a non profit and fund rising website.</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the indust standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged.
                      </p>

                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the indust standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled
                      </p>

                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the indust standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it typesetting,
                        remaining essentially unchanged.
                      </p>

                      <h3 className="sub-title">How to complete this?</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the indust standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it typesetting,
                        remaining essentially unchanged.
                      </p>

                      <ul className="content-list-item content-list-with-icon">
                        <li>
                          <div className="left">
                            <div className="icon">
                              <i className="icofont-bulb-alt" />
                            </div>
                          </div>
                          <div className="right">
                            <h4 className="list-title">Idea Generate</h4>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry has been the standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type typesetting, remaining
                              essentially unchanged.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="left">
                            <div className="icon">
                              <i className="icofont-ruler-pencil-alt-2" />
                            </div>
                          </div>
                          <div className="right">
                            <h4 className="list-title">Research &amp; Sketching</h4>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry has been the standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type typesetting, remaining
                              essentially unchanged.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="left">
                            <div className="icon">
                              <i className="icofont-airplane" />
                            </div>
                          </div>
                          <div className="right">
                            <h4 className="list-title">Launched Project</h4>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry has been the standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type typesetting, remaining
                              essentially unchanged.
                            </p>
                          </div>
                        </li>
                      </ul>

                      <h3 className="sub-title">Project result and summery</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the indust standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it typesetting,
                        remaining essentially unchanged.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the indust standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it typesetting,
                        remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                  <ListGroup defaultActiveKey="/blog">
                    <ListGroup.Item
                      action
                      href="/blog">
                      Introduction
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="/blog/grammar-types">
                      Grammar and types
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="/blog/logic-flow">
                      Logic and flow
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="/blog/arrays">
                      Arrays
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="/blog/objects">
                      Objects
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="/blog/loops">
                      Loops
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="/blog/functions">
                      Functions
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              
      
    </div>
  )
}
