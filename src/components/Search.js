import React, { useState, useEffect } from "react";

import axios from "axios";

const Search = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: text,
        },
      });
      setResults(data.query.search);
    };

    if (text) {
      search();
    }
  }, [text]);

  const resultsToRender = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter a search text</label>
          <input
            className="input"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>

      <div className="ui celled list">{resultsToRender}</div>
    </div>
  );
};

export default Search;
