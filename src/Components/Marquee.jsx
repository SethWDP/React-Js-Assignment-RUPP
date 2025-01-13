import React from "react";
import p1 from "../assets/book1.jpg";
import p2 from "../assets/book2.jpg";
import p3 from "../assets/book3.jpg";
import p4 from "../assets/book4.jpg";
import p5 from "../assets/book5.jpg";
import p6 from "../assets/book6.jpg";
import p7 from "../assets/book7.jpg";
import p8 from "../assets/book8.jpg";
import p9 from "../assets/book9.jpg";
import p10 from "../assets/book14.jpg";
import p11 from "../assets/book11.jpg";
import p12 from "../assets/book12.jpg";
import p13 from "../assets/book13.jpg";
import p14 from "../assets/book15.jpg";

const Marquee = () => {
  const styleM = {
    marquee: {
      width: "100%",
      height: "30vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    },
    box: {
      width: "200px",
      height: "300px",
    },
    mainbox: {
      display: "flex",
      gap: "5rem",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div>
      <marquee style={styleM.marquee} direction="left">
        <div style={styleM.mainbox}>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p1} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p2} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p3} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p4} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p5} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p6} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p13} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p14} alt="" />
          </div>
        </div>
      </marquee>
      <marquee style={styleM.marquee} direction="right">
        <div style={styleM.mainbox}>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p7} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p8} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p9} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p10} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p11} alt="" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p12} alt="" />
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
