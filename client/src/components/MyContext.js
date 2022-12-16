import React, { useState } from 'react';

const MyContext = React.createContext();

function MyProvider(props) {
  const [abilities, setAbilities] = useState({});
  const [skills, setSkills] = useState({});
  return (
    <MyContext.Provider
      value={{
        abilities,
        setAbilities,
        skills,
        setSkills,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
