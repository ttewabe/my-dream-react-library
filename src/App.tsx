import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons
import { MultiSelect } from './tat-react-project/multi-select/MultiSelect';

export const App = () => {
    return (
        <div>
            <MultiSelect label={''} placeholder={''} />
        </div>
    );
};
