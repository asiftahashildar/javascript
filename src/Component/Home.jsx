import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [mydata, setMydata] = useState([]);
  console.log("data==>", mydata);
  const getData = async () => {
    const data1 = await axios.get("https://fakestoreapi.com/products");
    setMydata([...data1.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlefun = mydata.reduce((a, b) => {
    if (!a[b]) {
      a[b] = 1;
    } else {
      a[b]++;
    }
    return a;
  }, {});
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {mydata.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>
              {item.reduce((a, b) => {
                if (!a[b]) {
                  a[b] = 1;
                } else {
                  a[b]++;
                }
                return a;
              }, {})}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
