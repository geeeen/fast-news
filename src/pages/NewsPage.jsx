import React from "react";

const NewsPage = () => {

  const count = () => {
    for (let i = 0; i < 100; i++) {
      console.log(i);
    }
  };

  return (
    <div onClick={count}>News page</div>
  )
};

export default NewsPage;