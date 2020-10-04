import React, { ReactNode } from "react";

import { Container } from "./styles";
import { Add } from "@material-ui/icons";

type Props = {
  children?: ReactNode;
};
const Button: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <button>
        <Add />
        {children}
      </button>
    </Container>
  );
};

export default Button;
