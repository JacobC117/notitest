import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
const newTheme={
    "background": "#ffffff",
    "text": {
        "fontSize": 11,
        "fill": "#333333",
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#BBF7D0",
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": "red",
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#ff0000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": "#ffffff",
            "color": "#333333",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    },
    "dots": {
        "text": {
            "fill": 'red',
        },
    },
}
const Randomizer = () => {
    const [number, setNumber] = React.useState(Math.floor(Math.random() * (10000-5000) + 5000));
    React.useEffect(() => {
  
      const interval = setInterval(
        () => setNumber(Math.floor(Math.random() * (10000-5000) + 5000)),
        1500
      );
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

const RadarChart = () => {
    let data = [
        {
          "type": "360°",
          "Plane": Randomizer()-3000,
        },
        {
          "type": "90°",
          "Plane": Randomizer(),

        },
        {
            "type": "135°",
            "Plane": Randomizer(),
  
          },
        {
          "type": "180°",
          "Plane": Randomizer(),

        },
        {
            "type": "225°",
            "Plane": Randomizer(),
  
          },
        {
          "type": "270°",
          "Plane": Randomizer(),

        },
      ]
      return(
        <div style ={{height:'88vh', width:'100%'}}>
    <ResponsiveRadar
        data={data}
        keys={[ 'Plane' ]}
        isInteractive={false}
        indexBy="type"
        valueFormat=""
        margin={{ top: 15, right: 35, bottom: 15, left: 37}}
        borderColor={'#E2E8F0'} 
        borderWidth={0}

        gridLabelOffset={9}
        dotSize={8}
        enableDotLabel={true}
        dotLabel="key"
        dotBorderWidth={1}
        dotColor={'red'}
        colors={"transparent"}
        blendMode="multiply"
        motionConfig="wobbly"
        dotPosition='between'
        theme={newTheme}
    />
    </div>
      )
    }
export default RadarChart;