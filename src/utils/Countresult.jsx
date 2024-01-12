import React from "react";

function Countresult({ totalCount }) {
  return (
    <p className="num-results">
      Found <strong>{totalCount || `NO`}</strong> results
    </p>
  );
}

export default Countresult;
