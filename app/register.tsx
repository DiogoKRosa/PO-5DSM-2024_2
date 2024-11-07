import {StyleSheet, Image, Text, View,  } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';


export default function App() {
    
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  
  
  return (
    <View>
       
       <View style={styles.background}>
      

       <View style={styles.form}>
        <Text style={styles.text}>Cadastro do Aluno </Text> 
        <View style={styles.line}/>
    
        <CustomInput placeholder='Nome Completo' placeholderTextColor="#277BC0" value={inputValue2}
                onChangeText={setInputValue2} style={styles.textInput}/>
        
        <CustomInput placeholder='RG' placeholderTextColor="#277BC0" style={styles.textInput}
           value={inputValue3} onChangeText={setInputValue3}
        /> 
        <CustomInput placeholder='CPF' placeholderTextColor="#277BC0" style={styles.textInput}
           value={inputValue4} onChangeText={setInputValue4}/> 
           
        <CustomInput placeholder='Data de Nascimento' placeholderTextColor="#277BC0"  style={styles.textInput}
           value={inputValue5} onChangeText={setInputValue5}
        />

        <CustomInput placeholder='Telefone' placeholderTextColor="#277BC0" style={styles.textInputTwo}
           value={inputValue6} onChangeText={setInputValue6}
        /> 
        <CustomInput placeholder='Email' placeholderTextColor="#277BC0" style={styles.textInputThree}
           value={inputValue7} onChangeText={setInputValue7}
        />

      <CustomButton
         title={"Cadastrar"} action={() => alert(inputValue)}
    />
        

       
       </View>
      </View>
    </View>

    


       
  

    );

  }



const styles = StyleSheet.create({
  topBar: {
    padding:10,
    height:105,
    backgroundColor:'#1A3E78',
  },

  logo:{
    marginTop:15,
    marginLeft:5,
  },

  icon:{
    marginLeft:262,
    marginTop:-30,
  },

  textUser:{
    color:'#FFFFFF',
    fontSize:15,
    marginLeft:298,
    marginTop:-32
  },

  textProfile:{
    color:'#FFFFFF',
    fontSize:11,
    marginLeft:298,
    
  },

  text:{
    marginTop:10,
    marginLeft:75,
    color:'#FFCC10',
    fontSize:25,
    paddingBottom:10,
    
  },

  line: {
    width: '90%',
    height: 1,
    marginLeft:20,
    marginTop:5,    
    backgroundColor: '#1A3E78', 
  },

  background:{
     backgroundColor: '#D2E0FB',
     width:500,
  },

  form:{
    backgroundColor: '#F5F5F5',
    width:365,
    height:600,
    marginLeft:15,
  },

  textInput:{
    width:330,
    height:45,
    backgroundColor:'#D2E0FB',
    color:'#277BC0',
    borderRadius:10,
    marginTop:15,
    marginLeft:15,
    paddingLeft:10
  },

  textInputTwo:{
    width:330,
    height:45,
    backgroundColor:'#D2E0FB',
    color:'#277BC0',
    borderRadius:10,
    marginTop:25,
    marginLeft:15,
    paddingLeft:10
  },

  textInputThree:{
    width:330,
    height:45,
    backgroundColor:'#D2E0FB',
    color:'#277BC0',
    borderRadius:10,
    marginTop:15,
    marginLeft:15,
    paddingLeft:10
  },


  calendar:{
     width:25,
     height:25,
     marginLeft:300,
     marginTop:-35,
  },

  pickerContainer: {
    backgroundColor:'#D2E0FB',
    borderRadius: 10, 
    marginBottom:200, 
    width:335,
    height:54,
    marginTop:15,
    marginLeft:10,
  },

  pickerinput:{
    width:320,
    backgroundColor:'#D2E0FB',
    color:'#277BC0',
    marginLeft:10,
  },

  bottomBar:{
    width:'100%',
    height:78,
    marginTop:3,
    backgroundColor:'#1A3E78',
  }
});

