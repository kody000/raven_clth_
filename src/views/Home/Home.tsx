import Typography from "@material-ui/core/Typography";
import useStyles from "./Home.style";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <div className="headerSpacer" />
      <div className={classes.heroTextContainer}>
        <Typography className={classes.heroText}>
          New <span className={classes.heroTextDecorator}>anime</span> drop out
          now
        </Typography>
        <Link to={"/new"}>
          <div className={classes.heroButton}>Shop now</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
