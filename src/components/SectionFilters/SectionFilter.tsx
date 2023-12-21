import { useDispatch } from "react-redux";
import useStyles from "./SectionFilter.styles";
import { useState } from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import { FilterOrder } from "../../features/products/constants";
import { ProductType } from "../../features/products/constants";
import { setFilters } from "../../features/products/productsSlice";

const SectionFilter = () => {
  const classes = useStyles();
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const [activeType, setActiveType] = useState<ProductType | undefined>(
    undefined
  );
  const [activeOrder, setActiveOrder] = useState<FilterOrder | undefined>(
    undefined
  );
  const dispatch = useDispatch();

  const handleFilterClick = (filter: ProductType | undefined) => {
    dispatch(setFilters({ selectedType: filter }));
    setActiveType(filter);
  };

  const handleFilterOrderClick = (filter: FilterOrder) => {
    dispatch(setFilters({ selectedOrder: filter }));
    setActiveOrder(filter);
  };

  const handleAdditionalFiltersClick = () => {
    setAreFiltersVisible(!areFiltersVisible);
  };

  return (
    <div className={classes.container}>
      <div
        className={`${classes.filterButton} ${
          activeType === undefined ? classes.activeFilter : ""
        }`}
        onClick={() => handleFilterClick(undefined)}
      >
        All
      </div>
      <div
        className={`${classes.filterButton} ${
          activeType === ProductType.T_SHIRT ? classes.activeFilter : ""
        }`}
        onClick={() => handleFilterClick(ProductType.T_SHIRT)}
      >
        T-shirt
      </div>
      <div
        className={`${classes.filterButton} ${
          activeType === ProductType.HOODIE ? classes.activeFilter : ""
        }`}
        onClick={() => handleFilterClick(ProductType.HOODIE)}
      >
        Hoodies
      </div>
      <div className={classes.filterButtonContainer}>
        <div
          className={`${classes.filterButton} ${
            areFiltersVisible ? classes.activeFilter : ""
          }`}
          onClick={handleAdditionalFiltersClick}
        >
          <FilterListIcon />
        </div>
        {areFiltersVisible && (
          <div className={classes.filtersDropdownContainer}>
            <div
              className={`${classes.filtersDropdownOptions} ${
                activeOrder === FilterOrder.LATEST ? classes.activeFilter : ""
              }`}
              onClick={() => handleFilterOrderClick(FilterOrder.LATEST)}
            >
              Latest
            </div>
            <div
              className={`${classes.filtersDropdownOptions} ${
                activeOrder === FilterOrder.OLDEST ? classes.activeFilter : ""
              }`}
              onClick={() => handleFilterOrderClick(FilterOrder.OLDEST)}
            >
              Oldest
            </div>
            <div
              className={`${classes.filtersDropdownOptions} ${
                activeOrder === FilterOrder.HIGHEST ? classes.activeFilter : ""
              }`}
              onClick={() => handleFilterOrderClick(FilterOrder.HIGHEST)}
            >
              Price (highest)
            </div>
            <div
              className={`${classes.filtersDropdownOptions} ${
                activeOrder === FilterOrder.LOWEST ? classes.activeFilter : ""
              }`}
              onClick={() => handleFilterOrderClick(FilterOrder.LOWEST)}
            >
              Price (lowest)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionFilter;
