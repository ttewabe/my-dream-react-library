import React from 'react';
import { Overlay, Drawer } from './SlideDrawer.styles';

interface SlideDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    position?: 'left' | 'right' | 'top' | 'bottom';
    children: React.ReactNode;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
    isOpen,
    onClose,
    position = 'right',
    children,
}) => {
    return (
        <div>
            <Overlay isOpen={isOpen} onClick={onClose} />
            <Drawer isOpen={isOpen} position={position}>
                {children}
            </Drawer>
        </div>
    );
};
