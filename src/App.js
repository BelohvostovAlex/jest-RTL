import React from "react";

function App() {
  const [data, setData] = React.useState(null)
  
  React.useEffect(() => {
    setTimeout(() => setData({name: 'alex'}), 1000)
  }, [])

  return (
    <div className="App">
      {data && <div>data</div>}
      <h1>Hello world</h1>
      <button>click</button>
      <input type="text" placeholder="type ur username..."/>
    </div>
  );
}

export default App;
