import React from "react";


import { ResponsiveStream } from "@nivo/stream";
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (20-5) + 5));
    React.useEffect(() => {
  
      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (20-5) + 5)),
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
      'Pressure': '#FED7AA',
    };
    return colors[bar.id] || 'gray';
  };
  const StreamChart = () => {
    var datafour = [
        {
          "Pressure": Randomizer(),

        },
        {
          "Pressure": Randomizer(),

        },
        {
          "Pressure": Randomizer(),

        },
        {
          "Pressure": Randomizer(),

        },
        {
          "Pressure": Randomizer(),

        },
        {
          "Pressure": Randomizer(),

        },
        {
          "Pressure": Randomizer(),

        },


      ]

  return(

    <div style={{width:'100%', height:'90vh'}}>



        <ResponsiveStream
        data={datafour}
        colors={getColor}

        keys={[
            'Pressure',

        ]}
        margin={{ top: 5, right: 7, bottom: 25, left: 27 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 1,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'Runway Zone',
            legendPosition:'middle',
            legendOffset: 18,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 2,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'Air Pressure (atm)',
            size: '10',
            fontSize:14,
            legendPosition: 'middle',
            legendOffset: -19,
            truncateTickAt: 0
        }}
        enableGridX={true}
        enableGridY={false}
        offsetType="silhouette"
        isInteractive={false}
        fillOpacity={0.85}
    />
        </div>
  );
};
export default StreamChart;