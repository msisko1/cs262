import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Header({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={globalStyles.icon} />
        </View>
    );
};
