import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data';

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div
          className="item"
          key={item.id}
        >
          <span className="title">{item.title}</span>
          {item.listItems.map((itemLi) => (
            <Link
              key={itemLi.id}
              className="listItem"
              to={itemLi.url}
            >
              <img
                src={itemLi.icon}
                alt=""
              />
              <span className="listItemTitle">{itemLi.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
