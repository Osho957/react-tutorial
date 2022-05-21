
   
import { useParams } from "react-router";

const UserParams = () => {
  const userParams = useParams<{ userName: string }>();
  return <div>User Parameter : {userParams.userName}</div>;
};

export default UserParams;