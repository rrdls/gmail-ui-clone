import React from "react";

import { Container } from "./styles";
import { Search, ArrowDropDown } from "@material-ui/icons";
const SearchInput: React.FC = () => {
  return (
    <Container>
      <Search />
      <input type="text" />
      <ArrowDropDown />
    </Container>
  );
};

export default SearchInput;
