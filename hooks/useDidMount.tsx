import React from "react";

const useDidMount = (func: Function, deps: []) => {
  const mounted = React.useRef(false);

  React.useEffect(() => {
    if (mounted.current) func();
    else mounted.current = true;
  }, deps);
};

export default useDidMount;
