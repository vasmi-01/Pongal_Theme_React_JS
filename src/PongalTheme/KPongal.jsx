import React from "react";
import "./Pongal.css";

export default function KPongal() {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center image_rot">
                <h2 className="text-center mb-4">Kaanum Pongal</h2>
                <div>
                    <img
                        src="https://scontent.fmaa14-1.fna.fbcdn.net/v/t1.6435-9/50078593_2184353971826490_8656278934641442816_n.png?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W5QWg-OwHwwQ7kNvgF9d6OW&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=AkGJwcXiWswMNoM-uy6E4KD&oh=00_AYDONTYaFLhVNuRQiwpBpnciXzDfDN886Z-Is77Yv5TjNA&oe=67A8A0F1"
                        alt="Surya"
                        className="rounded-2 mb-3 "/>
                </div>
                <div className="text-center w-50">
                    <p style={{ textAlign: "justify", textAlignLast: "center" }}>
                        Kaanum Pongal is the fourth day of the Pongal festival, celebrated to strengthen family bonds and community ties. It is a day for social gatherings, outings, and visiting relatives and friends. People celebrate by organizing picnics, enjoying festive meals, and exchanging gifts. The day symbolizes sharing prosperity, unity, and the importance of relationships.
                    </p>
                </div>
                <div className="text-center">
                    <p
                        style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#8B0000",
                            background: "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,0.4066001400560224) 100%)",
                            padding: "10px",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                            fontStyle: "italic",
                        }} >
                        "Kaanum Pongal brings together hearts and homes, sharing the harvest of love and happiness."
                    </p>
                </div>
            </div>
        </>
    );
}
