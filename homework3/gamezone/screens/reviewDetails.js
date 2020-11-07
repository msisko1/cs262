import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
    return (
        <View styles={globalStyles.container}>
            <Card>
                <Text>{route.params.name}</Text>
                <Text>Score: {route.params.score}</Text>
            </Card>
        </View>
    );
}
