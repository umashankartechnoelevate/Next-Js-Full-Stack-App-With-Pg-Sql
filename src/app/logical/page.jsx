import React from "react";

const page = () => {
  //logic based on array started
  const array = [1, 2, 3, "uma", "jab", 2];
  console.log("array", array);

  //remove duplicate
  const uniqueArray = array.filter((item, index) => {
    console.log("indexOf(item)", array.indexOf(item));
    console.log("index", index);
    return array.indexOf(item) === index;
  });
  let forUnique = [];
  for (let i = 0; i < array.length; i++) {
    if (!forUnique.includes(array[i])) {
      forUnique.push(array[i]);
    }
  }
  console.log("uniqueArray", uniqueArray);
  console.log("forUnique", forUnique);
  //logic based on array ended
  return <div>welcome to logical programming</div>;
};

export default page;
