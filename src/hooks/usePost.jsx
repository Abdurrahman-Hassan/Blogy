const usePost = (title, body, avatar, cover, bio,authname,password,salt,id) => {
console.log(title, body, avatar, cover, bio,authname,password,salt,id)
  const mutations = [{
      "createOrReplace": {
        "_type": "blogs",
        "title": `${title}`,
        "coverimg": {
          "_type": "image",
          "asset": {
              "_ref": `${cover}`,
              "_type": "reference"
          }
      },
      "avatarimage": {
        "_type": "image",
        "asset": {
            "_ref": `${avatar}`,
            "_type": "reference"
        }
    },
        "richtext": `${body}`,
        "biography": `${bio}`,
        "authorname":`${authname}`,
        "pass":`${password}`,
        "salt":`${salt}`
    }
    }]
    
  const baseurl = process.env.REACT_APP_BASE_URL;
  const auth = process.env.REACT_APP_API_KEY;
    fetch(`${baseurl}/data/mutate/production`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({mutations})
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error))
};

export default usePost;
