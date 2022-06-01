// це "ТУПИЙ" компонент, він нічого не знає про логіку, і просто рендерить HTML використовуючи параметри

// імпортуємо реакт якщо використовуємо реакт компонент
import React from 'react';

// імпортуємо стилі
import './style.css';

// імпортуємо компонент кнопки, зверніть увагу,
// що усі реакт компоненти ЗАВЖДИ починаються з великої літери
import Button from '../button';

export default function(params){
  return (
    <div className="header">
      <div className="header__logo"><img src="http://placehold.jp/150x50.png"/></div>
      <div className="header__menu">{params.menu.join(' ')}</div>
      {/* Використовуємо компонент кнопки, зверніть увагу, що параметри кнопки залежать від параметрів які передані компоненту хідер */}
      {params.authorized ? 'A' : 'U'}
      <div className="header__controls">
        <Button
          modifiers={['big']}
          text={ params.authorized ? "unauthorize" : 'authorize' }
          onClick={ params.onClick }
        />
      </div>
    </div>
  )
}
