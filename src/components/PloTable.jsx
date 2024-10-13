import React from "react";
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (99-11) + 11));
    React.useEffect(() => {
  
      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (99-11) + 11)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

function PloTable() {

    const data = [

        { name: "Ryan", time: "09:00", ida: Randomizer(), idb: Randomizer(), session: "Baggage Orientation" },
        { name: "Jim", time: "12:15", ida: Randomizer(), idb: Randomizer(), session: "Internship Onboarding" },
        { name: "Michael", time: "15:30", ida: Randomizer(), idb: Randomizer(), session: "Sensitivity Training"}
    ]
    return (
        <div style={{paddingBottom:'2vh',display: 'flex', justifyContent: 'center', alignItems:'center'}}>

            <table className="PloTable" style={{width:'98%', height:'86vh'}}>
                <thead>
                
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Start</th>
                    <th>Training</th>
                </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.ida}{val.idb}</td>
                            <td>{val.time}</td>
                            <td>{val.session}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}
 
export default PloTable;