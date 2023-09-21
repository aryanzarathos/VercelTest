import React, { useState } from "react";
import useGlobalTheme from "../CustomHooks/useGlobalTheme";

export function isRGBorRGBAorHex(color) {
  const rgbPattern = /^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/i;
  const rgbaPattern = /^rgba\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*[\d.]+\)$/i;
  if (rgbPattern.test(color)) {
    return "rgb";
  } else if (rgbaPattern.test(color)) {
    return "rgba";
  } else {
    ("hex");
  }
}
export function rgbToHex(rgb) {
  // Remove whitespace and split the RGB value into an array
  const rgbArray = rgb.replace(/\s/g, "").split(",");

  // Convert each RGB value to a hexadecimal string
  const hexArray = rgbArray.map((value) => {
    const intValue = parseInt(value, 10);
    const hexValue = intValue.toString(16).padStart(2, "0");
    return hexValue;
  });

  // Combine the hexadecimal values
  const hexCode = "#" + hexArray.join("");

  return hexCode;
}

export function rgbaToHex(rgba) {
  // Remove whitespace and split the RGBA value into an array
  if (rgba) {
    const rgbaArray = rgba
      .substring(rgba.indexOf("(") + 1, rgba.lastIndexOf(")"))
      .split(",");

    const r = parseInt(rgbaArray[0]?.trim(), 10);
    const g = parseInt(rgbaArray[1]?.trim(), 10);
    const b = parseInt(rgbaArray[2]?.trim(), 10);

    const rgb = ((r << 16) | (g << 8) | b).toString(16);
    const hex = "#" + ("000000" + rgb).slice(-6);

    return hex;
  } else {
    return "";
  }
}

export function getOpacityFromRGBA(rgba) {
  const opacityRegex = /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/i;
  const match = rgba.match(opacityRegex);

  if (match && match.length === 2) {
    return parseFloat(match[1]);
  }

  return null; // Return null if no opacity value found or invalid format
}

export const useGlobalVariable = () => {
  const globalTheme = useGlobalTheme();
  const globalVariable = (value) => {
    const regex = /var\(--(.*?)\)/;
    const match = value?.match(regex);
    if (match) {
      const colorName = match[1];
      let myColor = globalTheme?.color?.[colorName];
      return myColor;
    } else {
       return value;
    }
  };
  return [globalVariable];
};
