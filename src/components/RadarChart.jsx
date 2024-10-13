import { useState, useEffect } from "react"
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3002")

function RadarChart() {

    socket.emit("send_message", {message: "I am a module!"})


  return (
    <div style={{width:'100%', height:'90vh'}}>
      <p>Sending 1 notification!</p>
    </div>
  );
}

export default RadarChart;
