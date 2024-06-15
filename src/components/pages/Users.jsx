import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const userList = [...Array(10).keys()].map((index) => ({
  id: index,
  name: `山田太郎-${index}`,
  image: `https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  email: `test${index}@example.com`,
  tel: `090-1234-5678`,
  company: `テスト株式会社${index}`,
  web: `https://google.com`,
}));

export const Users = () => {
  return (
    <SContainer>
      <h1>ユーザー一覧</h1>
      <SearchInput />
      <SUserList>
        {userList.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserList>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserList = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
