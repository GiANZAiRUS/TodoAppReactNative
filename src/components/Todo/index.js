import React from 'react'
import { Container, Button, Modal } from '../common'
import { View, TextInput, Text, ScrollView } from 'react-native'
import TodoItem from '../TodoItem'
import TodoFilter from '../TodoFilter'
import styles from './styles'

const Index = ({
    onChange,
    onSubmit,
    onToggle,
    onFilter,
    toDos,
    filter,
    modalVisible,
    toggleModal,
    toggleEdit,
    onEdit,
    onDelete,
    data
}) => {

    return (
        <>
        <Container>
            <Modal visible={modalVisible} onOkay={onDelete} onCancel={toggleModal}>
                <Text>Are you sure you want to delete task?</Text>
            </Modal>
            <TodoFilter filter={filter} onFilter={onFilter} />
                {toDos?.length > 0 ?
                    (
                    <ScrollView style={styles.scrollview}>
                    {toDos.map(item => ( <TodoItem key={item.id} {...item} onToggle={onToggle} onEdit={onEdit} toggleEdit={toggleEdit} toggleModal={toggleModal} /> ))}
                    </ScrollView>
                    )
                    :
                    <View style={styles.center}>
                        <Text>No Data Available</Text>
                    </View>
                }
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='Add todo'
                        onChangeText={onChange('add')}
                        value={data?.add}
                    />
                    <Button title="Add" onPress={onSubmit} style={styles.addBtn} />
                </View>
        </Container>

        </>
    )
}

export default Index