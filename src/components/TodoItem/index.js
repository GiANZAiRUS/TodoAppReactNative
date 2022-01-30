import React, {useState, useEffect} from 'react'
import { Button } from '../common';
import { View, Text, TextInput } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './styles'

const TodoItem = ({ id, todo, complete, edit, onToggle, toggleModal, toggleEdit, onEdit}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}> 
                {edit ? 
                (<TextInput style={styles.txtInput} value={todo} onChangeText={onEdit(id)} />):
                (
                    <>
                    <BouncyCheckbox
                        onPress={() => onToggle(id)}
                        fillColor='green'
                        isChecked={complete}
                    />
                    <Text style={[complete?{textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : null, { paddingRight: 30, color: 'black'}]}>
                        {todo}
                    </Text>
                    </>
                )}
            </View>
            <View style={styles.btnContainer}>
                {edit ?
                (
                    <Button title="Save" onPress={() => toggleEdit(id)} style={{ flex: 1}} />
                ):
                (
                    <>
                        <Button title="Edit" onPress={() => toggleEdit(id)} style={{ flex: 1}} />
                        <Button title="Delete" onPress={() => toggleModal(id, 'Delete')} style={{ flex: 1}} />
                    </>
                )
                }
            </View>
        </View>
    )
}

export default TodoItem