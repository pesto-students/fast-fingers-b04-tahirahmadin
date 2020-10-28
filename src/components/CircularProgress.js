import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke, time } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((progress - time) / progress) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = 'transition: stroke-dashoffset ms ease-in-out;';
  }, [setOffset, circumference, progress, offset, time]);

  return (
    <>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x={`${center}`} y={`${center}`} className="svg-circle-text">
          {props.time.toFixed(2)}
        </text>
      </svg>
    </>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
