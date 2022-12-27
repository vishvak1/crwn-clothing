import { useNavigate } from "react-router-dom";

import "./scss/directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  const navigate = useNavigate();

  const goToCategoryHandler = (title) => {
    navigate(`/shop/${title}`);
  };

  return (
    <div
      className="directory-item-container"
      onClick={() => {
        goToCategoryHandler(title);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
