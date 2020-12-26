import React from "react";
import Tag from "../../atoms/tag";

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags &&
        tags.map((item, idx) => {
          return <Tag key={idx} label={item} />;
        })}
    </div>
  );
};

export default TagList;
