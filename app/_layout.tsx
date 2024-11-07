import {
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    useFonts,
} from '@expo-google-fonts/montserrat';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/components/useColorScheme';
import { useAuth } from '@/hooks/auth';

SplashScreen.preventAutoHideAsync();

function RootLayoutNavigation({
    userAlreadyLogged,
}: {
    userAlreadyLogged: boolean;
}) {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack initialRouteName={userAlreadyLogged ? '(tabs)' : 'login'}>
                <Stack.Screen
                    name='modal'
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen
                    name='login'
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen
                    name='register'
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen
                    name='(tabs)'
                    options={{ headerShown: false }}
                />
            </Stack>
        </ThemeProvider>
    );
}

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        // Para FontAwesome, você ainda pode manter como estava:
        ...FontAwesome.font,
    });

    const { handleIsUserAlreadyLoggedIn, isLogged } = useAuth();

    const handleSplashScreen = async () => {
        await handleIsUserAlreadyLoggedIn();
        await SplashScreen.hideAsync();
    };

    useEffect(() => {
        if (fontError) throw fontError; // Lidar com erros de fonte
    }, [fontError]);

    useEffect(() => {
        if (fontsLoaded) handleSplashScreen();
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <RootLayoutNavigation userAlreadyLogged={isLogged} />;
}
