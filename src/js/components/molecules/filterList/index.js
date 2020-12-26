import React from "react";
import Dropdown from "../../atoms/dropdown";

const FilterList = ({ filters, genres, onClear, onFilterClick }) => {
  return (
    <div className="filter-list">
      <Dropdown
        items={genres}
        active={filters.genre}
        onClick={(data) => {
          onFilterClick({
            key: "genre",
            value: data
          });
        }}
        label="Select Genre"
      />
      <Dropdown
        items={["4+", "5+", "6+", "7+", "8+", "9+"]}
        active={filters.rate}
        label="Select Rate"
        onClick={(data) => {
          onFilterClick({
            key: "rate",
            value: data
          });
        }}
      />
      <button
        type="button"
        className="clear-button btn btn-primary"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterList;
