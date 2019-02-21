import React from "react";

const Filters = ({ handleClick, filter }) => {
  console.log("from filters", filter);
  const filterButton = ["All", "Completed", "Active"];
  const renderButtons = filterButton.map((filterBtn, i) => {
    return (
      <button
        key={i}
        onClick={() => handleClick(filterBtn)}
        className={filterBtn === filter ? "btn active" : "btn"}
      >
        {filterBtn}
      </button>
    );
  });

  return <div className="filters">{renderButtons}</div>;
};

export default Filters;
