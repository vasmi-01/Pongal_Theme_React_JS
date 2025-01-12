import React from "react";
import "./Pongal.css";

export default function Kolam() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
        <h1 className="text-center mb-4" style={{ color: "#5A20CB" }}>Rangoli Kolam</h1>
        <div>
          <img
            src="https://i.pinimg.com/originals/60/c9/86/60c986d4809cc36b6d2e5a60f84171b4.gif"
            alt="Rangoli Animation"
            className="rounded-2 img-fluid"/>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary mx-2">
            <a
              href="/rangoli.pdf"
              download="RangoliDesigns.pdf"
              style={{ textDecoration: "none", color: "white" }}>Rangoli Design
            </a>
          </button>
          <button className="btn btn-secondary mx-2">
            <a
              href="https://youtu.be/nmrYmbiC4Sw?si=Jk0Sx50_rcwKl-GF"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}>Learn Rangoli
            </a>
          </button>
        </div>
      </div>
    </>
  )
}