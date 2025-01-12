import React from "react";
import "./Pongal.css";

export default function Dance() {
    return (
        <>
            <div className="dance">
                <h1 className="text-center">Traditional Indian Folk Dances</h1>

                <div className="container my-5">
                    <div className="row mb-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
                            <img
                                src="https://www.vedakalaacademy.co.in/images/kummi-dance.jpg"
                                alt="Kummi"
                                className="rounded img-fluid"
                                style={{ width: "100%", maxWidth: "400px", height: "300px", objectFit: "cover" }} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <img
                                src="https://jfwonline.com/wp-content/uploads/2023/10/IMG_7646-2.jpg"
                                alt="Bharatanatyam"
                                className="rounded img-fluid"
                                style={{ width: "100%", maxWidth: "400px", height: "300px", objectFit: "cover" }}/>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="alert alert-primary w-100" role="alert">
                                <p className="mb-0">
                                    Kummi is a traditional women's dance performed in a circle,
                                    clapping hands to rhythmic beats. It's popular during festivals
                                    and celebrations.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="alert alert-primary w-100" role="alert">
                                <p className="mb-0">
                                    Bharatanatyam is a classical Indian dance form known for its
                                    intricate movements and expressions, representing devotion and
                                    storytelling.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="alert alert-primary w-100" role="alert">
                                <p className="mb-0">
                                    Koolatam is a stick dance performed by women, showcasing vibrant
                                    energy and coordinated movements in circles or rows.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="alert alert-primary w-100" role="alert">
                                <p className="mb-0">
                                    Mayil Aatam is a traditional Tamil dance featuring
                                    performers mimicking peacocks with artistic costumes and movements.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
                            <img
                                src="https://i.pinimg.com/474x/c2/b9/2d/c2b92d416628ee3b6ec639bf9abea297.jpg"
                                alt="Koolatam"
                                className="rounded img-fluid"
                                style={{ width: "100%", maxWidth: "400px", height: "300px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <img
                                src="https://formsofdancesintamilnadu.wordpress.com/wp-content/uploads/2020/03/6facc075-6e50-4df0-aeb8-bfc57bfb1ace.jpg"
                                alt="Mayil Aatam"
                                className="rounded img-fluid"
                                style={{ width: "100%", maxWidth: "400px", height: "300px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
