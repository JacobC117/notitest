import React from "react";
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (5-1) + 1));
    React.useEffect(() => {
  
      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (5-1) + 1)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

function ComTable() {
    const data = [
        { name: "Alison", priority: Randomizer(), issue: "Baggage Lost" },
        { name: "Ricky", priority: Randomizer(), issue: "Missed Flight" },
        { name: "Funaki", priority: Randomizer(), issue: "Lost in Airport" },
        { name: "Gordon", priority: Randomizer(), issue: "Raw Food"}
    ]
    return (
        <div style={{paddingBottom:'2vh',display: 'flex', justifyContent: 'center', alignItems:'center'}}>

            <table className="CustTable" style={{width:'97%', height:'82vh'}}>

                <thead>
                
                <tr>
                    <th>Name</th>
                    <th>Priority Lvl</th>
                    <th>Complaint</th>
                </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.priority}</td>
                            <td>{val.issue}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}
 
export default ComTable;