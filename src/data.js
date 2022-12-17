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
                value : 29 
            },
            {
                id: 2,
                parameter : 'Humidity',
                icon: <BsCloudFill /> ,
                unit: '%',
                value : 73
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
                icon: <BsDropletFill />,
                unit: '%',
                value : 23
            },
                {
                id: 5,
                parameter: 'Smoke Detector',
                icon: <AiTwotoneAlert /> ,
                value: false
                }
            ]
