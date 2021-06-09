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
  },
  content: {
    maxWidth: "1240px",
    width: "100%",
  },
  aboutCard: {
    background: "#333",
    display: "flex",
    marginTop: "2rem",
    borderRadius: "25px",
    padding: "20px",
  },
  profileContainer: {
    width: "30%",
    borderRadius: "10px",
    overflow: "hidden",
    marginRight: "2rem"
  },
  profileImage: {
    width: "100%",
  },
  profileTextContainer:{
      width: "70%"
  },
  profileText:{
    fontSize: "24px"
  }
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div>
          <h1>
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
