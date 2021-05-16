import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  background: ${(props) => (props.IsDark ? "#000000" : "#efefef")};
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }
`;

function Header({ IsDark }) {
  return (
    <HeaderStyled IsDark={IsDark}>
      <div className="container">
        <div className="logo">
          <img src="vercel.svg" alt="Sites Logo" />
          <span className="logo-text">Next movies</span>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
