import React from "react";
import { ResponsiveBullet } from "@nivo/bullet";
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (50-2) + 2));
    React.useEffect(() => {
  
      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (50-2) + 2)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };
  const getColor = bar => {
        
    const colors = {
      'Fuel %': '#E2E8F0',
    };
    return colors[bar.id] || 'gray';
  };
const BullChart = () => {
    var data = [
        {
          "id": "Fuel %",
          "ranges": [
            0,
            25,
            50,
            75,
            100
          ],
          "measures": [
            Randomizer()+Randomizer()
          ],
          "markers": [
            100
          ]
        },
        {
          "id": "Temp C",
          "ranges": [
            1,
            5,
            10,
            15,
            50
          ],
          "measures": [
            Randomizer()
          ],
          "markers": [
            20
          ]
        },
        {
          "id": "Load %",
          "ranges": [
            0,
            25,
            50,
            75,
            100
          ],
          "measures": [
            Randomizer()+Randomizer()
          ],
          "markers": [
            95
          ]
        }
      ]
    return(
        <div style={{width:'100%', height:'90vh'}}>
        <ResponsiveBullet
        data={data}
        margin={{ top: 0, right: 9, bottom: 25, left: 40}}
        spacing={30}
        colors={getColor}
        titleAlign="start"
        titleOffsetX={-40}
        measureSize={0.2}
    />
    </div>
    )
};
export default BullChart;