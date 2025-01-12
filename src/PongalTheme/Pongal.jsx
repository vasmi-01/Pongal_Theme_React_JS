import React from "react";
import { Link } from "react-router-dom";
import "./Pongal.css";

export default function Pongal() {
  return (
    <>
      <div className="d-flex flex-column align-items-center image_design">
        <h2 className="mb-4 font-cursive">Pongal</h2>
        <div className="text-center mb-4">
          <p className="w-50 mx-auto" style={{textAlign: "justify",textAlignLast:"center"}}>
            Pongal is a traditional Tamil harvest festival celebrating nature,
            especially the Sun God, for a bountiful harvest. It is marked by
            preparing sweet Pongal, decorating homes with kolams, and honoring
            cattle for their role in farming.
          </p>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center mb-4">
          <div className="me-4">
            <img
              src="https://c9admin.cottage9.com/uploads/5589/pongal-festival-2025.jpg"
              className="img-fluid rounded-2"
              style={{ width: "300px", height: "200px" }}
              alt="Pongal Festival"/>
            <h4 className="text-center mt-2">Ven Pongal</h4>
          </div>
          <div>
            <p style={{ width: "300px", textAlign: "justify" }}>
              A hearty dish made with rice, moong dal, ghee, black pepper, and
              cumin seeds, often served with coconut chutney and sambar,
              representing everyday prosperity and nourishment.
            </p>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center">
          <div className="me-4">
            <img
              src="https://media.istockphoto.com/id/1295876196/photo/celebrating-traditional-thai-pongal-festival-to-sun-god-with-pot-lamp-wood-fire-stove-fruits.jpg?s=170667a&w=0&k=20&c=4UMtcPhzzNXWtWZmktVaWX8M9-h5hZ3WYTIr8-v4XqM="
              className="img-fluid rounded-2"
              style={{ width: "300px", height: "200px" }}
              alt="Pongal Offering"/>
            <h4 className="text-center mt-2">Sweet Pongal</h4>
          </div>
          <div>
            <p style={{ width: "300px", textAlign: "justify" }}>
              Made with rice, jaggery, ghee, cashews, raisins, and flavored with
              cardamom, it is offered to the Sun God as a symbol of gratitude
              for a good harvest.
            </p>
          </div>
        </div>
      </div>   
           
            <div className="container mt-4">
    <div className="row">
        <div className="col-md-6 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://media.tenor.com/SiH7wtZXG4oAAAAM/happy-bhogi-gifs.gif"
                    className="card-img-top fixed-img"
                    alt="Bhogi Pongal"/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="mb-3">Bhogi Pongal</h5>
                    <Link to="/bpongal" target="_blank" className="btn btn-primary">
                        Know More
                    </Link>
                </div>
            </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://i.pinimg.com/550x/7c/43/9b/7c439b5f8afcc50d4c635fff4be75a07.jpg"
                    className="card-img-top fixed-img" 
                    alt="Surya Pongal"
                />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="mb-3">Surya Pongal</h5>
                    <Link to="/spongal" target="_blank"  className="btn btn-primary">
                        Know More
                    </Link>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://www.india.com/wp-content/uploads/2016/01/079.jpg"
                    className="card-img-top fixed-img"
                    alt="Mattu Pongal"/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="mb-3">Mattu Pongal</h5>
                    <Link to="/mpongal" target="_blank"  className="btn btn-primary">
                        Know More
                    </Link>
                </div>
            </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://static.toiimg.com/thumb/imgsize-23456,msid-80250666,width-600,resizemode-4/80250666.jpg"
                    className="card-img-top fixed-img"
                    alt="Kaanum Pongal"/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="mb-3">Kaanum Pongal</h5>
                    <Link to="/kpongal" target="_blank" className="btn btn-primary">
                      Know More</Link>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    );
}
