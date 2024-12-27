//rnfs
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.Container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>
                Red
            </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>
                Green
            </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>
                Blue
            </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>
                Blue
            </Text>
        </View>
      </View>
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
    Container:{
        flex:1,
        flexDirection:'row',
        padding:4
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:20
    },
    cardOne:{
        backgroundColor:'#EF5354',   
    },
    cardTwo:{
        backgroundColor:'#50DBB4',   
    },
    cardThree:{
        backgroundColor:'#5DA3FA',   
    }

});