import {useEffect, useState} from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function onResize() {
      // Set window width/height to state
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", onResize);

    // Call handler right away so state gets updated with initial window size
    onResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return screenSize;
}