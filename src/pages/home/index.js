import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Container,
  ThemeChanger,
  Title,
  Wrapper,
} from "styles/styledComponents";
const HomePage = ({ toggleTheme }) => {
  const [actualTheme, setActualTheme] = useState(() => {
    const storageValue = JSON.parse(localStorage.getItem("theme"));

    if (storageValue.title === "light") {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      <Container name="container">
        <Wrapper name="wrapper">
          <Title name="title">
            <span>Click para alterar o tema</span>
          </Title>
          <ThemeChanger
            onClick={() => {
              toggleTheme();
              setActualTheme(!actualTheme);
            }}
          >
            {actualTheme ? (
              <FontAwesomeIcon icon={faSun} name="sun-button" />
            ) : (
              <FontAwesomeIcon icon={faMoon} name="sun-button" />
            )}
          </ThemeChanger>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomePage;
