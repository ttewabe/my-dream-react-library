import React, { useState } from 'react';
import {
    MultiSelectContainer,
    MultiSelectInput,
    Chip,
    DropdownItem,
    Total,
    Label,
    Placeholder,
    Dropdown,
} from './MultiSelect.styles';

interface MultiSelectProps {
    label: string;
    placeholder: string;
    required?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
    label,
    placeholder,
    required,
}) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const availableItems = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Elderberry',
        'Fig',
        'Grape',
    ];

    const toggleItem = (item: string) => {
        setSelectedItems(
            (prev) =>
                prev.includes(item)
                    ? prev.filter((i) => i !== item) // Remove item
                    : [...prev, item] // Add item
        );
    };

    return (
        <div className="App">
            <Label>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </Label>
            <MultiSelectContainer
                tabIndex={0}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <MultiSelectInput isFocus={isFocused}>
                    {selectedItems.length === 0 ? (
                        <Placeholder>{placeholder}</Placeholder>
                    ) : (
                        selectedItems
                            .slice(0, 3)
                            .map((item, index) => (
                                <Chip key={index}>{item}</Chip>
                            ))
                    )}
                    {selectedItems.length > 3 && (
                        <Total>+{selectedItems.length - 3}</Total>
                    )}
                </MultiSelectInput>
                {isFocused && (
                    <Dropdown>
                        {availableItems.map((item, index) => (
                            <DropdownItem
                                key={index}
                                className={
                                    selectedItems.includes(item)
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => toggleItem(item)}
                            >
                                {item}
                            </DropdownItem>
                        ))}
                    </Dropdown>
                )}
            </MultiSelectContainer>
        </div>
    );
};
