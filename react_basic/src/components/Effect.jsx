import React, { useEffect } from "react";

const Effect = () => {
    useEffect(() => {
      console.log("useEffect run on mounting of component")
    })
  return (
    <div>
      <h1>Studying useEffect</h1>
    </div>
  );
};

export default Effect;

// import React, { useEffect, useState } from "react";

// function Effect() {
//   const [value, setValue] = useState(0);
//   const [name, setName] = useState("ashish");

//   useEffect(() => {
//     console.log("run on mount and update");
//     console.log(value);
//     console.log(name);
//   },[]);
//   return (
//     <div>
//       <h1>{value}</h1>

//       <h1>{name}</h1>

//       <button onClick={() => setValue(value + 1)}>Increment</button>
//       <button onClick={() => setName("Vinay")}>Change Name</button>
//     </div>
//   );
// }

// export default Effect;
