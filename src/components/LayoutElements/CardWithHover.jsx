"use client";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "next-reveal";

function CardWithHover({ image, title, text }) {
  return (
    <RevealWrapper origin="bottom" className="key-element">
      <div className="key-element__image">
        <Image src={image} alt="image" width={350} height={490} />
      </div>
      <div className="key-element__hide">
        <h4 className="title">{title}</h4>
        <div className="text">{text}</div>
      </div>
    </RevealWrapper>
  );
}

export default CardWithHover;
