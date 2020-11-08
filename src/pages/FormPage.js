import React, { useState, useContext } from 'react';
/*import { ThemeContext } from '../ThemeContext'*/

export const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [color, setColor] = useState('');

/*  const theme = useContext(ThemeContext);*/

  return (
    <form

      >
      <h3>Please enter imformation</h3>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Fav Color"
          value={color}
          onChange={e => setColor(e.target.value)} />
      </div>
      <button onClick={e => {
        alert(`
          Your name if ${name},
          email is ${email},
          and color is ${color}
        `);
        e.preventDefault();
      }}>Submit</button>
    </form>
  )
}
/*style={{
  backgroundColor: theme === 'dark' ? 'black' : 'white',
  color: theme === 'dark' ? 'white' : 'black'
}}
*/
