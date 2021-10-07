import React from "react";
import Container from "./Container";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

type Props = {
  //Insert Props Here
  children: React.ReactNode;
};

const ContainerWithSearchAndNav = ({ children }: Props) => {
  return (
    <Container>
      <SearchBar />
      <Nav />
      {children}
    </Container>
  );
};

export default ContainerWithSearchAndNav;
