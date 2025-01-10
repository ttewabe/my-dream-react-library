import React, { ReactNode } from 'react';
import { CardStyles } from './Card.styles';

interface CardProps {
    header: ReactNode;
    headerLabel: ReactNode;
    children: ReactNode | undefined;
}

export const Card: React.FC<CardProps> = ({
    header,
    headerLabel,
    children,
}) => {
    return (
        <CardStyles>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h1>{header}</h1>
                <span>{headerLabel}</span>
            </div>
            {children}
        </CardStyles>
    );
};
