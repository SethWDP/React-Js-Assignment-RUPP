import React from "react";
import "./peoplesaycard.css";
import PeopleSay from "./PeopleSay";
const PeopleSayCard = () => {
  const People = [
    {
      id: 1,
      img: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1",
      name: "Ronaldo",
      desc: "I love how easy it is to browse and purchase books. The user-friendly design and excellent recommendations make it a go-to for book lovers",
    },
    {
      id: 2,
      img: "https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1",
      name: "Messi",
      desc: "This website offers an incredible selection of books. It’s the perfect place for avid readers to discover their next favorite story or resource!",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfC5TPxkYkOZGUqB4g7UTuasWX1hs38X5uw&s",
      name: "Neymar",
      desc: "The best part about this website is its dedication to quality and user satisfaction. Every purchase feels like a gift to myself.",
    },
  ];
  return (
    <>
      <div className="container  ">
        <div className="people-say-card">
          {People.map((p) => {
            const { id, img, name, desc } = p;
            return (
              <div key={id}>
                <PeopleSay img={img} name={name} desc={desc} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PeopleSayCard;
