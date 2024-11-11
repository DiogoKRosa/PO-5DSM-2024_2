import { useEffect } from 'react';
import { loadAsync, useFonts } from 'expo-font';
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useColorScheme } from '@/components/useColorScheme';
import { useAuth } from '@/hooks/auth';
import { FontAwesome } from '@expo/vector-icons';
import TabLayout from './(app)/(tabs)/_layout';
import React from 'react';
// import '@/assets/fonts/Montserrat-Medium.ttf'
// import '@/assets/fonts/Montserrat-Bold.ttf'
// import '@/assets/fonts/Montserrat-SemiBold.ttf'
export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'sign-in',
};

SplashScreen.preventAutoHideAsync();

function RootLayoutNavigation() {
    const colorScheme = useColorScheme();
    const [fontsLoaded, setFontsLoaded] = React.useState(false);
    const { handleIsUserAlreadyLoggedIn, isLogged } = useAuth();

    const loadFonts = async () => {
        try {
            await loadAsync({
                Montserrat: require('@/assets/fonts/Montserrat-Regular.ttf'),
            });
        } catch (e) {
            console.log(e);
        } finally {
            setFontsLoaded(true);
        }
        await SplashScreen.hideAsync();
    };

    useEffect(() => {
        loadFonts();
    }, []);

    if (!fontsLoaded) return null;
    return (
        <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack initialRouteName={isLogged ? '(app)/(tabs)' : 'sign-in'}>
                <Stack.Screen
                    name='sign-in'
                    options={{ presentation: 'card', title: 'Login' }}
                />
                <Stack.Screen
                    name='sign-up'
                    options={{ presentation: 'card', title: 'Cadastro' }}
                />
                <Stack.Screen
                    name='(app)/(tabs)'
                    options={{ presentation: 'card', headerShown: false }}
                />
            </Stack>
        </ThemeProvider>
    );
}

export default function RootLayout() {
    return <RootLayoutNavigation />;
}
