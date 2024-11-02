import { useRouter } from 'expo-router';
import React from 'react';
export function useAuth() {
    const router = useRouter();
    const [isLogged, setIsLogged] = React.useState(false);

    const handleIsUserAlreadyLoggedIn = async () => {
        setIsLogged(true);
    };
    const handleLogin = async () => {
        setIsLogged(true);
        router.push('/(tabs)/');
    };
    const handleRegister = async () => {
        return true;
    };
    return {
        isLogged,
        handleIsUserAlreadyLoggedIn,
        handleLogin,
        handleRegister,
    };
}
