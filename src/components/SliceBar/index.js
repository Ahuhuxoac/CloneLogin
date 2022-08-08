import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

export const SlicerBar = (props) => {
    return(
        <View style={styles.root}>
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.logo}
                        source={require('../../image/logo.png')}
                        />
                        <Image style={styles.avatar}
                        source={require('../../image/avatar.png')}
                        />
                        <Text style={styles.textbold}>James B.</Text>
                    </View>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#2D3748',
        height: '100%',
        width: '100%'
    },
    logo: {
        marginTop: 20,
        height: 45,
        width: 45,
        borderRadius: 45,
        marginLeft: 26,
    },
    avatar: {
        height: 65,
        width:65,
        marginTop:21,
        marginLeft: 45
    },
    textbold: {
        fontSize: 24,
        fontWeight: '900',
        lineHeight: 24,
        color: '#ffffff',
        marginTop: 21,
        marginLeft: 45,
    },
    section: {
        flex: 1,
        marginTop: 24,
    },
})