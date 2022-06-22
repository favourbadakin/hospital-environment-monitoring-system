import { FaTemperatureHigh } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { BsCloudFill, BsDropletFill  } from "react-icons/bs";
import { AiTwotoneAlert  } from "react-icons/ai";

//eslint-disable-next-line
export default [
            {
                id: 1,
                parameter : 'Temperature',
                icon:  <FaTemperatureHigh /> ,
                unit: '°C',
                value : '28' 
            },
            {
                id: 2,
                parameter : 'Humidity',
                icon: <BsCloudFill /> ,
                unit: '%',
                value : 51
            },
            {
                id: 3,
                parameter : 'Light Intensity',
                icon: <HiSun />,
                unit: '%',
                value : 50 
            },
            {
                id: 4,
                parameter : 'Oxygen Level',
                description : 'Monitors the amount of oxygen gas present in the air.',
                icon: <BsDropletFill />,
                unit: '%',
                value : 56
            },
                {
                id: 5,
                parameter: 'Smoke Detector',
                description: 'Detects if smoke is present in the air',
                icon: <AiTwotoneAlert /> ,
                value: false
                } ]