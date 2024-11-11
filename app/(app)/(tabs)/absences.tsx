import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import api from '@/services/api';
import { User } from '@/services/types/User';

const [user, setUser] = useState<User | null>(null);

const studentId = 1;
const fetchUser = async () => {
    try {
        const response = await api.get<User>(`/api/students/${studentId}`); // Aqui a resposta é tipada como `User`
        setUser(response.data);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
    }
};

useEffect(() => {
    fetchUser();
}, []);

const attendanceList = user?.attendanceList;

const Frequencia = () => {
    // Função para contar presenças e ausências por sigla
    const countAttendanceBySigla = (attendanceList: any[]) => {
        const result: Record<
            string,
            { attendances: number; absences: number }
        > = {};

        attendanceList.forEach((entry) => {
            const { sigla, attendanceStatus } = entry;

            if (!result[sigla]) {
                result[sigla] = { attendances: 0, absences: 0 };
            }

            if (attendanceStatus === 'PRESENT') {
                result[sigla].attendances++;
            } else {
                result[sigla].absences++;
            }
        });

        return result;
    };

    // Calculando as presenças e ausências para cada sigla
    const attendanceSummary = countAttendanceBySigla(attendanceList);

    // Transformando o resumo em um array para renderizar no DataTable
    const data = Object.keys(attendanceSummary).map((sigla) => ({
        subject: sigla,
        attendances: attendanceSummary[sigla].attendances,
        absences: attendanceSummary[sigla].absences,
    }));

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
            </DataTable.Header>

            {data.map((item) => (
                <DataTable.Row key={item.subject}>
                    <DataTable.Cell textStyle={styles.text}>
                        {item.subject}
                    </DataTable.Cell>
                    <DataTable.Cell>{item.attendances}</DataTable.Cell>
                    <DataTable.Cell>{item.absences}</DataTable.Cell>
                </DataTable.Row>
            ))}
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
