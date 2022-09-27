import * as C from './styles';
import { useState } from 'react';
import { Item } from '../../types/item';

import { FaTrash } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'

type Props = {
  item: Item;
  onRemove: (listId: number) => void;
}

export const ListItem = ({item, onRemove}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const BtnRemoveTask = () => {
    onRemove(item.id);
  }

  return (
    <C.Container done={isChecked}>
      <input 
      type="checkbox" 
      checked={isChecked}
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