import React, { useState } from 'react';
import {
  MultiSelectContainer,
  MultiSelectInput,
  Chip,
  Total,
  Dropdown,
  DropdownItem,
} from './MultiSelect.styles';

export const MultiSelect = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const availableItems = ['Apple','Banana','Cherry','Date','Elderberry','Fig','Grape',
  ];

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item) // Remove item
        : [...prev, item] // Add item
    );
  };

  return (
    <div className='App'>
    <MultiSelectContainer
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <MultiSelectInput>
        {selectedItems.slice(0, 3).map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
        {selectedItems.length > 3 && (
          <Total>+{selectedItems.length - 3}</Total>
        )}
      </MultiSelectInput>
      {isFocused && (
        <Dropdown>
          {availableItems.map((item, index) => (
            <DropdownItem
              key={index}
              className={selectedItems.includes(item) ? 'selected' : ''}
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
