import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import shortid from 'shortid';

import Note from './src/components/Note';

const App = () => {

  const [notes, setNotes] = React.useState([]);

  const [title, setTitle] = React.useState();
  const [text, setText] = React.useState();

  const deleteNote = (id) => {
    setNotes((currentNotes) => {
      return currentNotes.filter(note => note.id !== id);
    });
  }

  const addNote = () => {
    console.log('Agregar');

    const note = { title, text };

    note.id = shortid.generate();

    const newNote = [...notes, note]
    setNotes(newNote);

    setTitle('');
    setText('');
  }

  return (
    <>      
        <Text style={styles.title}>Notas</Text>

        <Input
          placeholder = 'Título'
          inputContainerStyle = {styles.titleTextInput}
          inputStyle = {{paddingHorizontal: 7.5}}
          onChangeText={(text) => setTitle(text)}
        />

        <TextInput
          multiline
          style = {styles.textTextInput}
          onChangeText = {(text) => setText(text)}
        />

        <Button
          title = 'Agregar nota'
          type = 'clear'
          titleStyle = {{fontSize: 17}}
          containerStyle = {{marginHorizontal: 60}}
          onPress = {() => addNote()}
        />

        <Text style = {styles.titleNotes}>Notas registradas</Text>
        
        <FlatList
          data = {notes}
          renderItem = {({item}) => <Note note = {item} deleteNote = {deleteNote}/> }
          keyExtractor = { (notes) => String(notes.id) }
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />    
        
        <View style = {{marginBottom: 20}}/>
    </>       

  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,  
    color: '#F07F0F'  
  },
  titleTextInput: {
    marginHorizontal: 10, 
    borderColor: '#AFAFAF'
  },
  titleNotes: {
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F07F0F'
  },
  textTextInput: {
    borderColor: '#AFAFAF',
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 17,
  },
  btnAdd: {
    marginHorizontal: 100,
    paddingVertical: 10,
    
  },
  textAdd: {
    textAlign: 'center'
  }
});

export default App;
