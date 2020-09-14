import React from "react";
import Container from "./Container";
import Text from "./Text";
import Link from "./Link";

import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

const Footer = () => {
  const yearCopyright = new Date().getFullYear();

  return (
    <footer className="footer">
      <Text className="footer-content">
        © {yearCopyright}. Designed and built by Angie Turne. All rights
        reserved. Data provided by
        <Link target="_blank" href="https://developer.marvel.com/">
          {" "}
          MARVEL
        </Link>
      </Text>
      <Container className="contact-details">
        <Link target="_blank" href="https://github.com/angieTu">
          <GithubSquare
            className={`footer-icon github-icon`}
            aria-hidden="true"
            aria-label="GitHub"
          />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/angie-tu/">
          <LinkedinSquare
            className={`footer-icon`}
            target="_blank"
            href=""
            aria-hidden="true"
            aria-label="LinkedIn"
          />
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
