import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const user = {
  name: '山田太郎',
  image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  email: 'test@example.com',
  tel: '090-1234-5678',
  company: 'テスト株式会社',
  web: 'https://google.com',
};

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
