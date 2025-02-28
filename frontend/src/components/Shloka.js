import React from 'react';

function Shloka({ devanagari, translation }) {
  return (
    <div className="shloka">
      <p className="devanagari">{devanagari}</p>
      <p className="translation">{translation}</p>
    </div>
  );
}

export default Shloka;