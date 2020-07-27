import React from 'react';

function Food({ fav }){
  return <h1>I Like {fav} </h1>;
}

function App() {
  return (
    <div>Say Hello!
      <Food fav = "kimchi"/>
      <Food fav = "Bab"/>
      <Food fav = "samgiopsal"/>
      <Food fav = "chukumi"/>
    </div> 
  );
}
// function App() {
//   return (
//     <div>Say Hello!
//       <Food 
//       fav = "kimchi"
//       soemthing = {true}
//       papapapa = {["hello", 1,2,3,4,true]}
//        />
//     </div> 
//   );
// }
export default App;
