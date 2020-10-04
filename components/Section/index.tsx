import React, { ReactNode } from "react";

import { Container, Menu } from "./styles";

type Props = {
  children?: ReactNode;
  sectionName?: string;
};
const Section: React.FC<Props> = ({ children, sectionName }) => {
  return (
    <Container>
      {sectionName && <h2>{sectionName}</h2>}
      <Menu>{children}</Menu>
    </Container>
  );
};

export default Section;
