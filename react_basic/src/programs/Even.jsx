// import React from "react";
// const Even = () => {
//   let num = 25;
//   let result = "";
//   if (num % 2 == 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return (
//     <>
//       <h1>Number is {result}</h1>
//     </>
//   );
// };

// export default Even;


import React from "react";
const Even = () => {
  let num = 25;
  
  return (
    <>
      <h1>Number is {(num % 2 === 0) ? "Even" : "Odd"}</h1>
    </>
  );
};

export default Even;

