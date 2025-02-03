import React from "react";
import "./Member.css";
import sna from "../../assets/sna.jpg";
import seth from "../../assets/seth.jpg";
import huy from "../../assets/huy.jpg";
import vuth from "../../assets/vuth.jpg";
import potthea from "../../assets/puthea1.jpg";
import MemberCard from "./MemberCard";
const Member = () => {
  const Member = [
    {
      id: 1,
      img: sna,
      name: "Veasna",
    },
    {
      id: 2,
      img: seth,
      name: "PanhaSeth",
    },
    {
      id: 3,
      img: potthea,
      name: "Potthea",
    },
    {
      id: 4,
      img: huy,
      name: "Ly Huy",
    },
    {
      id: 5,
      img: vuth,
      name: "Sombo Vuth",
    },
  ];
  return (
    <>
      <div className="container Card">
        {Member.map((m) => {
          const { id, img, name } = m;
          return (
            <div key={id}>
              <MemberCard img={img} name={name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Member;
