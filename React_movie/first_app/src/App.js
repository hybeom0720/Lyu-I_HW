import React from "react";
import { HashRouter, Route } from "react-router-dom";
//BrowserRouter -> github 페이지에 업로드하기 짜증나낟.
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

// class App extends React.Component{
//   state = {
//     isLoading: true,
//     movies: []
//   };
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isLoading: false});
//       //this.setState({isLaoding: false, book: true}) => ok, it is working, not error
//     }, 6000);
//     //Fetching the data which we want in componentDidMount part;
//   };

  
//   render() {
//   const {isLoading} = this.state;
//   return <div>{isLoading ? "Loading" : "We are ready"}</div>
//   }
function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path ="/" exact = {true} component = {Home} />
    <Route path="/about" component = {About} />
    <Route path="/movie-detail" component = {Detail} />
    {/* 페이지 메칭 해주기 Link랑 */}
  </HashRouter>
  )
}

// function App(){
//   return (<HashRouter>
//     <Route path ="/home">
//       <h1>Home</h1>  
//     </Route>
//     <Route path ="/home/introduction">
//       <h1>Introduction</h1>
//     </Route>
//     <Route path="/about">
//       <h1>About</h1>
//     </Route>
//   </HashRouter>
//   )
// }
export default App;