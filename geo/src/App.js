import openSocket from "socket.io-client";

const App = () => {
  const APIHandaler = () => {
    fetch("http://localhost:8080/pagol")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const socket = openSocket("http://localhost:8080");
  socket.on("posts", (data) => console.log(data));

  return (
    <div>
      <button onClick={APIHandaler}>asdawsd</button>
    </div>
  );
};

export default App;
