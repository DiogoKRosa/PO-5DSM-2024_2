import { colors } from '@/styles/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GradeTableProps {
    weekday: string;
    data: { key: string; value: string }[];
}

const GradeTable: React.FC<GradeTableProps> = ({ weekday, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>{weekday}</Text>
            {data.map((classData, index) => (
                <ClassTime
                    key={classData.key}
                    subject={classData.key}
                    grade={classData.value}
                />
            ))}
        </View>
    );
};

interface ClassTimeProps {
    subject: string;
    grade: string;
}

const ClassTime: React.FC<ClassTimeProps> = ({ subject, grade }) => {
    return (
        <View style={styles.classTime}>
            <Text
                style={[
                    styles.text,
                    styles.subject,
                    subject === 'Média' && { fontWeight: 700 },
                ]}
            >
                {subject}
            </Text>
            <Text
                style={[
                    styles.text,
                    styles.grade,
                    Number(grade.replace(',', '.')) < 6 && {
                        color: 'red',
                        fontWeight: '700',
                    },
                    subject === 'Média' && { fontWeight: 700 },
                ]}
            >
                {grade}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
    },
    mainText: {
        fontWeight: 'bold',
        paddingLeft: 5,
        color: '#1A3E78',
        marginBottom: 8,
    },
    classTime: {
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        textAlign: 'center',
        padding: 5,
    },
    subject: {
        minWidth: 100,
        textAlign: 'left',
        textTransform: 'uppercase',
    },
    grade: {
        flexGrow: 1,
        textAlign: 'right',
    },
});

export default GradeTable;
