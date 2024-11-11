import Colors from '@/constants/Colors';
import { colors } from '@/styles/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TimetableProps {
    weekday: string;
    data: { key: string; value: string }[];
}

const Timetable: React.FC<TimetableProps> = ({ weekday, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>{weekday}</Text>
            {/* Mapeando os dados para renderizar cada aula */}
            {data.map((classData, index) => (
                <ClassTime
                    key={index}
                    subject={classData.key}
                    hour={classData.value}
                    isEven={index % 2 === 0} // Passa true se o índice for par
                />
            ))}
        </View>
    );
};

interface ClassTimeProps {
    subject: string;
    hour: string;
    isEven: boolean; // Novo prop para determinar se a linha é par
}

const ClassTime: React.FC<ClassTimeProps> = ({ subject, hour, isEven }) => {
    return (
        <View
            style={[styles.classTime, isEven ? styles.evenRow : styles.oddRow]}
        >
            <Text style={[styles.text, styles.subject]}>{subject}</Text>
            <Text style={[styles.text, styles.hour]}>{hour}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
    },
    mainText: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
    },
    classTime: {
        flexDirection: 'row',
    },
    evenRow: {
        backgroundColor: Colors.light.text,
    },
    oddRow: {
        backgroundColor: 'transparent',
    },
    text: {
        textAlign: 'center',
        padding: 5,
    },
    subject: {
        minWidth: 50,
    },
    hour: {
        flexGrow: 1,
    },
});

// Exporta o componente Timetable como padrão
export default Timetable;
