import { useState } from 'react';

const UsA = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  const [number, setNumber] = useState(num);

  const doubleVal = () => {
    // setNumber((x) => x.map((value) => value * 2));
    // setNumber((x)=>x.map((val)=> val * 2))
    setNumber((prev)=>{
        return [...prev, Math.floor(Math.random()*50)+1]
    })
  };

  return (
    <>
      {number.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
        </div>
      ))}
      <button onClick={doubleVal}>Click</button>
    </>
  );
};

export default UsA;
