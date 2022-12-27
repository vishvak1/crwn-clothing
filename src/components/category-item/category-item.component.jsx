import { useNavigate } from "react-router-dom";

import "./scss/category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  const navigate = useNavigate();

  const goToCategoryHandler = (title) => {
    navigate(`/shop/${title}`);
  };

  return (
    <div
      className="category-container"
      onClick={() => {
        goToCategoryHandler(title);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
