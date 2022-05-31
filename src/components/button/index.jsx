// імпортуємо реакт якщо використовуємо реакт компонент
import React from 'react';

// цей компонент використовується для навігації в реакті,
// якщо замість нього використати звичайний <a> - то сторінка перезавантажиться
import { Link } from "react-router-dom";

// імпортуємо стилі кнопки
import './style.css';

// описуємо наш компонент і одразу експортуємо
export default function(params){
  // якщо масив модифікаторів не вказано, то використовуємо пустий масив
  let modifiers = params.modifiers || [];

  // геннеруємо назви класів модифікаторів
  const className = `button ${modifiers.map(modifier => `button_${modifier}`).join(' ')}`;

  // описуємо рендер
  return (
    <div className={className}>
      {/* якщо в параметрах передано `link` генеруємо відповідний тег a */}
      {params.link && <Link to={params.link} />}
      {/* додаємо текст кнопки */}
      {params.text}
    </div>
  )
}
