import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const MemberCard = ({ img, name }) => {
  return (
    <div className="MemberCard">
      <div className="member-img">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <p class="title">Web Developer</p>
      <div className="social-icons">
        <a href="">
          <a href="" className="lnk-icon">
            <FontAwesomeIcon className="fb-icon" icon={faFacebook} />
            <a href="" className="lnk-icon">
              <FontAwesomeIcon className="lnkin-icon" icon={faLinkedin} />
            </a>
            <a href="" className="lnk-icon">
              <FontAwesomeIcon className="ig-icon" icon={faInstagram} />
            </a>
          </a>
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
{
  /* <div class="profile-image">
<img src="profile.jpg" alt="Profile Picture">
</div>
<h2>JEFFREY</h2>
<p class="title">Web Developer</p>
<div class="social-icons">
<a href="#"><i class="fab fa-facebook"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
<a href="#"><i class="fab fa-linkedin"></i></a>
<a href="#"><i class="fab fa-github"></i></a>
</div> */
}
