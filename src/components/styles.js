import styled from "styled-components";
export const AuthContainer = styled.div`
  display: grid;
  background: #424351;
  background-blend-mode: darken;
  height: 100vh;
  padding:0;
  marign:0;
  grid-template-columns: 40% 10% 10% 40%;
  grid-template-rows: 20% 60% 20%;
`;
export const AuthBox = styled.div`
  grid-area: 2/3/3/5;
  background: #81c2f1ab;
  border-radius:10px;
`;
