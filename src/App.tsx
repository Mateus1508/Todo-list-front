import { useState, useEffect, useReducer } from 'react';
import * as C from './App.styles';
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'
import GlobalStyle from './globalStyles';

const App = () => {
  const [list, setList] = useState<Item[]>([])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    localStorage.setItem('list', JSON.stringify(newList))
    setList(newList)
  }
  const handleRemoveTask = (listId: number) => {
    localStorage.setItem('list', JSON.stringify(list));
    setList(list.filter(item => item.id !== listId));
  }

   useEffect(() => {
    const list = localStorage.getItem('list')
    
    if (typeof list === 'string'){
      if(list){
        setList(JSON.parse(list))
      }
    }
    },[])

  return (
    <C.Container>
      <C.Area>
        <GlobalStyle />
        <C.Header>Lista de Tarefas</C.Header>
          <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} onRemove={handleRemoveTask}/>
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
