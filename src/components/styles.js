import styled from "styled-components";
export const AuthContainer = styled.div`
  display: grid;
  background: #424351;
  background-blend-mode: darken;
  height: 100vh;
  grid-template-columns: 40% 10% 10% 30% 10%;
  grid-template-rows: 10% 10% 60% 20%;
`;
export const AuthBox = styled.div`
  display: grid;
  grid-template-columns:40% 10% 10% 40%;
  z-index: 2;
  grid-area: 3/3/3/5;
  background: #5CD77E;
  border-radius: 10px;
`;
export const Banner = styled.div`
  grid-area: 2/1/5/4;
  z-index: 1;
  border-radius: 10px;
  border: 2px solid white;
`;

export const ProfileContainer = styled.div`
  display: grid;
  background: #424351;
  background-blend-mode: darken;
  height: 100vh;
  grid-template-columns: 40% 10% 10% 30% 10%;
  grid-template-rows: 10% 10% 60% 20%;
`;