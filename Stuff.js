import React, {Component} from 'react';
import {View,Text,StyleSheet,ImageBackground,Image}from 'react-native';

export default class Stuff extends Component {
     render(){
         return(
             <View >
             <ImageBackground source={('https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')}>
                 <View style = {styles.titleBar}>
                 
                  <Text style={styles.titleText}> DESIGNED AND DEVELOPED BY SHEEHAN CHAKRABORTY</Text>
                 </View>
               
</ImageBackground>
             </View>
         )
     }
}
var styles = StyleSheet.create({
   
     titleText:{
       fontSize:30,
       fontWeight:"bold",
       color:"black",
       textAlign:'center'

     },
    
})
         