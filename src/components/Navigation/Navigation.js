import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <img src="/images/logo.png" alt="logo"></img>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navigation;
