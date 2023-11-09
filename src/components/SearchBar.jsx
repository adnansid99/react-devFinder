import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "./Context";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const { setData, isLoading, setIsLoading } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    getGitHubData(userInput);
  }

  async function getGitHubData(USERNAME) {
    const YOUR_ACCESS_TOKEN = "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";
    await axios({
      method: "get",
      url: `/users/${USERNAME}`,
      baseURL: "https://api.github.com",
      headers: {
        Authorization: `token ${YOUR_ACCESS_TOKEN}`,
        Accept: "application/json",
      },
    }).then(async (res) => {
      const validatedValue = await validateIt(res.data);
      setIsLoading(false);
      return setData(validatedValue);
    });

    function validateIt(userData) {
      for (const key in userData) {
        if (userData[key] === null) {
          userData[key] = "Not available";
        }
      }
      return userData;
    }
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      <input
        onChange={(e) => setUserInput(e.target.value)}
        type="text"
        placeholder="Search GitHub usernames..."
      />
      <button type="submit" className="btn-search">
        {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Search"}
      </button>
    </form>
  );
}
