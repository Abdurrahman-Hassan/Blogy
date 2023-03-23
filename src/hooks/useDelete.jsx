const useDelete = (id) => {
    const mutations = [{
        "delete": {
            "id": id
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
}

export default useDelete