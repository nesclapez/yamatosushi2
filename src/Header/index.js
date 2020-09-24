import React from "react";
import { string } from "prop-types";

import yamatoLogo from "./logo.jpg";
import { Badge, Logo, Title, Wrapper } from "./styles";

const websiteTitle = "Yamato Sushi";

export default function Header({ title }) {
  return (
    <Wrapper>
      <Logo src={yamatoLogo} alt={websiteTitle} />
      <Title>
        {websiteTitle} - {title}
      </Title>
      <Badge>3</Badge>
    </Wrapper>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
