import React from "react";
import "./Pongal.css";
export default function BPongal() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center image_rot">
        <h2 className="text-center mb-4">Bhogi Pongal</h2>
        <div>
          <img
            src="https://alleventsio.com/wp-content/uploads/2018/01/bhogi-pongal-1.jpg"
            alt="Bhogi"
            className="rounded-2 mb-5"/>
        </div>
        <div className="text-center w-50">
          <p style={{ textAlign: "justify", textAlignLast: "center" }}>
            Bhogi is the first day of the Pongal festival, celebrated to mark the end
            of winter and the beginning of prosperity and it is celebrated on the
            last day of the Tamil month Margazhi, which usually falls on January 13.
            It is dedicated to Lord Indra, seeking blessings for a bountiful harvest.
            Families clean their homes, discard old belongings, and light a bonfire,
            symbolizing renewal and positivity.
          </p>
        </div>
        <div className="text-center">
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#8B0000",
              background: "linear-gradient(to right, #FFD700, #FFA500)",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              fontStyle: "italic",
            }}>"Burn the negatives of the past, light the fire of hope and happiness this Bhogi!"
          </p>
        </div>
      </div>

      <div className="w-100">
        <video
          src="/Bhogi.mp4"
          className="w-100"
          style={{ height: "500px", border: "none" }}
          controls
          playsInline>
        </video>
      </div>
    </>
  )
}