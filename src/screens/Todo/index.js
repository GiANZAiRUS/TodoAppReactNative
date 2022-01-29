import React, { useState, useEffect, useRef } from 'react'
import TodoComponent from '../../components/Todo'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Todo = () => {
    const [toDoList, setToDoList] = useState([])
    const [data, setData] = useState({})
    const [filter, setFilter] = useState('All')
    const [filteredData, setFilteredData] = useState([])
    const [visible, setVisible] = useState(false)
    const isInitialMount = useRef(true)

    useEffect(() => {
        if (isInitialMount.current) {
            getLocalToDos()
            isInitialMount.current = false
        }else{
            setLocalToDos()
        }
        
    },[toDoList])

    const getLocalToDos = async () => {
        let localToDos = await AsyncStorage.getItem('toDoList')
        localToDos = JSON.parse(localToDos)

        if (localToDos === null || localToDos === undefined) return

        setToDoList(localToDos)
    }
    const setLocalToDos = async () => {
        await AsyncStorage.setItem('toDoList', JSON.stringify(toDoList))
    }

    const handleToggle = id => {
        let obj = toDoList.find(e => e.id === id)
            obj['complete'] = !obj.complete
        let arr = toDoList.filter(toDo => toDo.id !== id)
            arr = [...arr, obj]
            arr = arr.sort((a,b) => a.id -b.id)
        let complete = filter==='Finished'?true:false
        let arrFiltered = filteredData.filter(toDo => toDo.id !== id && toDo.complete === complete)
            arrFiltered = arrFiltered.sort((a,b) => a.id-b.id)
        setFilteredData(arrFiltered)
        setToDoList(arr)
    }

    const handleFormData = name => value => {
        setData({...data, [name]: value})
    }
    const handleSubmit = () => {
        let test = []
        if (data.add === null || data.add === '') return
        toDoList.forEach((e, i) => { test.push(e.id) })
        let id = test.length>0?Math.max.apply(null, test)+1:1
        let arr = [...toDoList, {id, todo: data.add, complete: false, edit: false}]
        let complete = filter === 'Finished' ? true : false
        let arrFiltered = arr.filter(toDo => toDo.complete === complete)
            arrFiltered = arrFiltered.sort((a,b) => a.id - b.id)
        setToDoList(arr)
        setFilteredData(arrFiltered)
        setData({...data, add: null})
    }

    const handleModal = (id, view) => {
        setVisible(!visible)

        if (id && view) {
            setData({id, view})
        }
    }

    const handleEditToggle = (id) => {
        // console.log(id)
        let obj = toDoList.find(e => e.id === id)
            obj['edit'] = !obj.edit
        let arr = toDoList.filter(toDo => toDo.id !== id)
            arr = [...arr,obj]
            arr = arr.sort((a,b) => a.id - b.id)
        setToDoList(arr)
    }

    const handleEdit = id => value => {
        let obj = toDoList.find(e => e.id === id)
            obj['todo'] = value
        let arr = toDoList.filter(toDo => toDo.id !== id)
            arr = [...arr, obj]
            arr = arr.sort((a,b) => a.id - b.id)
        setToDoList(arr)
    }

    const handleDelete = () => {
        let arr = toDoList.filter(toDo => toDo.id !== data.id)
            arr = arr.sort((a,b) => a.id - b.id)
        let complete = filter === 'Finished' ? true : false
        let arrFiltered = filteredData.filter(toDo => toDo.id !== data.id && toDo.complete === complete)
            arrFiltered = arrFiltered.sort((a,b) => a.id - b.id)
        setFilteredData(arrFiltered)
        setToDoList(arr)
        setVisible(!visible)
    }

    const handleFilter = (filter) => {
        setFilter(filter)
        if (filter === 'All') return

        let complete = filter === 'Finished' ? true : false
        let arr = toDoList.filter(toDo => toDo.complete === complete)
            arr = arr.sort((a,b) => a.id - b.id)
        setFilteredData(arr)
    }

    return (
        <TodoComponent
            onChange={handleFormData}
            onSubmit={handleSubmit}
            onToggle={handleToggle}
            onFilter={handleFilter}
            onDelete={handleDelete}
            toggleModal={handleModal}
            toggleEdit={handleEditToggle}
            onEdit={handleEdit}
            toDos={filter==="All"?toDoList:filteredData}
            filter={filter}
            modalVisible={visible}
            data={data}
        />
    )
}

export default Todo;