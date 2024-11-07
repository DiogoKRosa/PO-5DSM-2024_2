import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import UserImage from '@/components/UserImage';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return (
        <FontAwesome
            size={24}
            style={{ marginBottom: -3 }}
            {...props}
        />
    );
}

export default function TabLayout() {
    const colorScheme = useColorScheme();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Horários',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            name='calendar'
                            color={color}
                        />
                    ),
                    headerRight: () => (
                        <Link
                            href='/modal'
                            asChild
                        >
                            <Pressable>
                                {({ pressed }) => (
                                    <UserImage
                                        image={require('../../assets/images/profile-image_default.png')}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name='grades'
                options={{
                    title: 'Notas parciais',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            name='bookmark'
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='absences'
                options={{
                    title: 'Faltas parciais',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            name='star-half'
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='warnings'
                options={{
                    title: 'Avisos',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            name='exclamation'
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Configurações',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            name='cog'
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
