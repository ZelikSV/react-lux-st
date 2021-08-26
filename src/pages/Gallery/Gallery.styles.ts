import styled from 'styled-components';

export const GalleryContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 8px;
`;

export const GalleryWrapper = styled.div`
  overflow: auto;
  width: 100%;
  height: calc(100vh - 65px);

  .spinner {
    width: 100%;
    max-height: 100px;
  }
`;
