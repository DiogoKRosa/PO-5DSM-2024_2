import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
} from 'react-native';

import GradeTable from '@/components/Gradetable';
import Colors from '@/constants/Colors';
import api from '@/services/api';
import { User } from '@/services/types/User';

export default function TelaNotas() {
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

    const dados = {
        nome: 'Lucas',
        email: 'lucas@facul.com',
        turma: 'DSM 5',
        ra: '34567809876',
        frequencia: 72.33,
    };

    const grades = user?.gradeNotesList;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.gradeContainer}>
                {grades.map((grade, index) => {
                    // Definindo o objeto `data` corretamente dentro do loop
                    const data = [
                        { key: 'Atividades 1', value:  JSON.stringify(grade.atividade_um) },
                        {
                            key: 'Avaliação Integradora',
                            value: JSON.stringify(grade.avaliacao_integradora),
                        },
                        { key: 'Projeto Integrador', value: JSON.stringify(grade.projeto_integrador) },
                        { key: 'Atividades 2', value: JSON.stringify(grade.atividade_dois) },
                        { key: 'Média', value: JSON.stringify(grade.media) },
                    ];

                    return (
                        <React.Fragment key={index}>
                            <GradeTable
                                weekday='Programação para dispositivos móveis I' // Ou outra variável que você deseje
                                data={data} // Passando os dados corretos para o componente
                            />
                            <View
                                aria-labelledby='divider'
                                style={{
                                    height: 1,
                                    width: '100%',
                                    backgroundColor:
                                        Colors.light.tabBorderColor,
                                    marginVertical: 16,
                                }}
                            />
                        </React.Fragment>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingHorizontal: 24,
    },
    gradeContainer: {
        marginEnd: 16,
        marginStart: 16,
        marginTop: 16,
    },
});
