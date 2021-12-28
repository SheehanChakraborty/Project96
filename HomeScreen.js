import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image}from 'react-native';

export default class HomeScreen extends Component {
     render(){
         return(
            <View style= {styles.container}>
                   
                  <SafeAreaView style={styles.androidSafeArea}/> 
                  <ImageBackground source={require('../BOOKIMG1.jfif')}>
    
                  <View style = {styles.titleBar}>
                  <Text style={styles.titleText}> Book Finder</Text>
                  </View>
                  <View style = {styles.titleBar}>
                  <Text style={styles.titleText1}> Find Your Book</Text>
                  </View>
                 
                   
                  
                                    <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("Ncert")
                  }>
                  <Text style={styles.routeText}>NCERT BOOKS</Text>
                    
                  </TouchableOpacity>
                    
                           <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("Storybooks")
                  }>
                  <Text style={styles.routeText}>STORY BOOKS</Text>
                    >
                  </TouchableOpacity>
                  
                   <TouchableOpacity style={styles.routeCard}
                   onPress = {() =>
                   this.props.navigation.navigate("Stuff")}>
                  <Text style={styles.routeText}>About Us</Text>
               
                  
                    
                  </TouchableOpacity>
                  
                 </ImageBackground>
             </View>

         )
     }
}

var styles = StyleSheet.create({
     container:{
       flex:1
     } ,
     androidSafeArea:{
          marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
     },
     routeCard:{
     flex:0.30,
     marginLeft:30,
     marginRight:30,
     marginTop:100,
     borderRadius:120,
     backgroundColor:'#FFA500',
     
   
     },
     titleText:{
       fontSize:40,
       fontWeight:"bold",
       color:"#FFA500",
       textAlign:'center'
     },
     backgroundImage:{
       flex:1,
       resizeMode:'cover'
     },
     routeText:{ 
       
         fontSize:25,
       fontWeight:"bold",
       textAlign:'center',
       color:"black",
       marginRight:20,
       marginTop:60
      
      
     },
    
     iconImage:{
       position:"absolute",
       height:160,
       width:100,
       resizeMode:"contain",
       right:0,
       top:-60
     },
     titleText1:{
       fontSize:30,
       fontWeight:"normal",
       color:"#FFA500",
       textAlign:'center'
     },
})