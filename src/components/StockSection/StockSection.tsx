import ItemCard from "../../components/ItemCard/ItemCard";
import SectionFilter from "../../components/SectionFilters/SectionFilter";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useStyles from "./StockSection.styles";
import Pagination from "@material-ui/lab/Pagination";

interface StockSectionProps {
  sectionTitle: string;
  items: any;
}

const StockSection = ({ sectionTitle, items }: StockSectionProps) => {
  const classes = useStyles();

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.sectionContainer}>
        <SectionTitle title={sectionTitle} />
        <SectionFilter />
        <div className={classes.productGrid}>
          {items.map((item) => (
            <ItemCard />
          ))}
        </div>
        <Pagination
          count={10}
          variant={"outlined"}
          shape={"rounded"}
          className={classes.paddingContainer}
        />
      </div>
    </>
  );
};
