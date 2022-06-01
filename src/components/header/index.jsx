// Це розумний компонент, він знає звідки беруться дані,
// зазвичай задача розумного компоненту, згенерувати параметри
// для тупого компонента


// імпортуємо реакт якщо використовуємо реакт компонент
import React, {useContext} from 'react';

// будемо отримувати дані з контексту
import {Context} from "../../State";

// імпортуємо "тупий" компонент
import Header from './component'


export default function(){

  // отримаємо поточний стан в контексті, та функцію для зміни стану
  const {state, setState} = useContext(Context);

  //зробимо функцію, що міняє стан авторизації на протилежний
  function onButtonClick() {
    setState({
      ...state,
      authorized: !state.authorized
    })
  }

  // рендеримо тупий компонент
  return (
    <Header
      menu={state.menu}
      onClick={onButtonClick}
      authorized={state.authorized}
    />
  )
}
