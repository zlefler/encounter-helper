import React from 'react';

const MyContext = React.createContext();
function MyProvider(props) {
  // put functions etc here
  return (
    <MyContext.Provider
      value={
        {
          // put names of props here
        }
      }
    >
      {props.children}
    </MyContext.Provider>
  );
}

const MyConsumer = MyContext.Consumer;

export default { MyProvider, MyConsumer };
