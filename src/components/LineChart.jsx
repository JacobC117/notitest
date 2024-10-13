import React from "react";

import { ResponsiveLine } from "@nivo/line";
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
      'Youtube': '#FED7AA',
      'Threads': '#E9D5FF',
      'Website': '#FECACA',
    };
    return colors[bar.id] || 'gray';
  };
  const LineChart = () => {
    var datafour = [
        {
          "id": "Website",
          "color": "hsl(94, 70%, 50%)",
          "data": [
            {
              "x": "Mon",
              "y": Randomizer(),
            },
            {
              "x": "Tue",
              "y": Randomizer(),
            },
            {
              "x": "Wed",
              "y": Randomizer(),
            }
          ]
        },
        {
          "id": "Threads",
          "color": "hsl(94, 70%, 50%)",
          "data": [
            {
              "x": "Mon",
              "y": Randomizer()
            },
            {
              "x": "Tue",
              "y": Randomizer()
            },
            {
              "x": "Wed",
              "y": Randomizer()
            }
          ]
        },
        {
          "id": "Youtube",
          "color": "#FED7AA",
          "data": [
            {
              "x": "Mon",
              "y": Randomizer()
            },
            {
              "x": "Tue",
              "y": Randomizer()
            },
            {
              "x": "Wed",
              "y": Randomizer()
            }
          ]
        },
      ]

  return(

    <div style={{width:'100%', height:'88vh'}}>



        <ResponsiveLine
        data={datafour}
        colors={getColor}

        margin={{ top: 15, right: 64, bottom: 31, left: 33 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 1,
            tickPadding: 1,
            tickRotation: 0,
            legend: 'Day',
            legendOffset: 18,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 1,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'View Count (1000s)',
            legendOffset: -27,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-6}
        isInteractive={false}
        enableTouchCrosshair={false}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 85,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 5,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                
            }
        ]}
    />
        </div>
  );
};
export default LineChart;