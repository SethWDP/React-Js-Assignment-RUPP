import React from "react";
const PeopleSayCard = () => {
  const People = [
    {
      id: 1,
      img: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1",
      name: "Ronaldo",
      desc: "This is a good website for people that like to buy a book online",
    },
    {
      id: 2,
      img: "https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1",
      name: "Messi",
      desc: "This is a good website for people that like to buy a book online",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfC5TPxkYkOZGUqB4g7UTuasWX1hs38X5uw&s",
      name: "Neymar",
      desc: "This is a good website for people that like to buy a book online",
    },
  ];
  return (
    <div className="container d-flex flex-wrap gap-2">
      {People.map((p) => {
        const { id, img, name, desc } = p;
        const imgstyle = {
          width: "150px",
          height: "150px",
          borderRadius: "50%",
        };
        return (
          <div key={id}>
            <img src={img} style={imgstyle} alt={name} />
            <h2>{name}</h2>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleSayCard;
