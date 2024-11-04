import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet, Image } from 'react-native';

const App = () => {
  const [disciplina, setDisciplina] = useState('Inglês');
  const [notas, setNotas] = useState({
    'Computação em Nuvem': { atividade1: '', avaliacao: '', projetos: '', atividade2: '' },
    'Fundamentos da Redação Técnica': { atividade1: '', avaliacao: '', projetos: '', atividade2: '' },
    'Inglês': { atividade1: '', avaliacao: '', projetos: '', atividade2: '' },
    'Programação para Dispositivos Móveis I': { atividade1: '', avaliacao: '', projetos: '', atividade2: '' },
    'Programação para Dispositivos Móveis II': { atividade1: '', avaliacao: '', projetos: '', atividade2: '' },
    'Segurança no Desenvolvimento de Aplicações': { atividade1: '', avaliacao: '', projetos: '', atividade2: '' },
  });
  const [media, setMedia] = useState('');

  useEffect(() => {
    const { atividade1, avaliacao, projetos, atividade2 } = notas[disciplina];
    const notasArray = [
      Number(atividade1) || 0,
      Number(avaliacao) || 0,
      Number(projetos) || 0,
      Number(atividade2) || 0,
    ];
    
    const mediaCalculada = notasArray.reduce((acc, curr) => acc + curr, 0) / (notasArray.length || 1);
    setMedia(mediaCalculada.toFixed(2));
  }, [notas, disciplina]);

  const handleNotaChange = (atividade, value) => {
    setNotas((prevNotas) => ({
      ...prevNotas,
      [disciplina]: { ...prevNotas[disciplina], [atividade]: value },
    }));
  };

  const handleSalvar = () => {
    alert('Notas salvas!');
  };

  return (
    <View style={styles.container}>

    <View style={styles.topBar}>
        <Image style={styles.logo} source={require('./assets/super.png')}/>
        <Image style={styles.icon} source={require('./assets/iconUser.png')}/> 
        <Text style={styles.textUser}>Roberto</Text>
        <Text style={styles.textProfile}>Meu Perfil</Text>
      </View>

      <View style={styles.yellow}></View>


     <View style={styles.blue}>

      <View style={styles.white}>
           <Image style={styles.arrow} source={require('./assets/arrow.png')}/> 
            <Text style={styles.text}> Aline Silva</Text>
            <View style={styles.line}/>
            <Text style={styles.textTwo}> Selecione a Materia</Text>
      
      <Picker
        selectedValue={disciplina}
        style={styles.picker}
        onValueChange={(itemValue) => setDisciplina(itemValue)}
      >
         {Object.keys(notas).map((disciplina) => (
          <Picker.Item key={disciplina} label={disciplina} value={disciplina} />
        ))}
      </Picker>

      {['atividade1', 'avaliacao', 'projetos', 'atividade2'].map((atividade) => (
        <View key={atividade} style={styles.inputContainer}>
          <Text style={styles.textNotes}>{atividade.charAt(0).toUpperCase() + atividade.slice(1)}:</Text>
          <TextInput
            style={styles.input}
            value={notas[disciplina][atividade]}
            onChangeText={(value) => handleNotaChange(atividade, value)}
            keyboardType="numeric"
          />
        </View>
      ))}

      <View style={styles.inputContainer}>
        <Text style={styles.textMedia}>Média:</Text>
        <TextInput
          style={styles.input}
          value={media}
          editable={false}
        />
      </View>

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
       </View>

      </View>

        <View style={styles.bottomBar}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  topBar: {
    backgroundColor: '#1A3E78',
    height:115,
    padding:10,
  },

  logo:{
    marginTop:25,
    marginLeft:5,
  },

  icon:{
    marginLeft:292,
    marginTop:-30,
  },

  textUser:{
    color:'#FFFFFF',
    fontSize:15,
    marginLeft:328,
    marginTop:-32
  },

  textProfile:{
    color:'#FFFFFF',
    fontSize:11,
    marginLeft:330,
    
  },

  yellow:{
      height:45,
      backgroundColor:'#FFCC10'
  },

  blue:{
     backgroundColor: '#D2E0FB',
     width:500,
     height:650,
  },
  
  white: {
    backgroundColor: '#F5F5F5',
    width:380,
    height:650,
    marginLeft:15,
  },

  text:{
    color:'#1A3E78',
    marginLeft:120,
    marginTop:-25,
    fontSize:22,
    
  },

  textTwo:{
     marginLeft:120,
     marginTop:10,
     marginLeft:84,
     fontSize:20,
     color:'#1A3E78'
  },

  arrow:{
    marginLeft:20,
    marginTop:30
  },

  line: {
    width: '90%',
    height: 1,
    marginLeft:20,
    marginTop:15,    
    backgroundColor: '#1A3E78', 
  },

  picker: {
     width:320,
     height:39,
     marginTop:10,
     marginLeft:25,
     borderColor:'#1A3E78',
     borderRadius:10,
  },
  
  textNotes:{
      marginLeft:-220,
      marginTop:4,
      fontSize:18,
      position:'absolute',
      color:'#504C4C',
  },

  inputContainer: {
    width:55,
    borderColor:'#1A3E78',
    marginLeft:250,
    marginTop:14

  },

  input: {
    borderWidth: 1,
    flex: 1,
    marginLeft: 10,
    padding: 5,
    borderColor:'#1A3E78',
    borderRadius:10,
  },

  textMedia:{
    marginLeft:-220,
    marginTop:4,
    fontSize:18,
    position:'absolute',
    color:'#504C4C',
  },

  button: {
    backgroundColor: '#D2E0FB',
    width: 115,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginLeft:200,
  },
  buttonText: {
    color: '#1A3E78',
    fontWeight: 'bold',
    fontSize:20,
  },
  
  bottomBar: {
    width:'100%',
    height:68,
    marginTop:0,
    backgroundColor:'#1A3E78',
  },
});

export default App;


