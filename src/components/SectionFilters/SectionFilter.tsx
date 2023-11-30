import useStyles from "./SectionFilter.styles";
import { useState } from "react";
import FilterListIcon from "@material-ui/icons/FilterList";

const SectionFilter = () => {
  const classes = useStyles();
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const handleFiltersClick = () => {
    setAreFiltersVisible(!areFiltersVisible);
  };

  return (
    <div className={classes.container}>
      <div className={classes.filterButtonContainer}>All</div>
      <div className={classes.filterButtonContainer}>T-shirt</div>
      <div className={classes.filterButtonContainer}>Hoodies</div>
      <div
        className={classes.filterButtonContainer}
        onClick={handleFiltersClick}
      >
        <FilterListIcon />
      </div>
      {areFiltersVisible && (
        <div className={classes.filtersDropdownContainer}>
          <div className={classes.filtersDropdownOptions}>Latest</div>
          <div className={classes.filtersDropdownOptions}>Oldest</div>
          <div className={classes.filtersDropdownOptions}>Price (highest)</div>
          <div className={classes.filtersDropdownOptions}>Price (lowest)</div>
        </div>
      )}
    </div>
  );
};

export default SectionFilter;
