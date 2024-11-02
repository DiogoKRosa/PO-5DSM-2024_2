import { Button, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/hooks/auth';
import { Link } from 'expo-router';

export default function ModalScreen() {
    const { handleLogin } = useAuth();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <Button
                title='Login'
                onPress={handleLogin}
            />
            <Link
                style={{ color: 'white' }}
                href={'/register'}
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
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
