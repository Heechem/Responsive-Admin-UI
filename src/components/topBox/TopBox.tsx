import { topDealUsers } from '../../data';
import './topBox.scss';

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Sales</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div
            className="item"
            key={user.id}
          >
            <div className="user">
              <img
                src={user.img}
                alt=""
              />
              <div className="userText">
                <div className="username">{user.username}</div>
                <div className="userEmail">{user.email}</div>
              </div>
            </div>
            <span className="amount">{user.amount}$</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
