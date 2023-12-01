/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import FACEBOOK from "../assets/icon-facebook.svg";
import TWITTER from "../assets/icon-twitter.svg";
import INSTAGRAM from "../assets/icon-instagram.svg";
import YOUTUBE from "../assets/icon-youtube.svg";
import UP from "../assets/icon-up.svg";
import DOWN from "../assets/icon-down.svg";
export default function BigCard({
  media,
  username,
  number,
  numberText,
  gainArrow,
  gain,
}) {
  return (
    <div
      className={
        media === "youtube"
          ? "bigCard youtube trans1"
          : media === "twitter"
          ? "bigCard twitter trans1"
          : media === "facebook"
          ? "bigCard facebook trans1"
          : media === "instagram"
          ? "bigCard instagram trans1" 
          : ""
      }
    >
      <div className="cardTop">
        {media === "facebook" ? (
          <img src={FACEBOOK} alt="facebook" />
        ) : media === "twitter" ? (
          <img src={TWITTER} alt="twitter" />
        ) : media === "instagram" ? (
          <img src={INSTAGRAM} alt="instagram" />
        ) : (
          <img src={YOUTUBE} alt="youtube" />
        )}
        <h3>{username}</h3>
      </div>
      <div className="cardCenter">
        <h1>{number}</h1>
        <h4>{numberText}</h4>
      </div>
      <div className={gainArrow === "up" ? "cardBottom up" : "cardBottom down"}>
        {gainArrow === "up" ? (
          <img src={UP} alt="up" />
        ) : (
          <img src={DOWN} alt="down" />
        )}
        <p>{gain} Today</p>
      </div>
    </div>
  );
}
