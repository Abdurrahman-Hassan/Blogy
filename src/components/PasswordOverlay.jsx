import React, { useState, useContext } from "react";
import "./PasswordOverlay.css";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";
import UseDelete from "../hooks/useDelete";

function PasswordOverlay(props) {
  const { setMyData } = useContext(MyContext);

  const navigate = useNavigate();
  const baseurl = process.env.REACT_APP_BASE_URL;
  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `${baseurl}/data/query/production?query=*[_id == "${id}"]`
  );
  const [mainpassword, setmainPassword] = useState("");

  function blogedit(event) {
    event.preventDefault();
    if (data) {
      let uptitle = data.result[0].title;
      let upauthor = data.result[0].authorname;
      let upbio = data.result[0].biography;
      let upbody = data.result[0].richtext;

      let hashedPassword = data.result[0].pass;
      bcrypt.compare(mainpassword, hashedPassword, function (err, result) {
        if (result === true) {
          let myData = {
            uptitle: uptitle,
            upauthor: upauthor,
            upbio: upbio,
            upbody: upbody,
            _id: id,
          };
          setMyData(myData);
          navigate("/EditBlog");
        }
      });
    }
  }
  function blogdelete(e) {
    e.preventDefault();
    if (data) {
      let hashedPassword = data.result[0].pass;
      bcrypt.compare(mainpassword, hashedPassword, function (err, result) {
        if (result === true) {
          UseDelete(id);
          navigate("/Loading");
        }
      });
    }
  }
  if (loading) {
    return <div className="spinner"></div>;
  }
  if (error) {
    navigate("/*");
  }

  return (
    <div className="password-overlay">
      <div className="password-overlay-content">
        <h2>Enter Password</h2>
        <form>
          <label htmlFor="password-input">Password:</label>
          <input
            id="password-input"
            type="password"
            value={mainpassword}
            onChange={(event) => setmainPassword(event.target.value)}
            required
          />
          <div className="password-overlay-buttons">
            <button onClick={blogedit}>Edit</button>
            <button onClick={blogdelete}>Delete</button>
            <button onClick={props.onCancel}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordOverlay;
