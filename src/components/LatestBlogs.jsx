import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const LatestBlogs = () => {
  const navigate = useNavigate();
  let ele;
  const imgurl = process.env.REACT_APP_IMAGE_CDN;
  const baseurl = process.env.REACT_APP_BASE_URL;
  const { data, loading, error } = useFetch(
    `${baseurl}/data/query/production?query=*[_type == "blogs"] |  order(_createdAt)`
  );
  if (error) {
    navigate("/error");
  }
  if (loading) {
    return <div className="spinner"></div>;
  }
  if (data) {
    for (let i = 0; i < data.result.length; i++) {
      ele = data.result[i];
    }

    if (data) {
      return (
        <div className="Latestblogs">
          <h1>See what we’ve written lately</h1>
          <img
            src={`${imgurl}${ele.coverimg.asset._ref
              .slice(6)
              .replace("-jpg", ".jpg")}?auto=format`}
            alt={ele.coverimg.asset._ref}
            className="latestimage"
          />

          <div className="somediv">
            <Link to={`/details/${ele._id}`} className="linklatest">
              <h2 className="latesttitle">{ele.title}</h2>
            </Link>
            <img
              src={`${imgurl}${ele.avatarimage.asset._ref
                .slice(6)
                .replace("-jpg", ".jpg")}?auto=format`}
              alt={ele.avatarimage.asset._ref}
              className="latestavatar"
            />
            <div className="latestbody">{parse(ele.richtext)}</div>
          </div>
        </div>
      );
    }
  }
};
export default LatestBlogs;
