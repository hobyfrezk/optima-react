import React, { useEffect, useState } from "react";

import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    placeItems: "center"
  },
  button: {
    position: "fixed",
    bottom: "15vh",
    right: "20vw",
    height: "40px",
    width: "40px",
    borderRadius: "20px",
    backgroundColor: "rgba(109, 117, 110, 0.8)",
    color: "white",
    border: 0
  },
  icon: {
    fontSize: "20px"
  }
}));

// Component that attaches scroll to top handler on page Y offset change
export const ScrollToTopControlller = () => {
  const classes = useStyles();
  const [scrollPosition, setScrollPosition] = useState();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={classes.container}>
      {scrollPosition > 100 && (
        <button onClick={handleOnClick} className={classes.button}>
          <ArrowUpwardOutlinedIcon className={classes.icon} />
        </button>
      )}
    </div>
  );
};
