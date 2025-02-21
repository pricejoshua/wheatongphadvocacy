"use client";
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

// Define TypeScript interfaces
interface MapData {
  [key: string]: number;
}

interface ChoroplethMapProps {
  data: MapData;
  minValue?: number;
  maxValue?: number;
  colorScale?: string[];
}

const ChoroplethMap: React.FC<ChoroplethMapProps> = ({
  data,
  minValue = 0,
  maxValue = 100,
  colorScale = ['#ffedea', '#ffcec5', '#ffad9f', '#ff8a75', '#ff5533', '#e2492d', '#be3d26', '#9a311f', '#782618']
}) => {
  // Create color scale
  const colorScaleFn = scaleLinear<string>()
    .domain(Array.from({ length: colorScale.length }, (_, i) => minValue + (i * (maxValue - minValue) / (colorScale.length - 1))))
    .range(colorScale);

  return (
    <div className="w-full h-full">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}
        className="w-full h-full"
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} id={''} fill={''} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography="/world-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const value = data[geo.properties.ISO_A3] || 0;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScaleFn(value)}
                  stroke="#D6D6DA"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      outline: 'none'
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none'
                    },
                    pressed: {
                      outline: 'none'
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default ChoroplethMap;