import { CSSProperties } from 'react';

interface SlideDrawerStyles {
  drawer: (isOpen: boolean, position: 'left' | 'right' | 'top' | 'bottom') => CSSProperties;
  overlay: (isOpen: boolean) => CSSProperties;
}

const positions = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)',
};

export const slideDrawerStyles: SlideDrawerStyles = {
  drawer: (isOpen, position) => ({
    transform: isOpen ? 'translateX(0)' : positions[position],
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed',
    top: position === 'top' || position === 'bottom' ? '0' : undefined,
    bottom: position === 'bottom' ? '0' : undefined,
    left: position === 'left' ? '0' : undefined,
    right: position === 'right' ? '0' : undefined,
    width: position === 'left' || position === 'right' ? '250px' : '100%',
    height: position === 'top' || position === 'bottom' ? '250px' : '100%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  }),

  overlay: (isOpen) => ({
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  }),
};

export const slideDrawerClass: CSSProperties = {
    position: 'relative',
    backgroundColor: '#a2f392',
};

