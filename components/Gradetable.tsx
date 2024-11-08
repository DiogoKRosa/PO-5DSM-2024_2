import { colors } from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
                    key={index} 
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

const ClassTime: React.FC<ClassTimeProps> = ({ subject, grade}) => {
    return (
        <View style={styles.classTime}>
            <Text style={[styles.text, styles.subject]}>{subject}</Text>
            <Text style={[styles.text, styles.grade]}>{grade}</Text>
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
        color: "#1A3E78"
    },
    classTime: {
        flexDirection: 'row',
    },
    text: {
        textAlign: 'center',
        padding: 5,
        fontFamily: 'League Spartan',
    },
    subject:{
        minWidth: 100,
        textAlign: 'left',
        fontFamily: 'League Spartan',
    },
    grade:{
        flexGrow: 1,
        textAlign: 'right',
        fontFamily: 'League Spartan',
    }
});

export default GradeTable;