import React from 'react'
import { View, TouchableOpacity, Text} from 'react-native'
import { Button } from '../common'
import styles from './styles'

const TodoFilter = ({
    onFilter,
    filter
}) => {

    const getBgColor = (x) => {
        if (filter === x) {
            return "green"
        }
    }

    return (
        <View style={{ flexDirection: 'row', height: 40, borderWidth: 1, borderRadius: 10}}>
            <Button title="All" onPress={() => onFilter('All')} style={[styles.center, styles.btnAll, {backgroundColor: getBgColor('All')}]} />
            <Button title="Finished" onPress={() => onFilter('Finished')} style={[styles.center,{backgroundColor: getBgColor('Finished')}]} />
            <Button title="Unfinished" onPress={() => onFilter('Unfinished')} style={[styles.center, styles.btnUnfinished, {backgroundColor: getBgColor('Unfinished')}]} />
        </View>
    )
}

export default TodoFilter