import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
      //this.setState({isLaoding: false, book: true}) => ok, it is working, not error
    }, 6000);
    //Fetching the data which we want in componentDidMount part;
  };

  
  render() {
  const {isLoading} = this.state;
  return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}

export default App;
