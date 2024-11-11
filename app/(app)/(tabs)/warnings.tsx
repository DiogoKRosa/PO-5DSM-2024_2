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
import Colors from '@/constants/Colors';

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
                                            {aviso.content.length > 15
                                                ? aviso.content
                                                      .substring(0, 30)
                                                      .concat('...')
                                                : aviso.content}
                                        </Text>
                                    </View>

                                    <View style={styles.bbb}>
                                        <Text style={styles.avisosText2}>
                                            {aviso.date
                                                .replace('-', '/')
                                                .slice(0, -5)}
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
        paddingHorizontal: 24,
    },
    nome: {
        color: Colors.light.text,
        fontWeight: '700',
        fontSize: 16,
    },
    email: {
        color: Colors.light.text,
        fontWeight: '700',
        fontSize: 12,
    },
    info: {
        color: Colors.light.text,
        fontSize: 14,
        padding: 4,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    containerInfo: {
        //padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
    },
    containerAvisos: {
        width: '100%',
        minHeight: 300,
        padding: 10,
        backgroundColor: Colors.light.background,
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 100,
    },
    conteudo: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    avisoTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.light.text,
        fontFamily: 'Montserrat',
    },
    avisosContainer: {
        marginTop: 15,
        flexDirection: 'column',
        paddingHorizontal: 1,
    },
    avisos: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    avisosText1: {
        color: Colors.light.text,
        flexWrap: 'wrap',
        textAlign: 'justify',
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    avisosText2: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        color: Colors.light.text,
        flexWrap: 'wrap',
    },
    aaa: {
        //width: '65%',
    },
    bbb: {
        //width: '25%',
    },
});
