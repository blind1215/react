import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response);
      setData(response.data);
    } catch (e) {
      console.error(e);
    }

    // await axios
    //   .get("https://jsonplaceholder.typicode.com/todos123/1")
    //   .then((response) => {
    //     setData(response.data);
    //   });
  };
  return (
    <div>
      <hr />
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default Axios;
