import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const Drawer = styled.div<{
    isOpen: boolean;
    position: 'left' | 'right' | 'top' | 'bottom';
}>`
    margin: 10px 1px 0px 2px;
    position: fixed;
    top: ${({ position }) =>
        position === 'top' || position === 'bottom' ? '0' : 'auto'};
    bottom: ${({ position }) => (position === 'bottom' ? '0' : 'auto')};
    left: ${({ position }) => (position === 'left' ? '0' : 'auto')};
    right: ${({ position }) => (position === 'right' ? '0' : 'auto')};
    width: ${({ position }) =>
        position === 'left' || position === 'right' ? '350px' : '100%'};
    height: ${({ position }) =>
        position === 'top' || position === 'bottom' ? '350px' : '100%'};
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: ${({ isOpen, position }) => {
        switch (position) {
            case 'left':
                return isOpen ? 'translateX(0)' : 'translateX(-100%)';
            case 'right':
                return isOpen ? 'translateX(0)' : 'translateX(100%)';
            case 'top':
                return isOpen ? 'translateY(0)' : 'translateY(-100%)';
            case 'bottom':
                return isOpen ? 'translateY(0)' : 'translateY(100%)';
            default:
                return 'translateX(0)';
        }
    }};
    transition: transform 0.3s ease-in-out;
`;
