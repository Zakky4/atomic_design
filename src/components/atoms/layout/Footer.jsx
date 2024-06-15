import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      &copy; 2024 Zakky Inc.
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  padding: 8px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
