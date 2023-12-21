import ItemCard from "../../components/ItemCard/ItemCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../features/products/selectors";
import SectionFilter from "../../components/SectionFilters/SectionFilter";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useStyles from "./New.style";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";

const New = () => {
  const classes = useStyles();
  const filteredProducts = useSelector(selectFilteredProducts);
  const totalPages = Math.ceil(filteredProducts.length / 8);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.sectionContainer}>
        <SectionTitle title={"Recent drop"} />
        <SectionFilter />
        <div className={classes.productGrid}>
          {currentProducts.map(({ id, name, type, color, price }, index) => {
            return (
              <Link key={index} to={`/product/${id}`}>
                <ItemCard
                  key={index}
                  name={name}
                  type={type}
                  color={color}
                  price={price}
                />
              </Link>
            );
          })}
        </div>
        <Pagination
          count={totalPages}
          page={currentPage}
          variant={"outlined"}
          shape={"rounded"}
          className={classes.paddingContainer}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default New;
