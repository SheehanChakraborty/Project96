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
      <Text style={styles.titleText}>Story Books</Text>
      
      <Anchor href="https://sherlock-holm.es/stories/pdf/a4/1-sided/cano.pdf" title="
The Complete Canon by Sir Arthur Conan Doyle
"></Anchor>
       <Anchor href="https://antilogicalism.com/wp-content/uploads/2018/04/gullivers-travels.pdf" title="Gulliver's Travels by Jonathan Swift"></Anchor>
        <Anchor href="https://document.desiringgod.org/the-pilgrim-s-progress-en.pdf?ts=1446648353" title="The Pilgrim's Progress by John Bunyan"></Anchor>
         <Anchor href="https://www.planetebook.com/free-ebooks/the-time-machine.pdf" title="The Time Machine By H. G. Wells"></Anchor>

          <Anchor href="https://www.planetebook.com/free-ebooks/great-expectations.pdf" title="Great Expectations By Charles Dickens"></Anchor>
           <Anchor href="https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf" title="Pride and Prejudice By Jane Austen"></Anchor>
            <Anchor href="https://www.planetebook.com/free-ebooks/les-miserables.pdf" title="Les Miserables By Victor Hugo
"></Anchor>
             <Anchor href="https://www.planetebook.com/free-ebooks/a-tale-of-two-cities.pdf" title="A Tale of Two Cities By Charles Dickens "></Anchor>
              <Anchor href="https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf" title="The Great Gatsby By F. Scott Fitzgerald"></Anchor>
               <Anchor href="https://www.planetebook.com/free-ebooks/heart-of-darkness.pdf" title="Heart of Darkness By Joseph Conrad"></Anchor>

      

 
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