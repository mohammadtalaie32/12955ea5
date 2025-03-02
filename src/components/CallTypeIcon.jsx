import React from 'react';
import { 
  IoMdCall, 
  IoIosChatbubbles 
} from 'react-icons/io';

import { MdOutlinePhoneMissed } from "react-icons/md";


import { SlCallIn,SlCallOut } from "react-icons/sl";


const CallTypeIcon = ({ type, direction }) => {
  let icon;
  let color;

  if (type === 'missed') {
    icon = <MdOutlinePhoneMissed />;
    color = 'red';
  } else if (type === 'answered') {
    if (direction === 'inbound') {
      icon = <SlCallIn />;
      color = 'blue';
    } else if (direction === 'outbound') {
      icon = <SlCallOut />;
      color = 'green';
    } else {
      icon = <IoMdCall />;
      color = 'gray';
    }
  } else {
    icon = <IoIosChatbubbles />;
    color = 'gray';
  }

  return (
    <span style={{ color, fontSize: '1.5rem', display: 'inline-flex', alignItems: 'center' }}>
      {icon}
    </span>
  );
};

export default CallTypeIcon;
