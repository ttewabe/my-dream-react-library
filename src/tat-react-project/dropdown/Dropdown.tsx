import React from 'react';
import { View } from './Dropdown.style';

export interface DropdownProps {
    label: string;
    value: string;
    Placeholder: string;
    id: string;
    disabled: boolean;
    style: React.CSSProperties;
    className: string;
    required: boolean;
    options: DropdownOption[];
}

export interface DropdownOption {
    id: string;
    name: string;
    disabled?: boolean;
}

export const Dropdown = ({
    label,
    value,
    Placeholder,
    options,
    id,
    style,
    className,
}: DropdownProps) => {
    return (
        <View style={style} className={className}>
            {label && <label htmlFor={id}>{label}</label>}
            <select id={id} value={value}>
                <option value="">{Placeholder}</option>
                {options.map((option) => (
                    <option
                        key={option.id}
                        value={option.id}
                        disabled={option.disabled}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </View>
    );
};
