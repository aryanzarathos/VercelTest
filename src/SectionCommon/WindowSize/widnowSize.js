import { useState, useEffect } from 'react';

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window || 'undefine';
//   return {
//     width,
//     height
//   };
// }

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
      width: undefined,
      height: undefined,
  });
  useEffect(() => {
      function handleResize() {
          setWindowDimensions({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowDimensions;
};
export default useWindowDimensions;
