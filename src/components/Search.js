import React, { useState } from "react";
import { MdSearch, MdKeyboardVoice } from "react-icons/md";
import "./Search.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import SearchPage from "./SearchPage";

const Search = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const searching = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/searchpage");
  };
  <SearchPage />;
  return (
    <form className="search">
      <div className="search-input">
        <MdSearch className="search-btn" onClick={searching} type="submit"/>
        <input
          className="input"
          placeholder="Search Google or type a URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MdKeyboardVoice className="search-voice" />
      </div>

      {hideButtons ? (
        <div className="search-btns">
          <Button onClick={searching} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-btns">
          <Button
            className="search-btnshidden"
            onClick={searching}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search-btnshidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
