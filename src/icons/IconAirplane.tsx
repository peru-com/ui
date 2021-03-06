import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconAirplane: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 26 20"
    >
      <path
        fill={color}
        stroke="white"
        strokeWidth="0.6"
        d="M3.1 11.781a.455.455 0 00-.223.596l1.022 2.195a.455.455 0 00.409.263c.066 0 .13-.013.19-.04l7.725-3.609-.7 7.316a.454.454 0 00.15.382c.339.28.761.44 1.2.454.121 0 .242-.015.359-.045.627-.164 1.113-.723 1.445-1.677l3.04-9.001 6.02-2.809c1.772-.826 2.686-2.503 2.072-3.812a2.3 2.3 0 00-1.776-1.24 4.212 4.212 0 00-2.481.382l-6.948 3.257-7.47-2.921c-.94-.355-1.685-.345-2.208.032-.438.36-.688.9-.677 1.467a.455.455 0 00.195.36l5.03 3.457-2.88 1.363-4.83-1.227a.455.455 0 00-.505.218L.055 9.31a.453.453 0 00.236.64l3.576 1.477-.768.354zm2.08-9.037a.777.777 0 01.273-.49c.26-.187.732-.16 1.363.076l6.652 2.595-3.035 1.418L5.18 2.744zM1.091 9.305l.79-1.404L6.53 9.055c.1.026.206.016.3-.027l15.108-7.056a3.321 3.321 0 011.94-.31c.465.043.88.312 1.11.718.38.818-.37 2.013-1.637 2.604l-5.234 2.454.318-.94a.462.462 0 10-.877-.292l-3.74 11.128c-.223.632-.5 1.01-.809 1.09a.769.769 0 01-.554-.104l.909-9.542a.456.456 0 10-.909-.086l-.14 1.458-7.798 3.635-.64-1.363 1.28-.6a.454.454 0 000-.83L1.092 9.304z"
      ></path>
  </svg>
);

IconAirplane.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconAirplane.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconAirplane.displayName = 'IconAirplane';

