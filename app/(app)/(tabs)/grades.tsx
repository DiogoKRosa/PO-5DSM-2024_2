import React, { useState } from 'react';
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

export default function TelaNotas() {
    const dados = {
        nome: 'Lucas',
        email: 'lucas@facul.com',
        turma: 'DSM 5',
        ra: '34567809876',
        frequencia: 72.33,
    };

    const testData2 = [
        { key: 'Atividades 1', value: '4,5' },
        { key: 'Avaliação', value: '6,7' },
        { key: 'Projetos', value: '9,4' },
        { key: 'Atividades 2', value: '6,5' },
        { key: 'Média', value: '6,7' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.gradeContainer}>
                <GradeTable
                    weekday='Programação para dispositivos móveis I'
                    data={testData2}
                />
                <View
                    aria-labelledby='divider'
                    style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: Colors.light.tabBorderColor,
                        marginVertical: 16,
                    }}
                />
                <GradeTable
                    weekday='Programação para dispositivos móveis II'
                    data={testData2}
                />
                <View
                    aria-labelledby='divider'
                    style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: Colors.light.tabBorderColor,
                        marginVertical: 16,
                    }}
                />
                <GradeTable
                    weekday='Laboratório de Desenvolvimento para Dispositivos Móveis'
                    data={testData2}
                />
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
