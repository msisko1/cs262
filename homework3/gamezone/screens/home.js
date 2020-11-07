import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pacific-tundra-20696.herokuapp.com/scores')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => Math.random().toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.name}</Text>
                                <Text style={globalStyles.titleText}>Game: {item.gameid}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}