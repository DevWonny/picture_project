import styled from "styled-components";

const Detail = () => {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default Detail;

const DetailWrap = styled.div`
  width: 450px;
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  // scroll 안보이게
  &::-webkit-scrollbar {
    display: none;
  }
`;
