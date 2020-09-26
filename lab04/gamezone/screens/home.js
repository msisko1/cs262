import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {
            title: 'Super Mario Sunshine',
            rating: 4.3,
            body: 'Super Mario Sunshine is a Mario action-adventure 3D platformer released for the Nintendo GameCube. It follows Super Mario 64, and is the second 3D Mario platformer.',
            developer: 'Nintendo',
            critic: 'GameSpot',
            key: '1'
        },
        {
            title: 'Ninja Gaiden',
            rating: 4.2,
            body: 'Ninja Gaiden, released in Japan as Ninja Ryūkenden and as Shadow Warriors in Europe, is a side-scrolling cinematic action-platforming video game.',
            developer: 'Tecmo',
            critic: 'IGN',
            key: '2'
        },
        {
            title: 'Street Fighter',
            rating: 4.4,
            body: 'Street Fighter is a 1987 arcade game developed by Capcom. It is the first competitive fighting game produced by the company and the first installment in the Street Fighter series.',
            developer: 'Capcom',
            critic: 'FanByte',
            key: '3'
        },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}