import React from "react";
import { Container } from "./styles";
import Button from "../Button";
import Section from "../Section";
import {
  Inbox,
  Star,
  WatchLater,
  Send,
  InsertDriveFile,
  Videocam,
  Keyboard,
} from "@material-ui/icons";

const LeftSideBar: React.FC = () => {
  return (
    <Container>
      <Button>Escrever</Button>
      <Section>
        <button>
          <Inbox />
          Caixa de entrada
        </button>

        <button>
          <Star />
          Com estrela
        </button>
        <button>
          <WatchLater />
          Adiados
        </button>
        <button>
          <Send />
          Enviados
        </button>
        <button>
          <InsertDriveFile />
          Rascunhos
        </button>
      </Section>
      <Section sectionName="Meet">
        <button>
          <Videocam />
          Iniciar uma reunião
        </button>
        <button>
          <Keyboard />
          Participar de reunião
        </button>
      </Section>
      <Section sectionName="Hangout">
        <button>
          <Videocam />
          Iniciar uma reunião
        </button>
      </Section>
    </Container>
  );
};

export default LeftSideBar;
