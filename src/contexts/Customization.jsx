import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

import { mainColors, accessoryColors } from '../colors';

export const CustomizationProvider = ({ children }) => {
    const [material, setMaterial] = useState('leather');
    const [accessory, setAccessory] = useState(1);
    const [mainColor, setMainColor] = useState(mainColors[0]);
    const [accessoryColor, setAccessoryColor] = useState(accessoryColors[0]);

    return (
        <CustomizationContext.Provider value={{
            material,
            setMaterial,
            accessory,
            setAccessory,
            mainColor,
            setMainColor,
            accessoryColor,
            setAccessoryColor
        }}>
            {children}
        </CustomizationContext.Provider>
    );
};

// Adding PropTypes validation
CustomizationProvider.propTypes = {
    children: PropTypes.node.isRequired, // children must be a React node and required
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCustomization = () => {
    const context = useContext(CustomizationContext);

    if (!context) {
        throw new Error("useCustomization must be used within a CustomizationProvider");
    }

    return context;
};