import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryPreviewTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  position: relative;

  &::after {
    font-size: medium;
    font-weight: normal;
    content: "View more >";
    float: right;
  }
`;

export const CategoryPreviewItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
