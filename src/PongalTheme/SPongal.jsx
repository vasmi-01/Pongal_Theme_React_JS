import React from "react";
import "./Pongal.css";

export default function SPongal() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center image_rot">
        <h2 className="text-center mb-4">Surya Pongal</h2>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/happy-pongal-celebration-background-with-south-indian-couple-doing-deity-surya-worship-traditional-dish-rice-cooking-bonfire_1302-30519.jpg"
            alt="Surya"
            className="rounded-2 mb-5"/>
        </div>
        <div className="text-center w-50">
          <p style={{ textAlign: "justify", textAlignLast: "center" }}>
            Surya Pongal, also known as Thai Pongal, is the second day of the four-day Pongal festival. It is a day to honor the sun god, Surya, and celebrate the start of Uttarayana. Surya Pongal marks gratitude for the agricultural bounty achieved through nature's blessings. Homes are decorated with kolams, and family prayers are conducted to celebrate abundance and renewal. The day signifies harmony, agricultural success, and the blessings of nature for the coming year
          </p>
        </div>
        <div className="text-center">
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#8B0000",
              background: "radial-gradient(circle, rgba(63,94,251,0.40940126050420167) 18%, rgba(252,70,107,1) 100%)",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              fontStyle: "italic",
            }}>"Let the Sun's golden rays fill your life with warmth, success, and a bountiful harvest!"
          </p>
        </div>
      </div>

    </>
  )
}