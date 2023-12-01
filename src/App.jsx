import "./App.css";
import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useState } from "react";
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <>
      <div className="main">
        <div className="backgroundTop"></div>
        <div className="divTop">
          <div className="divLeft">
            <h2>Social Media Dashboard</h2>
            <h4>Total Followers: 23,004</h4>
          </div>
          <div className="divider"> </div>
          <div className="divRight">
            <ThemeSwitcher darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          </div>
        </div>

        <div className="dashBoardContainer">
          <BigCard
            media="facebook"
            username="@nathanf"
            number="1987"
            numberText="FOLLOWERS"
            gainArrow="up"
            gain="12"
          />
          <BigCard
            media="twitter"
            username="@nathanf"
            number="1044"
            numberText="FOLLOWERS"
            gainArrow="up"
            gain="99"
          />
          <BigCard
            media="instagram"
            username="@realnathanf"
            number="11k"
            numberText="FOLLOWERS"
            gainArrow="up"
            gain="1099"
          />

          <BigCard
            media="youtube"
            username="Nathan F."
            number="8239"
            numberText="SUBSCRIBERS"
            gainArrow="down"
            gain="144"
          />
        </div>

        <div className="midContainer">
          <h2>Overview - Today</h2>
        </div>

        <div className="overviewContainer">
          <SmallCard
            media="facebook"
            number="87"
            numberText="Page Views"
            gainArrow="up"
            gain="3%"
          />

          <SmallCard
            media="facebook"
            number="52"
            numberText="Likes"
            gainArrow="down"
            gain="2%"
          />

          <SmallCard
            media="instagram"
            number="5462"
            numberText="Likes"
            gainArrow="up"
            gain="2257%"
          />

          <SmallCard
            media="instagram"
            number="52k"
            numberText="Profile Views"
            gainArrow="up"
            gain="1375%"
          />
          <SmallCard
            media="twitter"
            number="117"
            numberText="Retweets"
            gainArrow="up"
            gain="303%"
          />
          <SmallCard
            media="twitter"
            number="507"
            numberText="Likes"
            gainArrow="up"
            gain="553%"
          />
          <SmallCard
            media="youtube"
            number="107"
            numberText="Likes"
            gainArrow="down"
            gain="19%"
          />
          <SmallCard
            media="youtube"
            number="1407"
            numberText="Total Views"
            gainArrow="down"
            gain="12%"
          />
        </div>

        <style jsx>{`
          ${darkTheme === true
            ? "@import url('/Dark.css');"
            : "@import url('/Light.css');"}
        `}</style>
        <div className="attribution">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/AudunKodehode"
              target="_blank"
              rel="noreferrer"
            >
              AudunKodehode
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
