import SinglePage from '../../components/singlePage/SinglePage';
import { singleUser } from '../../data';
import './user.scss';

const User = () => {
  // fetch the Data and send it to the Single Componenet
  return (
    <div className="user">
      <SinglePage {...singleUser} />
    </div>
  );
};

export default User;
