import { StyleSheet } from 'react-native';
import { useState } from 'react';

//import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import CustomButtom from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import Timetable from '@/components/Timetable';
import GradeTable from '@/components/Gradetable';

export default function TabOneScreen() {

    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

      const testData = [
        { key: 'FRT', value: '08:00 - 09:00' },
        { key: 'CN1', value: '09:00 - 10:00' },
        { key: 'DM2', value: '09:00 - 10:00' },
    ];

      const testData2 = [
        { key: 'Atividades 1', value: '4,5' },
        { key: 'Avaliação', value: '6,7' },
        { key: 'Projetos', value: '9,4' },
        { key: 'Atividades 2', value: '6,5' },
        { key: 'Média', value: '6,7' }
    ];

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Tab One</Text>
            <View
                style={styles.separator}
                lightColor='#eee'
                darkColor='rgba(255,255,255,0.1)'
            />
            <EditScreenInfo path='app/(tabs)/grades.tsx' /> */}

            <CustomInput
                value={inputValue2} // valor atual do input
                onChangeText={setInputValue2} // função chamada ao mudar o texto
                placeholder={"Senha"} // Placeholder
                secureTextEntry={false}
                keyboardType='default'
            />

            <CustomInput
                value={inputValue} // valor atual do input
                onChangeText={setInputValue} // função chamada ao mudar o texto
                placeholder={"Senha"} // Placeholder
                secureTextEntry={true}
                keyboardType='default'
            />
            
            <CustomButtom title={"Teste"} action={() => alert(inputValue)} />

            <Timetable weekday="Segunda Feira" data={testData} />

            <GradeTable weekday="Programação para dispositivos móveis" data={testData2} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
