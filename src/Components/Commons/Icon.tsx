import React from 'react'
import { Icon as IconifyIcon } from '@iconify/react';

interface IconProps {
    icon: string;
    className?: string;
    onClick?: () => void;
  }

function Icon({icon,className,onClick}:IconProps) {
  return (
    <div>
       <IconifyIcon 
    icon={icon} 
    className={className} 
    onClick={onClick}
    />
    </div>
  )
}

export default Icon
