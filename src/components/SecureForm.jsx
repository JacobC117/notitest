import React from "react";
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (5-1)+1));
    React.useEffect(() => {

      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (5-1)+1)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };


function SecureForm(){
  const data = [

    { name: "Ongoing", time: Randomizer(), ida: Randomizer(), idb: Randomizer(), session: "Tresspasser on Runway" },
    { name: "Resolved", time: 'N/A', ida: 0, idb: 5, session: "Vaping Reported in Departures" },
    { name: "Ongoing", time: Randomizer(), ida: Randomizer(), idb: Randomizer(), session: "Intern Keycard Stolen"}
]
return(
  <div style={{paddingBottom:'2vh',display: 'flex', justifyContent: 'center', alignItems:'center'}}>

  <table className="SecurTable" style={{width:'100%', height:'85vh'}}>
      <thead>
      
      <tr>
          <th>Incident Code</th>
          <th>Status</th>
          <th>Priority Lvl</th>
          <th>Details</th>
      </tr>
      </thead>
      <tbody>
      {data.map((val, key) => {
          return (
              <tr key={key}>
                  <td>{val.ida}{val.idb}</td>
                  <td>{val.name}</td>

                  <td>{val.time}</td>

                  <td>{val.session}</td>
              </tr>
          )
      })}
      </tbody>
  </table>
</div>
)
}
export default SecureForm;