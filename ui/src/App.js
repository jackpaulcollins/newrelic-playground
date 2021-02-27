import './App.css';

function App() {

  const getData = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080', true)
    xhr.send(null)

    xhr.onload = function(){
      if (xhr.status === 200)
      {
        alert(xhr.response)
      }
    }
  }

  return (
    <div className="App">
      <button onClick={getData}>Get Data From the Server!</button>
    </div>
  );
}

export default App;
