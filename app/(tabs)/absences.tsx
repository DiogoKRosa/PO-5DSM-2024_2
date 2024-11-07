import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Frequencia = () => {
    return (
        <View style={styles.container}>
            {/* Overlay white background */}
            <View style={styles.overlay}></View>

            {/* Main content */}
            <View style={styles.content}>
                {/* Materia Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Matéria</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listItem}>IAL</Text>
                        <Text style={styles.listItem}>IHC</Text>
                        <Text style={styles.listItem}>ILP</Text>
                        <Text style={styles.listItem}>ING</Text>
                        <Text style={styles.listItem}>IEC</Text>
                    </View>
                </View>

                {/* Presenças Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Presenças</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listItem}>64</Text>
                        <Text style={styles.listItem}>52</Text>
                        <Text style={styles.listItem}>30</Text>
                        <Text style={styles.listItem}>30</Text>
                        <Text style={styles.listItem}>52</Text>
                    </View>
                </View>

                {/* Faltas Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Faltas</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listItem}>0</Text>
                        <Text style={styles.listItem}>6</Text>
                        <Text style={styles.listItem}>0</Text>
                        <Text style={styles.listItem}>0</Text>
                        <Text style={styles.listItem}>6</Text>
                    </View>
                </View>

                {/* % Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>%</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listItem}>0%</Text>
                        <Text style={styles.listItem}>7,5%</Text>
                        <Text style={styles.listItem}>0%</Text>
                        <Text style={styles.listItem}>0%</Text>
                        <Text style={styles.listItem}>7,5%</Text>
                    </View>
                </View>
            </View>

            {/* Obs */}
            <View style={styles.obsContainer}>
                <Text style={styles.obsText}>
                    Obs.: Caso atinja um percentual acima de 25% na matéria será
                    reprovado por falta na matéria.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.77,
        backgroundColor: 'white',
    },
    content: {
        paddingHorizontal: 10,
        paddingTop: 124,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#D8D4D4',
        paddingHorizontal: 10,
    },
    sectionHeader: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#D8D4D4',
    },
    sectionTitle: {
        color: '#1A3E78',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '600',
    },
    list: {
        paddingTop: 10,
        gap: 20,
        alignItems: 'center',
    },
    listItem: {
        color: '#1A3E78',
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    bottomBar: {
        width: '100%',
        height: 71,
        position: 'absolute',
        backgroundColor: '#D2E0FB',
        boxShadow: '0px 2px 31.6px rgba(0, 0, 0, 0.25)',
        bottom: 0,
    },
    header: {
        width: '100%',
        height: 82,
        position: 'absolute',
        backgroundColor: '#D2E0FB',
        boxShadow: '0px -14px 31.6px rgba(0, 0, 0, 0.25)',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#1A3E78',
        fontSize: 28,
        fontFamily: 'League Spartan',
        fontWeight: '400',
    },
    icons: {
        flexDirection: 'row',
        position: 'absolute',
        left: 33,
        top: 754,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 312,
    },
    icon: {
        alignItems: 'center',
    },
    iconCircle: {
        width: 30,
        height: 30,
        backgroundColor: '#1A3E78',
    },
    iconText: {
        color: '#1A3E78',
        fontSize: 12,
        fontFamily: 'League Spartan',
        fontWeight: '700',
        marginTop: 5,
    },
    obsContainer: {
        width: '100%',
        position: 'absolute',
        left: 33,
        top: 375,
        textAlign: 'center',
    },
    obsText: {
        color: '#1E1E1E',
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
});

export default Frequencia;