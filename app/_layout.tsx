import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
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
    const [loaded, error] = useFonts({
        //Alterem a fonte
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });
    const { handleIsUserAlreadyLoggedIn, isLogged } = useAuth();
    const handleSplashScreen = async () => {
        await handleIsUserAlreadyLoggedIn();
        await SplashScreen.hideAsync();
    };
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) handleSplashScreen();
    }, [loaded]);

    if (!loaded) return null;

    return <RootLayoutNavigation userAlreadyLogged={isLogged} />;
}
