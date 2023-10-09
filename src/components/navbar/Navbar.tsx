import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="logo.svg"
          alt="logo"
        />
        Admin Portal
      </div>
      <div className="icons">
        <img
          src="search.svg"
          alt="search"
          className="icon"
        />
        <img
          src="/app.svg"
          alt=""
          className="icon"
        />{' '}
        <img
          src="/expand.svg"
          alt=""
          className="icon"
        />
        <div className="notification">
          <img
            src="/notifications.svg"
            alt=""
          />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="/profile.jpg"
            alt=""
          />
          <span>Heechem</span>
        </div>{' '}
        <img
          src="/settings.svg"
          alt=""
          className="icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
