// TextField.tsx
import React from 'react';
import { TextFieldContainer, TextFieldInput, Label } from './TextField.styles';

interface TextFieldProps {
    label: string;
    placeholder: string;
    required?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
    label,
    placeholder,
    required,
}) => {
    return (
        <div>
            <Label>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </Label>
            <TextFieldContainer>
                <TextFieldInput placeholder={placeholder} />
            </TextFieldContainer>
        </div>
    );
};
