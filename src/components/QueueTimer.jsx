import React from "react";
const Randomizer = () => {
  const [number, setNumber] = React.useState(Math.floor(Math.random() * (20-5)+5));
  React.useEffect(() => {

    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * (60-2)+2)),
      1500
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return number;
};
function QueueTimer(){
  //Old rando number calculator code
    var waitingmin = Math.floor(Math.random() * (20-5)+5);
    var waitingsec = Math.floor(Math.random() * 60);
    return(
        <div>
        <div style={{backgroundColor:"#BBF7D0", width:"100%", height:'100vh'}}>
          <div style={{padding:"5vh"}}>
        <h2 style={{color:"#64748B", fontSize:"8vh"}}>Current Security <br></br>Queue Time:</h2>
        <h3 style={{color:"#64748B",fontSize:"8vh"}}>{<Randomizer/>} Minutes {<Randomizer/>} Seconds</h3>
        </div>
      </div>
      </div>
    )

}
export default QueueTimer