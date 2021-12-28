import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking,ImageBackground} from 'react-native';
class Anchor extends React.Component{
  _handlePress=()=>{
    console.log("Linked Clicked For " + this.props.href)
    Linking.openURL(this.props.href)
    this.props.onPress && this.props.onPress()
  }
  render(){
    return(
      
      <Button title={this.props.title} onPress={this._handlePress}></Button>
      
      
    )
  }
}
export default class  Example   extends React.Component{
  render(){
    return(
      
      <View style={{marginTop:40}}>
      <ImageBackground source={('https://static.onecms.io/wp-content/uploads/sites/28/2017/05/blue0517.jpg')}>
      <Text style={styles.titleText}>NCERT(CBSC) BOOKS</Text>
      
      <Anchor href="https://freehomedelivery.net/wp-content/uploads/2016/12/NCERT-Class-8-History.pdf" title="HISTORY CLASS 8 BOOK"></Anchor>
      
      <Anchor href="https://freehomedelivery.net/wp-content/uploads/2016/12/NCERT-Class-8-Political-Science.pdf" title="CIVICS CLASS 8 BOOK "></Anchor>
      <Anchor href="https://freehomedelivery.net/wp-content/uploads/2016/12/NCERT-Class-8-Geography.pdf" title="GEOGRAPHY CLASS 8 BOOK "></Anchor>
      <Anchor href="https://freehomedelivery.net/wp-content/uploads/2016/12/NCERT-Class-8-Science.pdf" title="SCIENCE CLASS 8 BOOK "></Anchor>
      <Anchor href="https://freehomedelivery.net/wp-content/uploads/2016/12/NCERT-Hindi-Class-8-Hindi-Part-1.pdf" title="HINDI CLASS 8 BOOK(2ND LANGUAGE) "></Anchor>
      <Anchor href="https://freehomedelivery.net/wp-content/uploads/2016/11/NCERT-Class-8-English-Part-1.pdf" title="ENGLISH CLASS 8 BOOK "></Anchor>
 
      </ImageBackground>
      </View>
    )

  }
}
var styles = StyleSheet.create({
   titleText:{
       fontSize:40,
       fontWeight:"bold",
       color:"BLACK",
       textAlign:'center'
     },
})