import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    // alert("管理者ユーザーでログインしました");
    navigate("/users", { state: { isAdmin: true } });
    // setUserInfo({ isAdmin: true });
    // navigate("/users");
  };
  const onClickUser = () => {
    // alert("一般ユーザーでログインしました");
    navigate("/users", { state: { isAdmin: false } });
    // setUserInfo({ isAdmin: false });
    // navigate("/users");
  };
  return (
    <SContainer>
      <h1>Topページです</h1>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickUser}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
