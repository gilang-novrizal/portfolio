import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    marginTop: "2rem",
    fontFamily: "Poppins, sans-serif",
    width: "100%"
  },
  cardTitle: {
    marginBottom: "0.5rem",
    fontWeight: 500,
    fontSize: "24px",
  },
  cardYear: {
    marginBottom: "1rem",
    fontWeight: 500,
    color: "#777777",
    fontSize: "10px",
  },
  cardDescription: {
    color: "#777777",
    fontWeight: 300,
    fontSize: "14px",
  },
  imageContainer: {
    width: "100%",
    marginBottom: "1rem",
  },
  image: {
    width: "100%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    border: ".25px solid",
    borderColor: "rgb(67 90 111 / 30%)",
    borderRadius: "5px",
    background: "#F9F9FB",
    color: "#425A70",
    fontWeight: 500,
    fontSize: "12px",
    fontFamily: "Poppins, sans-serif",
    cursor: "pointer",
    outline: "none",
    boxShadow: "inset 0 1px 0 0 rgb(255 255 255 / 40%)",
    marginTop: "1rem",
    "&:hover": {
      transition: "all .25s",
      background: "#EDEFF1",
    },

    "&:disabled": {
      backgroundColor: "#AFAFAF",
      cursor: "not-allowed",
      color: "#F3F3F3",
      border: "#AFAFAF",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  link:{
    textDecoration: "none"
  },
  "@media (min-width: 768px)": {
    cardTitle: {
      fontSize: "48px",
    },
    cardYear:{
      fontSize: "16px"
    },
    button:{
      fontSize: "16px"
    },
    cardDescription:{
      fontSize: "20px"
    }
  }
});

const WorkCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h1 className={classes.cardTitle}>{props.title}</h1>
      <h3 className={classes.cardYear}>{props.year}</h3>
      <div className={classes.imageContainer}>
        <img src={props.image} alt={props.imageAlt} className={classes.image} />
      </div>
      <p className={classes.cardDescription}>{props.description}</p>
      <div className={classes.buttonContainer}>
        <a href={props.link} target="_blank"  rel="noreferrer" className={classes.link}>
          <button className={classes.button}>Explore More</button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
