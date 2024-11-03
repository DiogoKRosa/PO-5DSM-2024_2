import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TabTwoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Roberto</Text>
        <Text style={styles.profileText}>meu perfil</Text>
        <View style={styles.avatar} />
        {/* <Image style={styles.logo} source={require('./img/png5-1.png')} /> */}
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Criar Turma</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Cadastrar Aluno</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Cadastrar Professor</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ajustes</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sair</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#d2e0fb',
    width: '100%',
    height: 105,
    alignItems: 'flex-end',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'League Spartan-Regular',
    fontWeight: '400',
    color: '#f5f5f5',
    fontSize: 16,
  },
  profileText: {
    fontFamily: 'League Spartan-Regular',
    fontWeight: '400',
    color: '#ffffff',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  avatar: {
    width: 29,
    height: 29,
    backgroundColor: '#d9d9d9',
    borderRadius: 14.5,
  },
  logo: {
    width: 148,
    height: 61,
    marginTop: 10,
  },
  content: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    width: 286,
    height: 127,
    backgroundColor: '#d2e0fb',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'League Spartan-Regular',
    fontWeight: '400',
    color: '#1a3e78',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 15,
  },
  button: {
    backgroundColor: '#1a3e78',
    borderRadius: 10,
    padding: 10,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'League Spartan-Regular',
    fontWeight: '400',
    color: '#ffcc10',
    fontSize: 20,
  },
});

export default TabTwoScreen;
