import React, { useEffect, useRef, useState } from "react";

type UseType<T extends HTMLElement> = [React.RefObject<T>, boolean];

function useHover<T extends HTMLElement>(): UseType<T> {
  const [value, setValue] = useState(false);

  const ref = useRef<T>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [] // Recall only if ref changes
  );

  return [ref, value];
}

export { useHover };
