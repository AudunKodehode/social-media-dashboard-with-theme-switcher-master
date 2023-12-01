/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import FACEBOOK from "../assets/icon-facebook.svg";
import TWITTER from "../assets/icon-twitter.svg";
import INSTAGRAM from "../assets/icon-instagram.svg";
import YOUTUBE from "../assets/icon-youtube.svg";
import UP from "../assets/icon-up.svg";
import DOWN from "../assets/icon-down.svg";
export default function SmallCard({
  media,
  number,
  numberText,
  gainArrow,
  gain,
}) {
  return (
    <div className="smallCard trans1">
      <div className="cardTop">
        <h4>{numberText}</h4>
        {media === "facebook" ? (
          <img src={FACEBOOK} alt="facebook" />
        ) : media === "twitter" ? (
          <img src={TWITTER} alt="twitter" />
        ) : media === "instagram" ? (
          <img src={INSTAGRAM} alt="instagram" />
        ) : (
          <img src={YOUTUBE} alt="youtube" />
        )}
      </div>

      <div className="cardBottom">
        <div className="cardBottomLeft">
            <h2>{number}</h2>
        </div>
        <div className={gainArrow === "up" ? "cardBottomRight up" : "cardBottomRight down"}>
            {gainArrow === "up" ? (
          <img src={UP} alt="up" />
        ) : (
          <img src={DOWN} alt="down" />
        )}
        <p>{gain}</p>
            </div>

        
      </div>
    </div>
  );
}

