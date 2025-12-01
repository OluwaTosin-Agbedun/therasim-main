import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 30;

const useHeader = () => {
  const [isSolid, setSolid] = useState(false);

  useEffect(() => {
    const handler = () =>
      window.scrollY > SCROLL_THRESHOLD
        ? !isSolid && setSolid(true)
        : isSolid && setSolid(false);

    handler();

    document.addEventListener("scroll", handler);
    return () => document.removeEventListener("scroll", handler);
  }, [isSolid]);

  return {
    isSolid,
  };
};

export default useHeader;
