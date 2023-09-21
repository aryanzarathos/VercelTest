import { useState, useEffect, useRef } from "react";
import { useOutsideClick } from "rooks";

/**cdd
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const ref=useRef()
  const [isActive, setIsActive] = useState(initialState);
  
  useOutsideClick(el?el:ref, () => {
    setIsActive(false)
  });
  return [isActive, setIsActive];
};
