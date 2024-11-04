import {StyleSheet, Image, Picker, selectedValue} from 'react-native';

import { Text, View } from '@/components/Themed';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
       <Image style={styles.logo} source={require('./assets/super.png')}/>
       <Image style={styles.icon} source={require('./assets/iconUser.png')}/> 
       <Text style={styles.textUser}>Roberto</Text>
       <Text style={styles.textProfile}>Meu Perfil</Text>
      </View>

      <View style={styles.yellow}>
    
      </View>

       <View style={styles.blue}>
        <View style={styles.white}>
          <View>
            <Image style={styles.arrow} source={require('./assets/arrow.png')}/> 
            <Text style={styles.text}> Lançar Notas</Text>
            <View style={styles.line}/>
            <Text style={styles.textTwo}> Selecione a Turma</Text>
          </View>

          <View style={styles.backgroundInput}>
           <Text style={styles.textThree}>Turma</Text>

           <Picker
            selectedValue={selectedValue}
            style={styles.pickerinput}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            dropdownIconColor="#000">
            <Picker.Item style={styles.pickerItem} label="Selecionar" value="" enabled={false} />
            <Picker.Item style={styles.pickerItem} label="1º Semestre" value="1º semestre" />
            <Picker.Item style={styles.pickerItem} label="2º Semestre" value="2º semestre" />
            <Picker.Item style={styles.pickerItem} label="3º Semestre" value="3º semestre" />
            <Picker.Item style={styles.pickerItem} label="4º Semestre" value="4º semestre" />
            <Picker.Item style={styles.pickerItem} label="5º Semestre" value="5º semestre" />
            <Picker.Item style={styles.pickerItem} label="6º Semestre" value="6º semestre" />
           </Picker>

           
          </View>


        </View>

        
      </View>


      

      <View style={styles.bottomBar}>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

   topBar: {
    padding:10,
    height:115,
    backgroundColor:'#1A3E78',
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

  white:{
    backgroundColor: '#F5F5F5',
    width:380,
    height:650,
    marginLeft:15,
  },

  blue:{
     backgroundColor: '#D2E0FB',
     width:500,
     height:650,
  },

  arrow:{
    marginLeft:20,
    marginTop:30
  },

  text:{
    color:'#1A3E78',
    marginLeft:110,
    marginTop:-25,
    fontSize:22,
  },

  line: {
    width: '90%',
    height: 1,
    marginLeft:20,
    marginTop:15,    
    backgroundColor: '#1A3E78', 
  },

  textTwo:{
    marginLeft:95,
    marginTop:10,
    fontSize:20,
    color:'#1A3E78',
  },

  textThree:{
    marginLeft:30,
    marginTop:10,
    fontSize:20,
    color:'#1A3E78',
  },

  backgroundInput:{
    backgroundColor:'#D2E0FB',
    borderRadius:10,
    width:360,
    height:120,
    marginLeft:10,
    marginTop:20
  },

  pickerinput:{
    width:280,
    height:45,
    marginTop:5,
    marginLeft:30,
    borderRadius:10,
    backgroundInput:'#F5F5F5',
    borderColor:'#F5F5F5',
    color:'gray',
  },

  bottomBar:{
    width:'100%',
    height:68,
    marginTop:0,
    backgroundColor:'#1A3E78',
  }
});
