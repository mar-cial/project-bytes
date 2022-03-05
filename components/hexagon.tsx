import * as React from 'react';
import { motion } from 'framer-motion';
const SvgComponent = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 380.98 330.35"
    className={props}
    {...props}
  >
    <g
      style={{
        isolation: 'isolate',
      }}
    >
      <path
        className={'bg-blue-700'}
        d="m180.49 330.35-113.97-62L0 152.94l113.97 62 66.52 115.41z"
      />
      <path
        style={{
          fill: '#5cb7ca',
        }}
        d="m314.46 62 66.52 115.41L314 311.59l-133.51 18.76-66.52-115.41 66.98-134.18L314.46 62z"
      />
      <path
        style={{
          fill: '#3e7b87',
        }}
        d="M113.97 214.94 0 152.94 66.98 18.76l113.97 62-66.98 134.18z"
      />
      <path
        style={{
          fill: '#4a94a3',
        }}
        d="m180.95 80.76-113.97-62L200.49 0l113.97 62-133.51 18.76z"
      />
    </g>
  </motion.svg>
);

export default SvgComponent;
