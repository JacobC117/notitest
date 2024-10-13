import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
let datathree=[]
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (89-25)+25));
    React.useEffect(() => {

      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (89-25)+25)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

const BarhChart = () => {
    datathree = [
        {
          "Time": "09:00",
          "09:00": Math.ceil((Randomizer()+1)/10)*10,
    
        },
        {
          "Time": "12:00",
          "12:00":  Math.ceil((Randomizer()+1)/10)*10,
    
        },
        {
          "Time": "18:00",
          "18:00":  Math.ceil((Randomizer()+1)/10)*10,
        },
        {
          "Time": "22:00",
          "22:00":  Math.ceil((Randomizer()+1)/10)*10,
    
        }
      ]
    const getColor = bar => {
        
        const colors = {
          '09:00': '#FED7AA',
          '12:00': '#E9D5FF',
          '18:00': '#FECACA',
          '22:00':'#BBF7D0',
        };
        return colors[bar.id] || 'gray';
      };
  return (


    <div style={{width:'100%', height:'88vh'}}>
      <ResponsiveBar
        style={{fontSize:'10%'}}
        layout="horizontal"
        data={datathree}
        colors={getColor}
        keys={[
            '09:00',
            '12:00',
            '18:00',
            '22:00',
        ]}
        indexBy="Time"
        margin={{ top: 5, right: 10, bottom: 26.5, left: 41}}
        padding={0.1}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}



        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 2,
            tickPadding: 1,
            tickRotation: 0,
            legend: 'Bags on Carousel E',
            legendPosition: 'middle',
            legendOffset: 20,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 2,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'Time',
            size: '10',
            fontSize:14,
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        
        labelSkipWidth={8}
        labelSkipHeight={8}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    1.6
                ]
            ]
        }}
      />

    </div>

  );
};

export default BarhChart;