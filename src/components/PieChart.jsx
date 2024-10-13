import React from 'react';

import { ResponsivePie } from "@nivo/pie";
let datatwo = [];
const Randomizer = () => {
  const [number, setNumber] = React.useState((Math.floor(Math.random() * (1000-100) + 100)));
  React.useEffect(() => {

    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * (1000-100) + 100)),
      1500
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return number;
};


const PieChart = () => {
  datatwo = [
    
    { id: "Retail Area", label: "Retail Area", value: Randomizer()-80, color: "rgb(100 116 139)" },
    { id: "Security", label: "Security", value: Randomizer()-50, color: "hsl(56, 70%, 50%)" },
    { id: "Departures", label: "Departures", value: Randomizer()+150, color: "hsl(0, 100%, 50%)" },
    { id: "Arrivals", label: "Arrivals", value: Randomizer()+200, color: "hsl(186, 70%, 50%)" },
  ]
    const getColor = bar => {
        const colors = {
          'Retail Area': '#E2E8F0',
          'Security': '#FECACA',
          'Departures': '#BBF7D0',
          'Arrivals':'#E9D5FF',
        };
        return colors[bar.id] || 'gray'; 
      };
    return(

        <div style={{width:'100%', height:'88vh'}}>

    <ResponsivePie
      data={datatwo}
      
      margin={{top:10, right: 25, left: 25, bottom: 15}}
      arcLabel={e=>e.id+" ("+e.value+")"}
      innerRadius={0.5}
      padAngle={1}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      colors={getColor}
      enableArcLinkLabels={false}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}


    />
    
    </div>


    )
};
export default PieChart;