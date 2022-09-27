import { useState } from 'react';
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
    setList(newList);
  }
  const handleRemoveTask = (listId: number) => {
      setList(list.filter(item => item.id !== listId))
    }

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
