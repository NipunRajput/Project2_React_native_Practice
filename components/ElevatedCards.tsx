import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View >
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                Me
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                To
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                Scroll
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                More...
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                😁
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#FFFFFF',
        paddingHorizontal:65
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:8,
        margin:8

    },
    cardElevated:{
        backgroundColor:'#FF9933',
        elevation:9,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:1,
        shadowRadius:2

    }
})