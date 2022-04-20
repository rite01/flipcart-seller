import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./stylesmodule.css";
const Main = () => {
  let navigate = useNavigate("");
  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
    toast.success("Logout Success")
  };

  return (
    <div className="header">
      <nav className="header">
        <h1>FlipKart Seller</h1>
        <Link to="/profile"> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="profile" /></Link>
        <button className="white_btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
