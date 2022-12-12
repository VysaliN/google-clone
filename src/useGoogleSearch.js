import { useState, useEffect } from "react";
import API_KEY from "./Key";

const CONTEXT_KEY = "b7648ede1a4374011";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
  {
    /* <script async src="https://cse.google.com/cse.js?cx=b7648ede1a4374011">
        </script>
        <div class="gcse-search"></div> */
  }
};

export default useGoogleSearch;
