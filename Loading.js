import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>NUGU Play 를 활용한 오늘의 미세먼지 서비스</Text>
            <Text style={styles.subtitle}>아리야, 오늘의 미세먼지를 알려줘</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 180,
        backgroundColor: "#FDF6AA"
    },
    title:{
        color: "#2c2c2c",
        fontSize: 18
    },
    subtitle:{
        color: "#2c2c2c",
        fontSize: 25
    }
});