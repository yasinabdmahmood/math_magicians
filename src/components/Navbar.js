import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <h1>Math Magician</h1>
    <ul className="navbar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/Quote">Quote</Link></li>
    </ul>
  </div>
);
export default Navbar;
