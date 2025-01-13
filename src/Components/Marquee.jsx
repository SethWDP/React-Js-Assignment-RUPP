import React from "react";
import Marquee from "react-fast-marquee";
import p1 from "../assets/book1.jpg";
import p2 from "../assets/book2.jpg";
import p3 from "../assets/book3.jpg";
import p4 from "../assets/book4.jpg";
import p5 from "../assets/book5.jpg";
import p6 from "../assets/book6.jpg";
import p7 from "../assets/book20.jpg";
import p8 from "../assets/book8.jpg";
import p9 from "../assets/book9.jpg";
import p10 from "../assets/book14.jpg";
import p11 from "../assets/book13.jpg";
import p12 from "../assets/book15.jpg";
import p13 from "../assets/book16.jpg";
import p14 from "../assets/book17.jpg";
import p15 from "../assets/book18.jpg";
import p16 from "../assets/book19.jpg";

const Marquees = () => {
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
    <div className="mt-3">
      <Marquee pauseOnHover direction="right">
        <div style={styleM.mainbox}>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p1} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p2} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p3} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p4} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p5} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p6} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p7} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p8} alt="bookimg" />
          </div>
        </div>
      </Marquee>
      <Marquee className="mt-3" pauseOnHover direction="left">
        <div style={styleM.mainbox}>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p9} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p10} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p11} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p12} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p13} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p14} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p15} alt="bookimg" />
          </div>
          <div className="box" style={styleM.box}>
            <img style={styleM.img} src={p16} alt="bookimg" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Marquees;
