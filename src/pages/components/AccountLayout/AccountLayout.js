import { useNavigate } from "react-router-dom";
export const HandleLogout = () => {
      const navigate = useNavigate();
    localStorage.removeItem('user');
    navigate('/login');
  };

export const HandleNavigate = (page) => {
    const navigate = useNavigate();
    navigate(page);   
  }