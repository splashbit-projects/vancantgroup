"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);


    return (
        <OrderContext.Provider
          value={{ orderPopupDisplay, setOrderPopupDisplay }}
        >
          {children}
        </OrderContext.Provider>
      );
}

export const useOrder = () => useContext(OrderContext);