import {StylesConfig, Theme} from 'react-select';

export const reactSelectTheme = (currentTheme: Theme) => {
    return {
        ...currentTheme,
        colors: {
            ...currentTheme.colors,
            primary25: 'red',
        },
    };
};

export const reactSelectStyles = (): StylesConfig => {
    return {
        container: (baseStyles) => ({
            ...baseStyles,
            opacity: '1',
            cursor: 'pointer'
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
            zIndex: 100,
            backgroundColor: '#363537'
        }),
        control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            outline: 'none',
            minHeight: '40px',
            boxShadow: '0 !important',
            '&:hover': {
                boxShadow: '0px 0px 2px 2px !important'
            },
        }),
        option: (baseStyles) => ({
            ...baseStyles,
            cursor: 'pointer',
            color: 'white',
            '&:hover': { 
                backgroundColor: 'red'
            },
        }),
        input: (baseStyles) => ({
            ...baseStyles,
            color: 'white'
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: 'black'
        }),
        multiValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: '#93a2b7'
        }),
        multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            color: 'white'
        }),
    };
};
