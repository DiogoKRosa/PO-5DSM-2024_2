import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "@/styles/colors";


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
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue[300],
        padding: 10, 
        borderRadius: 10, 
        alignItems: 'center', 
    },
    buttonText: {
        color: colors.yellow, 
        fontSize: 16, 
    },
})

export default CustomButton;
