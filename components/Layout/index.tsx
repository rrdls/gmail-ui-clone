import React, { ReactNode } from "react";
import Head from "next/head";
import { Container } from "./styles";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Gmail UI Clone" }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
