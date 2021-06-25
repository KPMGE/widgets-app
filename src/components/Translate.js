import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>

      <br />

      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <br />

      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
