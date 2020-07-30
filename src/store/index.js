import { atom } from 'recoil';
    
  export const worldState = atom({
    key: 'worldState', // unique ID (with respect to other atoms/selectors)
    default: { // default value (aka initial value)
      world: 'recoil',
    }, 
  });
