import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: var(--light);
  transition: var(--normal);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: var(--normal);
`;

export const Container = styled.div`
  width: -webkit-fill-available;
  height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
  box-shadow: var(--normalShadow);
  background-color: var(--wrapper);
  transition: var(--normal);
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  margin: 30px;
  border-radius: 25px;
  padding: 30px;
  position: relative;
  z-index: 10;
  display: grid;
  place-items: center;
  align-content: center;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  width: fit-content;

  h1 {
    color: var(--contrast);
    transition: var(--normal);
    font-size: ${(props) => (props.big ? "var(--big)" : "var(--huge)")};
  }

  p {
    margin-top: -5px;
    font-size: var(--medium);
    transition: var(--normal);
    color: var(--bright);
  }

  span {
    color: var(--bright);
    transition: var(--normal);
    padding: 5px;
  }
`;

export const ThemeChanger = styled.button`
  background-color: var(--background);
  color: var(--contrast);
  padding: 10px 30px;
  border-radius: 20px;
  transition: var(--normal);
  cursor: pointer;
  width: 300px;

  :hover {
    background-color: var(--contrast);
    color: var(--background);
  }
`;
