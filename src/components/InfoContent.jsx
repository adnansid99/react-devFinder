import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLink,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { AppContext } from "./Context";

export default function InfoContent() {
  const { data } = useContext(AppContext);
  function initDate() {
    const date = new Date(data.created_at);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <div className="infoContent">
      <div className="imgSection">
        <img
          src={data.avatar_url}
          alt="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
        />
      </div>
      <div className="contentSection">
        <div className="initInfo">
          <div className="nameInfo">
            <div>
              <h2>{data.name}</h2>
              <p>@{data.login}</p>
            </div>
            <p>{initDate()}</p>
          </div>
        </div>
        <div className="bio">{data.bio}</div>
        <div className="reachCounter">
          <div className="repo">
            <p>Repos</p>
            <h3>{data.public_repos}</h3>
          </div>
          <div className="folower">
            <p>Follower</p>
            <h3>{data.followers}</h3>
          </div>
          <div className="following">
            <p>Following</p>
            <h3>{data.following}</h3>
          </div>
        </div>
        <div className="contacts">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            {data.location}
          </div>
          <div className="twitter">
            <FontAwesomeIcon icon={faXTwitter} />
            {data.twitter_username}
          </div>
          <div className="gitUrl">
            <FontAwesomeIcon icon={faLink} />
            {data.blog}
          </div>
          <div className="company">
            <FontAwesomeIcon icon={faBuilding} />
            {data.company}
          </div>
        </div>
      </div>
    </div>
  );
}
