import React from 'react';

const MyContext = React.createContext();
function MyProvider(props) {
  let abilities = {};
  let skills = {};
  return (
    <MyContext.Provider
      value={{
        abilities,
        skills,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

const MyConsumer = MyContext.Consumer;

export default { MyProvider, MyConsumer };
