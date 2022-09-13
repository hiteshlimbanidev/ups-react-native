import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';

const CustomersScreens = () => {
    const tw = useTailwind();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={tw('text-blue-500')}>CustomersScreens</Text>
        </SafeAreaView>
    )

}

export default CustomersScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
});