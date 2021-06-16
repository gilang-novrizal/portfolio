import React from "react";
import { createUseStyles } from "react-jss";
import profile from "../public/profile.jpg";
import etera from "../public/etera.png";
import sinarmas from "../public/sinarmas.png";
import kotakode_event from "../public/kotakode_event.png";
import kotakode_story from "../public/kotakode_story.png";
import WorkCard from "../component/card";

const works = [
  {
    name: "Kotakode User Journey",
    year: 2021,
    image: kotakode_story,
    description: `So many programmers want to build a resume but sometimes they got confused about which is the best 
      format for their resume. With Kotakode User Journey feature now Kotakode users can easily create their resume 
      in the best format. Users can show their highlights, tech stack, and experiences on their resume. The resume is 
      very useful for job searching and another purpose. This resume format is recognized by the tech recruiter. I was 
      involved in developing the front end of this feature.`,
    link: "https://kotakode.com/users/4543/gilnov?activeTab=story",
  },
  {
    name: "Kotakode Event",
    year: 2021,
    image: kotakode_event,
    description: `Kotakode often held talk show events like KotaTalks and some other events. If you want to access the event 
    you have to fill the form on the google form, and access the other link if you have a question that you want to ask.
    This feature simplifies user access to the event of kotakode.com. Users can register for the upcoming kotakode event and 
    get the link to the live streaming video of the event, ask a question that users wanted to ask the speaker, see all questions 
    that other users ask for the event and also vote the question you might like or dislike. Users can also watch the past event 
    video that has been uploaded. All that can be done only with access the kotakode.com/events
    `,
    link: "https://kotakode.com/events",
  },
  {
    name: "events.sinarmasland.com ",
    year: 2021,
    image: sinarmas,
    description: `events.sinarmasland.com is a website for access Sinarmas Land online events. I was involved in developing some features
     of the website and some bug fixing on the existing website. I was handling upload attendees feature for the report, events list page, 
     and email reminder for the event's participant. I also optimized the website performance by refactoring the existing code. The tech 
     stacks of this website are React JS, Express JS, and MySQL database.   `,
    link: "https://events.sinarmasland.com/",
  },
  {
    name: "Eteratrade.com",
    year: 2020,
    image: etera,
    description: `Eteratrade.com was my first professional website project. This website was created for importer company office needs and 
    company profile. Mostly I worked on the front end side, but also worked on the back end side for developing the API. This website was built
     with React JS for the front end, Express JS for the backend, and MySQL database. `,
    link: "https://eteratrade.com/",
  },
];

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
    marginBottom: "2rem",
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
    textAlign: "left",
    fontSize: "14px",
    fontWeight: 300,
    color: "#777777",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    fontSize: "32px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
  },
  "@media (min-width: 768px)": {
    aboutCard: {
      flexDirection: "row",
    },
    profileContainer: {
      width: "40%",
    },
    profileTextContainer: {
      marginTop: 0,
      width: "60%",
    },
    profileText: {
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
    profileContainer: {
      width: "25%",
    },
    profileTextContainer: {
      width: "75%",
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
        <div>
          {works.map((work) => {
            return (
              <WorkCard
                title={work.name}
                year={work.year}
                description={work.description}
                image={work.image}
                imageAlt={work.name}
                link={work.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
