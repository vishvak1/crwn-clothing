import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  const navigate = useNavigate();

  const goToCategoryHandler = (title) => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <DirectoryItemContainer
      onClick={() => {
        goToCategoryHandler(title);
      }}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
