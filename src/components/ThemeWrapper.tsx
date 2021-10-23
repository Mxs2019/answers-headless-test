import React, { useContext, useEffect } from "react";
import { ConfigContext } from "../utilities/configContext";

type Props = {
  //Insert Props Here
  children?: React.ReactNode;
};

const ThemeWrapper = ({ children }: Props) => {
  const config = useContext(ConfigContext);
  useEffect(() => {
    if (config.style?.colors?.brand) {
      document.documentElement.style.setProperty(
        "--brand",
        config.style?.colors?.brand
      );
    }
  }, [config.style?.colors?.brand]);

  return <div>{children}</div>;
};

export default ThemeWrapper;
