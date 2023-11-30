import { Typography } from "@material-ui/core";
import useStyles from "./SectionTitle.styles";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography>{title}</Typography>
    </div>
  );
};

export default SectionTitle;
