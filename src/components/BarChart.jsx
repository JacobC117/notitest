import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
let datathree=[]
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (80-5)+5));
    React.useEffect(() => {

      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (80-5)+5)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

const BarChart = () => {
    datathree = [
        {
          "Beverage Type": "Beer",
          "Beer": Randomizer(),
    
        },
        {
          "Beverage Type": "Wine",
          "Wine": Randomizer(),
    
        },
        {
          "Beverage Type": "Vodka",
          "Vodka": Randomizer(),
        },
        {
          "Beverage Type": "Cola",
          "Cola": Randomizer(),
    
        }
      ]
    const getColor = bar => {
        
        const colors = {
          'Beer': '#FED7AA',
          'Wine': '#FECACA',
          'Vodka': '#BBF7D0',
          'Cola':'#E9D5FF',
        };
        return colors[bar.id] || 'gray';
      };
  return (


    <div style={{width:'100%', height:'88vh'}}>
      <ResponsiveBar
        style={{fontSize:'10%'}}
        data={datathree}
        colors={getColor}
        keys={[
            'Beer',
            'Wine',
            'Vodka',
            'Cola',
        ]}
        indexBy="Beverage Type"
        margin={{ top: 5, right: 0, bottom: 27, left: 29}}
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
            legend: 'Beverage Type',
            legendPosition: 'middle',
            legendOffset: 20,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 2,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'Boxes Shipped',
            size: '10',
            fontSize:14,
            legendPosition: 'middle',
            legendOffset: -24,
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

export default BarChart;