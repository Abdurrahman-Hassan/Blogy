import React, { useState } from "react";
import Blogs from "../components/Blogs";
import LatestBlogs from "../components/LatestBlogs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [email, setemail] = useState("");

  return (
    <div>
      <div className="Homepage">
        <h1>Hey, we're Blogy.</h1>
        <h1 className="light">See our thoughts, stories and ideas.</h1>
        <div className="input-group">
          <form className="subscribeform">
            <input
              type="email"
              className="input"
              id="Email"
              name="Email"
              required={true}
              placeholder="Your email address"
              autoComplete="off"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input className="button--submit" value="Subscribe" type="submit" />
          </form>

          <h6 className="substext">
            Get the email newsletter and unlock access to members-only content
            and updates
          </h6>
        </div>
        <h5 className="newtext">Just Post a Blog</h5>

        <Link to={`/NewBlog`}>
          <button className="addBlog">
            <AiOutlinePlusCircle
              color="lightgray"
              className="addbtn"
              size={50}
            />
          </button>
        </Link>
      </div>
      <h1>Get started with our best stories</h1>
      <Blogs />
      <LatestBlogs />
    </div>
  );
}
