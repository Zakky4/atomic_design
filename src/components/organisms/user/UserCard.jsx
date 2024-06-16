import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
    <SDl>
     <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <dl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company}</dd>
        <dt>WEBサイト</dt>
        <dd>{user.web}</dd>
      </dl>
    </SDl>
    </Card>
  );
};

const SDl = styled.div`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
