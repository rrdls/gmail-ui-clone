import React from "react";

import { Container, Left, Center, Right } from "./styles";
import {
  Menu,
  MailOutline,
  HelpOutline,
  Settings,
  AppsOutlined,
  AccountCircleOutlined,
} from "@material-ui/icons";
import SearchInput from "../SearchInput";

const TopBar: React.FC = () => {
  return (
    <Container>
      <Left>
        <Menu />
        <MailOutline />
        <h1>Gmail</h1>
      </Left>
      <Center>
        <SearchInput />
      </Center>
      <Right>
        <HelpOutline />
        <Settings />
        <AppsOutlined />
        <AccountCircleOutlined />
      </Right>
    </Container>
  );
};

export default TopBar;
