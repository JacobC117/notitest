import { useState, useEffect } from "react"
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3002")

function RadarChart() {

  const sendMessage = () => {
    socket.emit("send_message", {message: "I am a module!"})
  };

  return (
    <div style={{width:'100%', height:'90vh'}}>
      <button onClick={sendMessage}>Test</button>
    </div>
  );
}

export default RadarChart;
