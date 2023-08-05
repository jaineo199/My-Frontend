import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { BASE_URL } from "../utils/apiUrls";

const App = () => {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const socket: Socket = io(BASE_URL);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Socket.io server");
      console.log(socket.id);
    });
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div>
      <div className="App">
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <button
          onClick={joinRoom}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Join Room
        </button>
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Send Message
        </button>
        <h1> Message:</h1>
        {messageReceived}
      </div>
    </div>
  );
};

export default App;
