import React from "react";

import { Root, Wrapper, Logo } from "./styles";
import NavBar from "./NavBar";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <NavBar />
    </Wrapper>
  </Root>
);
