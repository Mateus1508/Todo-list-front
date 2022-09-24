import * as C from './styles';
import { useState } from 'react';
import { Item } from '../../types/item';

type Props = {
  item: Item;
  onRemove: (listId: number) => void;
}

export const ListItem = ({item, onRemove}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleRemoveTask = () => {

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
        onClick={handleRemoveTask}>
        Excluir
      </C.Button>
    </C.Container>
  )
}