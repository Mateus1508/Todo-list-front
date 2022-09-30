import * as C from './styles';
import { useState, SetStateAction } from 'react';
import { Item } from '../../types/item';

import { FaTrash } from 'react-icons/fa'

type Props = {
  item: Item;
  onRemove: (listId: string) => void;
  onDone: React.Dispatch<SetStateAction<boolean>>;
}

export const ListItem = ({item, onRemove, onDone}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const btnChangeCheck = () => {
    setIsChecked(item.done === false ? item.done = true : item.done = false )
    onDone(isChecked);
  }

  const BtnRemoveTask = () => {
    setIsChecked(item.done = false)
    onRemove(item.id);
  }

  return (
    <C.Container done={isChecked}>
      <input 
      type="checkbox" 
      checked={isChecked}
      onClick={btnChangeCheck}
      onChange={e => setIsChecked(e.target.checked)}
      />

      <label>{item.name}</label>

      <C.Button 
        onClick={BtnRemoveTask}>
        <FaTrash />
      </C.Button>
          
    </C.Container>
  )
}