import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const imgurl = process.env.REACT_APP_IMAGE_CDN;
  const baseurl = process.env.REACT_APP_BASE_URL;
  const { loading, data, error } = useFetch(
    `${baseurl}/data/query/production?query=*[_type == "blogs"] |  order(_createdAt)`
  );

  if (error) {
    navigate("/*");
  }

  if (loading) {
    return <div className="spinner"></div>;
  }
  if (data) {
    return (
      <div className="blogfull">
        {data.result.map((element) => (
          <div className="blogs" key={element._id}>
            <img
              className="blogimage"
              src={`${imgurl}${element.coverimg.asset._ref
                .slice(6)
                .replace("-jpg", ".jpg")}?auto=format`}
              alt={element.coverimg.asset._ref}
            />
            <img
              className="blogavatar"
              src={`${imgurl}${element.avatarimage.asset._ref
                .slice(6)
                .replace("-jpg", ".jpg")}?auto=format`}
              alt={element.avatarimage.asset._ref}
            />
            <Link to={`/details/${element._id}`}>
              <h2 className="blogtitle">{element.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default Blogs;
