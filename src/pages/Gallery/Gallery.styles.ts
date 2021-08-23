import styled from 'styled-components';

export const GalleryContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 15px;
`;
