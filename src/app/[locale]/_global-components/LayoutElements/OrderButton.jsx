"use client";
import React from "react";
import { usePopup } from "@/src/utils/PopupsContext";

function OrderButton({ serviceInfo, orderButtonText }) {
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue, setServiceValue } = usePopup();

  const orderPopupOpen = () => {
    setServiceValue(serviceInfo);
    setOrderPopupDisplay(true);
  };

  return <button onClick={() => orderPopupOpen()} className="main-button">{orderButtonText}</button>;
}

export default OrderButton;
