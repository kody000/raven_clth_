import { useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./Product.styles";
import { useSelector } from "react-redux";
import { selectProductById } from "../../features/products/selectors";

const Product = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const product = useSelector(selectProductById(productId ?? "1"));
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);

  const handleToggleIsSizeDropdownOpen = () => {
    setIsSizeDropdownOpen(!isSizeDropdownOpen);
  };

  const tableData = [
    ["S", "62 cm", "66 cm", "25 cm"],
    ["M", "64 cm", "69 cm", "27 cm"],
    ["L", "68 cm", "72 cm", "30 cm"],
    ["XL", "72 cm", "76 cm", "33 cm"],
  ];

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.generalContainer}>
        <div className={classes.leftSideContainer}>
          <div className={classes.productImageContainer}></div>
          <div className={classes.sizeChartContainer}>
            <div className={classes.sizeChartTitle}>Size chart</div>
            <table className={classes.sizeChartTable}>
              <thead>
                <tr className={classes.trStyle}>
                  <th className={classes.thStyle}>Size</th>
                  <th className={classes.thStyle}>Width</th>
                  <th className={classes.thStyle}>Length</th>
                  <th className={classes.thStyle}>Sleeve</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className={classes.trStyle}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={
                          cellIndex % 2 === 0
                            ? classes.columnStylesEven
                            : classes.columnStylesOdd
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.rightSideContainer}>
          <div className={classes.productNameText}>
            {product?.name} {product?.type}
          </div>
          <div className={classes.productPriceContainer}>
            <div className={classes.productPriceText}>${product?.price}</div>
          </div>
          <div className={classes.optionsContainer}>
            <div
              className={classes.optionsButtonContainer}
              onClick={handleToggleIsSizeDropdownOpen}
            >
              Size
            </div>
            <div className={classes.optionsButtonContainer}>
              <span>-</span>1<span>+</span>
            </div>

            {isSizeDropdownOpen && (
              <div className={classes.sizeDropdownContainer}>
                {Object.entries(product?.sizes ?? {}).map(
                  ([size, available]) => {
                    if (available) {
                      return (
                        <div key={size} className={classes.sizeDropdownOptions}>
                          {size}
                        </div>
                      );
                    }
                    return null; // or handle the case where the size is not available
                  }
                )}
              </div>
            )}
          </div>
          <div className={classes.buyButton}>BUY NOW</div>
          <div className={classes.descriptionContainer}>
            <div className={classes.descriptionTitle}>Description</div>
            <div className={classes.descriptionText}>
              Introducing our Oversized Pain T-Shirt, a must-have for all Naruto
              fans and fashion enthusiasts alike. This unique and stylish
              t-shirt is a tribute to one of the most iconic characters from the
              Naruto series, Pain. Embrace the essence of Pain's character with
              this bold and eye-catching design. The relaxed fit ensures a
              comfortable and laid-back wear, making it perfect for all-day
              comfort and expressing your love for Naruto. Whether you're a fan
              of the Akatsuki or simply admire Pain's enigmatic presence, this
              t-shirt will make a statement wherever you go. Product Details: -
              UNISEX: Designed for everyone, this t-shirt is a versatile
              addition to any wardrobe, suitable for both men and women. -
              RELAXED FIT: No need to worry about sizing issues. Our t-shirt is
              designed for a comfortable and relaxed fit, perfect for all-day
              wear. - 100% COTTON JERSEY: Crafted from high-quality, soft, and
              breathable 100% cotton jersey fabric, this t-shirt is perfect for
              everyday wear. - 190 G/M²: With a weight of 190 grams per square
              meter, this t-shirt strikes the ideal balance between durability
              and comfort, ensuring it lasts and feels great. Show your love for
              Naruto and make a bold statement with our Oversized Pain T-Shirt.
              Get yours today and embody the essence of this iconic character in
              style.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
