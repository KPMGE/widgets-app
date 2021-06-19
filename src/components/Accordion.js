import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClickHandler = (index) => {
    setActiveIndex(index);
  };

  const itemsToRender = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClickHandler(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{itemsToRender}</div>;
};

export default Accordion;
