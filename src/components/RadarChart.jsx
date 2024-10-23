import { useState, useEffect } from "react"
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3002")

function RadarChart() {

  const [message, setMessage] = useState('');

  const send = () => {
    socket.emit("send_message", {message: message})
  }

  const handleInput = (e) => {
    setMessage(e.target.value)
  }
    
  return (
    <div style={{width:'100%', height:'90vh'}}>
      <input onChange={handleInput} value={message} className="w-50"></input>
      <button onClick={send}>Send Notification</button>
    </div>
  );
}

export default RadarChart;
