import React from "react";

import { Container } from "./styles";

const MenuItem: React.FC = () => {
  return (
    <Container>
      <button>
        <Inbox />
        Caixa de entrada
      </button>
    </Container>
  );
};

export default MenuItem;
