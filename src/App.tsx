import styled from "@emotion/styled";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
        <Toaster />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
  /* max-width: 1280px; */

  margin: 0 auto;
`;
