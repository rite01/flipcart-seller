import { useNavigate } from "react-router";
import './stylesmodule.css'
const Main = () => {
  let navigate = useNavigate("")
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <div className='header'>
      <nav className="header">
        <h1>FlipKart Seller</h1>
          <button className="white_btn" onClick={handleLogout}>
            Logout
          </button>
      </nav>
    </div>
  );
};

export default Main;