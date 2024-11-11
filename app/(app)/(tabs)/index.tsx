import Colors from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const subjectsData = [
    { sigla: 'IAL', disciplina: 'Internet das Coisas e Aplicações', top: 42 },
    { sigla: 'IHC', disciplina: 'Experiência do Usuário', top: 68 },
    {
        sigla: 'ILP',
        disciplina: 'Programação para dispositivos móveis',
        top: 94,
    },
    { sigla: 'ING', disciplina: 'Inglês II', top: 134 },
    { sigla: 'IEC', disciplina: 'Integração e Entrega Continua', top: 160 },
];

// Componente HorariosScreen
export default function HorariosScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.overlay} />

            {/* SubjectsTable integrado */}
            <SubjectsTable />

            {/* ScrollView para permitir rolagem quando necessário */}
            <ScrollView contentContainerStyle={styles.scheduleContainer}>
                <ScheduleCard
                    day='Segunda-feira'
                    times={[
                        '18:30 - 19:20',
                        '19:20 - 20:10',
                        '20:10 - 21:00',
                        '21:10 - 22:00',
                        '22:00 - 22:50',
                    ]}
                    subjects={['IAL', 'IAL', 'IAL', 'IHC', 'IHC']}
                />
                <ScheduleCard
                    day='Terça-feira'
                    times={[
                        '18:30 - 19:20',
                        '19:20 - 20:10',
                        '20:10 - 21:00',
                        '21:10 - 22:00',
                        '22:00 - 22:50',
                    ]}
                    subjects={['IAL', 'IAL', 'IAL', 'IHC', 'IHC']}
                />
                <ScheduleCard
                    day='Quarta-feira'
                    times={[
                        '18:30 - 19:20',
                        '19:20 - 20:10',
                        '20:10 - 21:00',
                        '21:10 - 22:00',
                        '22:00 - 22:50',
                    ]}
                    subjects={['IAL', 'IAL', 'IAL', 'IHC', 'IHC']}
                />
                <ScheduleCard
                    day='Quinta-feira'
                    times={[
                        '18:30 - 19:20',
                        '19:20 - 20:10',
                        '20:10 - 21:00',
                        '21:10 - 22:00',
                        '22:00 - 22:50',
                    ]}
                    subjects={['IAL', 'IAL', 'IAL', 'IHC', 'IHC']}
                />
                <ScheduleCard
                    day='Sexta-feira'
                    times={[
                        '18:30 - 19:20',
                        '19:20 - 20:10',
                        '20:10 - 21:00',
                        '21:10 - 22:00',
                        '22:00 - 22:50',
                    ]}
                    subjects={['IAL', 'IAL', 'IAL', 'IHC', 'IHC']}
                />
            </ScrollView>
        </View>
    );
}

function SubjectsTable() {
    return (
        <View style={styles.subjectsContainer}>
            <Text style={[styles.subjectsTitle, { left: 29 }]}>Sigla</Text>
            <Text style={[styles.subjectsTitle, { left: 122 }]}>
                Disciplina
            </Text>

            {subjectsData.map((item, index) => (
                <View
                    key={index}
                    style={styles.subjectRow}
                >
                    <Text style={[styles.subjectSigla, { top: item.top }]}>
                        {item.sigla}
                    </Text>
                    <Text style={[styles.subjectDisciplina, { top: item.top }]}>
                        {item.disciplina}
                    </Text>
                </View>
            ))}

            <View style={styles.horizontalLineTop} />
            <View style={styles.horizontalLineBottom} />
            <View style={styles.verticalLine} />
        </View>
    );
}
// Componente ScheduleCard
function ScheduleCard({ day, times, subjects }) {
    return (
        <View style={styles.scheduleCard}>
            <Text style={styles.scheduleCardDay}>{day}</Text>
            {times.map((time, index) => (
                <View
                    key={index}
                    style={[
                        styles.scheduleRow,
                        index % 2 === 0 && { backgroundColor: '#ecf3fd' },
                    ]}
                >
                    <Text style={styles.scheduleSubject}>
                        {subjects[index]}
                    </Text>
                    <Text style={styles.scheduleTime}>{time}</Text>
                </View>
            ))}
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
    },
    subjectsContainer: {
        width: '100%',
        minHeight: 210,
        height: 'auto',
        backgroundColor: 'white',
        marginTop: 24,
        elevation: 5,
    },
    subjectsTitle: {
        position: 'absolute',
        color: Colors.light.text,
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    subjectSigla: {
        position: 'absolute',
        left: 29,
        color: Colors.light.text,
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    subjectDisciplina: {
        position: 'absolute',
        left: 122,
        width: 216,
        color: Colors.light.text,
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    subjectRow: {
        position: 'relative',
    },
    horizontalLineTop: {
        position: 'absolute',
        width: 338,
        height: 1,
        left: 0,
        top: 31,
        backgroundColor: Colors.light.altBackground,
    },
    horizontalLineBottom: {
        position: 'absolute',
        width: 338,
        height: 1,
        left: 0,
        top: 187,
        backgroundColor: Colors.light.altBackground,
    },
    verticalLine: {
        position: 'absolute',
        width: 1,
        height: 188,
        left: 96,
        backgroundColor: Colors.light.altBackground,
    },
    scheduleContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 30,
        paddingHorizontal: 8,
        paddingBottom: 30, // Adicionado para garantir espaço ao final
        elevation: 5,
    },
    scheduleCard: {
        width: '45%',
        marginVertical: 10,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: Colors.light.background,
        elevation: 10,
    },
    scheduleCardDay: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        color: Colors.light.altText,
        marginBottom: 10,
    },
    scheduleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    scheduleSubject: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.light.altText,
    },
    scheduleTime: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.light.altText,
        fontFamily: 'Montserrat',
    },
});
