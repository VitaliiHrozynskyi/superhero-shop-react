// імпортуємо реакт якщо використовуємо реакт компонент
import React from 'react';

// імпортуємо компонент Хідеру, зверніть увагу,
// що усі реакт компоненти ЗАВЖДИ починаються з великої літери

// тут я імпортую з папки components, для зручності я створив там файл
// index.js в якому реекспортував усі компоненти з папки components
import { Header } from '../../components'

// а можна імпортувати напряму з компонента header
// import Header from '../../components/header'

export default function (){
  return (
    <div>
      <Header/>
    </div>
  )
}
