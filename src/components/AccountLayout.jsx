import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

function AccountLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default AccountLayout;
