import * as C from './styles';
import { useState } from 'react';
import { Item } from '../../types/item';

import { FaTrash } from 'react-icons/fa'

type Props = {
  item: Item;
  onRemove: (listId: string) => void;
  onDone: (isDone: boolean) => void;
}

export const ListItem = ({item, onRemove, onDone}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  const BtnDoneTask = () => {
    onDone(isChecked) 
  }
  const BtnRemoveTask = () => {
    onRemove(item.id);
  }

  return (
    <C.Container done={isChecked}>
      <input 
      type="checkbox" 
      checked={isChecked}
      onChange={e => setIsChecked(e.target.checked)}
      onClick={BtnDoneTask}
      />

      <label>{item.name}</label>

      <C.Button 
        onClick={BtnRemoveTask}>
        <FaTrash />
      </C.Button>
          
    </C.Container>
  )
}