import React from "react";
import "./Team.css";
import Member from "./Member";
const Team = () => {
  return (
    <>
      <section className="TeamMember">
        <h1>About Our Team</h1>
        <div className="member-info">
          <Member />
        </div>
      </section>
    </>
  );
};

export default Team;
