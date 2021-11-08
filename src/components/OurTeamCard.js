import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function OurTeamCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

          {/* front card */}
        <div className="our_team_card" id={props.id}>
          <div className="our_team_content">
            <div className="our_team_imgBx">
              <img src={props.image} alt="profile_picture" />
            </div>
            <div className="our_team_contentBx">
              <h3>
                {props.name}
                <br /> <span>{props.desc}</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a href="https://www.facebook.com">
                <i className="fa fa-facebook my_facebook_logo" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter my_twitter_logo" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com">
                <i className="fa fa-pinterest my_pinterest_logo" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <div className="our_team_button_div">
            <button className="our_team_button" onClick={handleClick}>
              Read More
            </button>
          </div>
        </div>




        {/* back card */}
        <div className="our_team_card">
          <div className="our_team_content">
            <p className="our_team_paragraph">{props.para}</p>
          </div>
          <div className="our_team_button_div">
            <button className="our_team_button_cancel" onClick={handleClick}>
              Cancel
            </button>
          </div>
        </div>

      </ReactCardFlip>
    </>
  );
}

export default OurTeamCard;
