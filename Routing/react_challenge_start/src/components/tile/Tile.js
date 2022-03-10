import React from "react";

export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((item, index) => (
        <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>
          {item}
        </p>
      ))}
    </div>
  );
};
