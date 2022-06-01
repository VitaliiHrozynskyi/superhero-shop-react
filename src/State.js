import React, {useState} from 'react';

export const Context = React.createContext();

export default function (params) {
  const [state, setState] = useState({
    authorized: false,
    menu: ['Some', 'Menu', 'Items'],
  });
  return (<Context.Provider value={{state, setState}}>{params.children}</Context.Provider>)
}
