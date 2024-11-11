import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '@/styles/colors';
import Colors from '@/constants/Colors';

interface CustomButtonProps {
    title: string;
    action: () => void;
}

// Componente funcional
const CustomButton: React.FC<CustomButtonProps> = ({ title, action }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={action}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomButton;
