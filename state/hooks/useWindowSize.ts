import { useEffect, useState } from "react";
import ISize from "../interfaces/ISize";

export default function useWindowSize(): ISize {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: 760,
    height: 760,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
