import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const Note = ({note, deleteNote}) => {

    return(
        <View style = {[styles.container, styles.line]}>
            <Text style = {styles.title}>{note.title}</Text>
            <Text style = {styles.text}>{note.text}</Text>
            <Icon
                raised
                name='trash'
                type='font-awesome'
                color='#f50'
                onPress={() => deleteNote(note.id)} 
                containerStyle = {styles.delete}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 5,
    },
    line: {        
        borderBottomWidth: 1,
        borderColor: '#AFAFAF',
        marginHorizontal: 15 
    },
    title: {
        fontSize: 22.5,
        fontWeight: 'bold',
        color: '#595454'
    },
    text: {
        fontSize: 18,
    },
    delete: {
        marginHorizontal: 280,
        marginTop: -52.5
    },
});

export default Note;