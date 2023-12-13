import { useState, useEffect } from "react";

const useFetch = (url,request) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url,{method:"POST", body: JSON.stringify(request), headers: {
        accept: 'application/json',
      }})
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;