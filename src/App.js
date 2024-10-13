import { useState, useEffect } from "react"
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3002")

function App() {

  const sendMessage = () => {
    socket.emit("send_message", {message: "I am a module!"})
  };

  return (
    <div>
      <button onClick={sendMessage}>Test</button>
    </div>
  );
}

export default App;
