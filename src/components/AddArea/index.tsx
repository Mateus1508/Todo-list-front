import { useState, KeyboardEvent } from 'react';
import * as C from './styles'

import { MdOutlinePlaylistAdd } from 'react-icons/md'


type Props = {
  onEnter: (taskName: string) => void;
}

export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState('');
  
  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }
  const handleBtnPress = () => {
    if(inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }
  return ( 
    <C.Container>
      <button onClick={handleBtnPress}> <MdOutlinePlaylistAdd /> </button>

      <input 
      type="text" 
      placeholder="Adicione uma tarefa"
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      onKeyUp={handleKeyUp}
      />
    </C.Container>
   );
}
 
