"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";

function CardWithIcon({ icon, title, content }) {
  return (
    <RevealWrapper origin="bottom" className="card-w-icon">
      <div>
        <img src={icon} />
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </RevealWrapper>
  );
}

export default CardWithIcon;
