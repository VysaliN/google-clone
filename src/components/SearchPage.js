import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import image from "./download.PNG";
import Search from "./Search";
import {
  MdSearch,
  MdImage,
  MdOutlineMoreVert,
  MdSettings,
  MdApps,
} from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { RiVideoLine } from "react-icons/ri";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data= response;
  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchpage-header">
        <div className="header">
          <Link to="/">
            <img className="searchpage-logo" src={image} alt="image" />
          </Link>
          <div className="searchpage-input">
            <Search />
          </div>

          <MdSettings className="settings" title="Settings" />
          <MdApps className="apps" title="Google apps" />
        </div>

        <div className="searchpage-options">
          <div className="searchpage-option">
            <MdSearch className="icons" />
            <Link to="/all">All</Link>
          </div>
          <div className="searchpage-option">
            <RiVideoLine className="icons" />
            <Link to="/news">Videos</Link>
          </div>
          <div className="searchpage-option">
            <MdImage className="icons" />
            <Link to="/images">Images</Link>
          </div>
          <div className="searchpage-option">
            <BiMap className="icons" />
            <Link to="/maps">Maps</Link>
          </div>
          <div className="searchpage-option">
            <CiShoppingTag className="icons" />
            <Link to="/shopping">Shopping</Link>
          </div>
          <div className="searchpage-option">
            <MdOutlineMoreVert className="icons" />
            <Link to="/more">More</Link>
          </div>
          <div className="searchpage-optionright">
            <Link to="/tools">Tools</Link>
          </div>
        </div>
      </div>

      {true && (
        <div className="search-results">
          <p className="result-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="results">
              <a href={item.link} className="link">
                {item.displayLink}
              </a>
              <a href={item.link} className="title">
                <h2>{item.title}</h2>
              </a>
              <p className="content">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
