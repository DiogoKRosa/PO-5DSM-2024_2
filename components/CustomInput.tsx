import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardTypeOptions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import Colors from '@/constants/Colors';

// Definindo a interface para as props
interface CustomInputProps {
    value: string; // valor atual do input
    onChangeText: (text: string) => void; // função chamada quando o texto muda
    placeholder: string; // texto de sugestão
    secureTextEntry?: boolean; // opcional, para ocultar texto
    keyboardType?: KeyboardTypeOptions; // tipo de teclado
    style?: object; // estilo customizado
}

const CustomInput: React.FC<CustomInputProps> = ({
    value,
    onChangeText,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    style,
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={Colors.light.tint}
                secureTextEntry={secureTextEntry && !isPasswordVisible} // Corrigido para usar a visibilidade do password
                keyboardType={keyboardType}
            />
            {secureTextEntry && (
                <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    style={styles.icon}
                >
                    <MaterialIcons
                        name={
                            isPasswordVisible ? 'visibility-off' : 'visibility'
                        }
                        size={24}
                        color={Colors.light.tint}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.background,
        borderBottomWidth: 1,
        borderBottomColor: '#acacac',
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
});

// Exporta o componente
export default CustomInput;
