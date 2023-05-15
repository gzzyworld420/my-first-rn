import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';



class Card extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.card}>
                <Image style={styles.img} source={{uri: this.props.img}}/>
                <Text>{this.props.nombre}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    img:{
        width: 200,
        height: 200
    }
})

export default Card;

