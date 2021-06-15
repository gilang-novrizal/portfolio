import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    marginTop: "2rem",
    fontFamily: "Poppins, sans-serif",
  },
  cardTitle:{
      marginBottom: "0.5rem",
      fontWeight: 500,
      fontSize: "48px"
  },
  cardYear:{
      marginBottom: "1rem",
      fontWeight: 500,
      color: "#777777",
      fontSize: "14px"
  },
  cardDescription:{
      color: "#777777",
      fontWeight: 300,
      fontSize: "18px"
  }
});

const WorkCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h1 className={classes.cardTitle}>{props.title}</h1>
      <h3 className={classes.cardYear}>{props.year}</h3>
      <p className={classes.cardDescription}>{props.description}</p>
      <a href={props.link}>
        <button>Explore More</button>
      </a>
    </div>
  );
};

export default WorkCard;
