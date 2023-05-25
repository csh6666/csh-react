import React, { useState } from 'react';
const App = () => {
   const [collapsed, setCollapsed] = useState(false);
   const [menuName, setMeneName] = useState('Option 1');
   const toggleCollapsed = () => {
      setCollapsed(!collapsed);
   };
   const onClick = (e) => {
      console.log('click ', e);
      setMeneName(e.domEvent.target.innerText);
   };
   return (
      <div className='App-main'>
         
      </div>
   );
};
export default App;