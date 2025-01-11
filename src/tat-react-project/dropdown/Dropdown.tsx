import React from 'react';
import { View } from './Dropdown.style';

export interface DropdownProps {
    id: string;
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
    required?: boolean;
    options: DropdownOption[];
    onChange?: (value: string) => void;
}

export interface DropdownOption {
    id: string;
    name: string;
    disabled?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
    id,
    label,
    value,
    placeholder = 'Select an option',
    options,
    style,
    className,
    onChange,
}) => {
    return (
        <View style={style} className={className}>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
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
