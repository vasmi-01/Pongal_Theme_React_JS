import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Pongal.css";


export default function MPongal() {

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center image_rot">
        <h2 className="text-center mb-4">Mattu Pongal Special</h2>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/11/32/25/85/360_F_1132258552_8MI5vXaUdrgsFPSBgjNy0sBbTfenCESr.jpg"
            alt="Jallikattu Image 4"
            className="rounded-2 mb-5"/>
        </div>

        <div className="d-flex flex-row align-items-center mb-5">
          <div className="me-4">
            <img
              src="https://images.nativeplanet.com/img/2014/01/08-jallikattu1.jpg"
              alt="Jallikattu Image"
              className="img-fluid rounded-circle mx-auto"
              style={{ width: "450px", height: "450px" }}/>
          </div>
          <div>
            <p style={{ width: "400px" }} className="fst-italic fs-5">
              Jallikattu is a traditional bull-taming sport celebrated in Tamil Nadu,
              primarily during the Pongal festival. It holds cultural and historical
              significance, showcasing bravery and honoring farmers and their
              livestock. Participants attempt to tame a bull by clinging to its hump,
              emphasizing the bond between humans and animals.
            </p>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-5">
          <div className="me-4 ">
            <p style={{ width: "400px" }} className="fst-italic fs-5">
              Traditional Indian attire varies by region, with sarees, dhotis, and kurtas being common. Tamil Nadu showcases vibrant silk sarees and veshtis, symbolizing elegance and cultural heritage.Folk dances like Bharatanatyam, Kummi, and Mayil Aatam embody Tamil Nadu's rich culture, narrating stories, and celebrating festivals with rhythmic movements and vibrant costumes.
            </p>
            <button className="btn btn-primary mx-5" style={{ color: "black" }}>
              <Link to="/Dance" target="_blank" style={{ textDecoration: "none", color: "black" }}>
                Know More</Link>
            </button>
          </div>

          <div>
            <img
              src="https://www.sundarisilks.com/cdn/shop/articles/nature-guide-to-a-colourful-pongal-cover.png?v=1673612770"
              alt="Jallikattu Image"
              className="img-fluid rounded-circle mx-auto"
              style={{ width: "450px", height: "450px" }}/>
          </div>
        </div>
      </div>

      <div className="w-100">
        <video
          src="/Jalli.mp4"
          className="w-100"
          style={{ height: "500px", border: "none" }}
          controls
          playsInline></video>
      </div>
    </>
  )
}
