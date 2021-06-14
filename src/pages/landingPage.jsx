import React from "react";
import { createUseStyles } from "react-jss";
import profile from "../public/profile.jpg";

const useStyles = createUseStyles({
  root: {
    background: "#121212",
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
  content: {
    maxWidth: "1240px",
    width: "100%",
  },
  aboutCard: {
    background: "#333",
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
    borderRadius: "25px",
    padding: "2rem",
  },
  profileContainer: {
    width: "100%",
    borderRadius: "25px",
    overflow: "hidden",
    marginRight: "2rem",
  },
  profileImage: {
    width: "100%",
  },
  profileTextContainer: {
    marginTop: "1rem",
    width: "100%",
  },
  profileText: {
    textAlign: "justify",
    fontSize: "14px",
    fontFamily: "Poppins, sans-serif"
  },
  title: {
    fontSize: "32px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500"
  },
  "@media (min-width: 768px)": {
    aboutCard:{
      flexDirection: "row"
    },
    profileContainer: {
      width: "30%",
    },
    profileTextContainer: {
      marginTop: 0,
      width: "70%",
    },
    profileText: {
      textAlign: "left",
      fontSize: "20px",
    },
    title: {
      fontSize: "72px",
    },
  },
  "@media (min-width: 1024px)": {
    title: {
      fontSize: "72px",
    },
    profileText: {
      fontSize: "24px",
    },
  },
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div>
          <h1 className={classes.title}>
            Gilang Novrizal Wibowo, <br />
            Fullstack Developer
          </h1>
        </div>
        <div className={classes.aboutCard}>
          <div className={classes.profileContainer}>
            <img className={classes.profileImage} src={profile} alt="profile" />
          </div>
          <div className={classes.profileTextContainer}>
            <p className={classes.profileText}>
              I am a Marine Engineering graduate and had worked in a ferry ship
              company as an internal control officer and interior procurement
              staff. I had an interest in the web development world, so I
              decided to took a Web and Mobile Development Bootcamp at
              Purwadhika Startup and Coding School. Now, I have become a
              fullstack developer. I have a high curiosity about new technology.
              I am an adaptable person and always willing to learn new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
