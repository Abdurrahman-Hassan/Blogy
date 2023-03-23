import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let intervalId = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [navigate]);

  return <div className="spinner"></div>;
};

export default Loading;
