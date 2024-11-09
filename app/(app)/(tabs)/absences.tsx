import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const MAX_ATTENDANCES = 64;
const Frequencia = () => {
    const data = [
        {
            subject: 'IAL',
            attendances: 64,
            absences: 0,
        },
    ];
    return (
        <DataTable style={styles.container}>
            <DataTable.Header
                style={{ width: '100%', justifyContent: 'space-between' }}
            >
                <DataTable.Title textStyle={styles.text}>
                    Matérias
                </DataTable.Title>
                <DataTable.Title textStyle={styles.text}>
                    Presenças
                </DataTable.Title>
                <DataTable.Title textStyle={styles.text}>
                    Faltas
                </DataTable.Title>
                <DataTable.Title textStyle={styles.text}>%</DataTable.Title>
            </DataTable.Header>
            {data.map((item) => {
                const percentage = (item.attendances / MAX_ATTENDANCES) * 100;
                return (
                    <DataTable.Row key={item.subject}>
                        <DataTable.Cell textStyle={styles.text}>
                            {item.subject}
                        </DataTable.Cell>
                        <DataTable.Cell>{item.attendances}</DataTable.Cell>
                        <DataTable.Cell>{item.absences}</DataTable.Cell>
                        <DataTable.Cell
                            textStyle={styles.text}
                        >{`${percentage}%`}</DataTable.Cell>
                    </DataTable.Row>
                );
            })}
        </DataTable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
    },
    text: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
});

export default Frequencia;
