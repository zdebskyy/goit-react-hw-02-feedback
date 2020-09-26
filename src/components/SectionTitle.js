import React from "react";

const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionTitle;
