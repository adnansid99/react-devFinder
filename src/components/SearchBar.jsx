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
  const { setData, isLoading, setIsLoading, setIsError } =
    useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    getGitHubData(userInput);
  }

  async function getGitHubData(USERNAME) {
    const { VITE_GITHUB_TOKEN } = import.meta.env;
    // console.log(YOUR_ACCESS_TOKVITE_GITHUB_TOKENEN);
    await axios({
      method: "get",
      url: `/users/${USERNAME}`,
      baseURL: "https://api.github.com",
      headers: {
        Authorization: `Bearer ${VITE_GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then(async (res) => {
        const validatedValue = await validateIt(res.data);
        setIsLoading(false);
        return setData(validatedValue);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
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
