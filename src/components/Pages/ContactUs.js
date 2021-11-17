import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/ContactUs.css";

function ContactUs() {
  //   const [state, setState] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });

  //   const { name, email, subject, message } = state;
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!name || !email || !subject || !message) {
  //       toast.error("Please provide value in each input field");
  //     } else {
  //       firebaseDB.child("contacts").push(state);
  //       setState({ name: "", email: "", subject: "", message: "" });
  //       toast.success("Form Submitted Successfully");
  //     }
  //   };

  //   const handleInputChange = (e) => {
  //     let { name, value } = e.target;
  //     setState({ ...state, [name]: value });
  //   };
  return (
    <>
      <div className="get_a_demo_container">
        <div className="get_a_demo_heading">
          <h1>GET A DEMO</h1>
        </div>
        <div className="get_a_demo_container_paragraph">
          <p className="get_a_demo_paragraph">
            Bariflo Labs wants to grow with the aqua farmers. We want to share
            our knowledge and resources by piloting our patented technologies:
            Lotus (Aeration), hyacinth (feeder),Alga (monitoring) &Vibro (
            recycling) in the farm ponds. We look forward to support you and
            your venture by deploying these devices to eliminate your problems
            for enhancing your productivity.
          </p>
        </div>
      </div>
      <hr></hr>

      <section className="contact-section">
        <div className="container">
          <ToastContainer position="top-center" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send us a message</h3>
                      <form
                        id="contactForm"
                        className="contactForm"
                        //   onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                //   onChange={handleInputChange}
                                //   value={name}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                //   onChange={handleInputChange}
                                //   value={email}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder="Subject"
                                //   onChange={handleInputChange}
                                //   value={subject}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                type="text"
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                cols="30"
                                rows="6"
                                //   onChange={handleInputChange}
                                //   value={message}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3>LETS CONNECT</h3>
                      <p className="mb-4">
                        For more details please fill out the form below & we
                        will get back to you shortly!
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> VIT TBI, Vellore Campus,
                            Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>
                            <a href="tel://7328021033"> 7328021033</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>
                            <a href="mailto:info@yoursite.com">
                              {" "}
                              care@bariflolabs.com, bariflolabs@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website:</span>
                            <a href="https://bariflo.teceads.co.in">
                              {" "}
                              bariflo.teceads.co.in
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
