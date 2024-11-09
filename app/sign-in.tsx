import { Button, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, useNavigation, useRouter } from 'expo-router';
export default function SignIn() {
    const {replace} = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <Button
                title='Login'
                onPress={() => {
                    replace('/(tabs)');
                }}
            />
            <Link
                style={{ color: 'white' }}
                href={'/(tabs)'}
            >
                Register
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
