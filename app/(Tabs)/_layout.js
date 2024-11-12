import { Tabs } from "expo-router";

import { Home,InfoIcon } from "../../components/Icons";

export default function TabsLayout(){
    return(
        <Tabs 
            screenOptions={{
                headerShown:false,
                tabBarStyle:{backgroundColor:'black', },
                tabBarActiveTintColor: '#00b3e5'
            }}

        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon:({color})=> <Home color={color} />

                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon:({color})=> <InfoIcon color={color} />

                }}
            />

        </Tabs>
    )
}