import React from 'react';
import { slideDrawerStyles } from './SlideDrawer.styles';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  position = 'left',
  children,
}) => {
  return (
    <div className='slide-drawer'>
      <div style={slideDrawerStyles.overlay(isOpen)} onClick={onClose} />
      <div style={slideDrawerStyles.drawer(isOpen, position)}>{children}</div>
    </div>
  );
};

