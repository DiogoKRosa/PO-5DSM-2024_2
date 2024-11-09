import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { View } from 'react-native';

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
                headerShown: true,
                headerTintColor: '#1A3E78',
                tabBarLabelStyle: {
                    fontFamily: 'Montserrat',
                    fontWeight: '500',
                    fontSize: 10
                },
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarInactiveTintColor:
                    Colors[colorScheme ?? 'light'].tabIconDefault,
                headerTitleStyle: {
                    fontFamily: 'Montserrat',
                    fontWeight: '500'
                },
                tabBarStyle: {
                    backgroundColor: '#D2E0FB',
                    borderTopWidth: 4,
                    borderColor: '#D2E0FB',
                },
                headerStyle: {
                    backgroundColor: '#D2E0FB',
                },
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
                        <View style={{
                            marginRight: 12
                        }}>
                            <FontAwesome5
                                name='user-circle'
                                size={24}
                                color='#1A3E78'

                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name='grades'
                options={{
                    title: 'Notas',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            name='bookmark'
                            color={color}
                        />
                    ),
                    headerRight: () => (
                        <View style={{
                            marginRight: 12
                        }}>
                            <FontAwesome5
                                name='user-circle'
                                size={24}
                                color='#1A3E78'

                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name='absences'
                options={{
                    title: 'Faltas parciais',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name='list-check'
                            size={size}
                            color={color}
                        />
                    ),
                    headerRight: () => (
                        <View style={{
                            marginRight: 12
                        }}>
                            <FontAwesome5
                                name='user-circle'
                                size={24}
                                color='#1A3E78'

                            />
                        </View>
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
                    headerRight: () => (
                        <View style={{
                            marginRight: 12
                        }}>
                            <FontAwesome5
                                name='user-circle'
                                size={24}
                                color='#1A3E78'

                            />
                        </View>
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
