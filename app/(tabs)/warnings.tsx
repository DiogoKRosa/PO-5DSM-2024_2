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

import api from '@/services/api';
import { User } from '@/services/types/User';

export default function TelaAvisos() {
    const [user, setUser] = useState<User | null>(null);

    const dados = {
        nome: 'Lucas',
        email: 'lucas@facul.com',
        turma: 'DSM 5',
        ra: '34567809876',
        frequencia: 72.33,
    };

    const avisos = [
        {
            title: 'Aviso 1',
            content: 'Hubtech',
            date: '28-11-2024',
        },
        {
            title: 'Aviso 2',
            content: 'Esta é uma notificação de aviso 2',
            date: '21-11-2024',
        },
        {
            title: 'Aviso 3',
            content: 'Apresentação do Projeto Integrador',
            date: '04-12-2024',
        },
    ];

    const studentId = 33;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get<User>(
                    `/api/students/${studentId}`,
                ); // Aqui a resposta é tipada como `User`
                setUser(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.conteudo}>
                    <View style={styles.containerInfo}>
                        <View>
                            <Text
                                style={styles.info}
                                key={user?.id}
                            >
                                {user?.name}
                            </Text>

                            <Text style={styles.info}>{dados.turma}</Text>
                            <Text style={styles.info}>RA: {dados.ra}</Text>
                        </View>
                        <View>
                            <Text style={styles.info}>
                                {dados.frequencia.toFixed(2)} %
                            </Text>
                        </View>
                    </View>

                    <View style={styles.containerAvisos}>
                        <Text style={styles.avisoTitle}>Avisos</Text>
                        <View style={styles.avisosContainer}>
                            {avisos.map((aviso, index) => (
                                <View
                                    key={index}
                                    style={styles.avisos}
                                >
                                    <View style={styles.aaa}>
                                        <Text style={styles.avisosText1}>
                                            {aviso.content}
                                        </Text>
                                    </View>

                                    <View style={styles.bbb}>
                                        <Text style={styles.avisosText2}>
                                            {aviso.date}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    nome: {
        color: '#1A3E78',
        fontWeight: 'bold',
        fontSize: 16,
    },
    email: {
        color: '#1A3E78',
        fontWeight: 'bold',
        fontSize: 12,
    },
    info: {
        color: '#1A3E78',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 4,
    },
    containerInfo: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
    },
    containerAvisos: {
        width: 350, // largura mínima
        minHeight: 300, // altura mínima
        padding: 10,
        backgroundColor: '#D2E0FB',
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 100
    },
    conteudo: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    avisoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A3E78',
    },
    avisosContainer: {
        marginTop: 15,
        flexDirection: 'column',
    },
    avisos: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    avisosText1: {
        color: '#2C3E50',
        flexWrap: 'wrap',
        textAlign: 'justify',
    },
    avisosText2: {
        color: '#2C3E50',
        flexWrap: 'wrap',
    },
    aaa: {
        width: '65%',
    },
    bbb: {
        width: '25%',
    },
});
