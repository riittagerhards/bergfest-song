import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div>
        <Title />
        <form className={styles.form}>
          <select>
            <option>Select participant</option>
            <option>Alice P</option>
            <option>Alice S</option>
            <option>Manuel F</option>
            <option>Riitta</option>
          </select>
          or create new
          <input
            className={styles.textinput}
            type="text"
            placeholder="first name"
          />
          <input
            className={styles.textinput}
            type="text"
            placeholder="last name"
          />
          <input
            className={styles.submitbutton}
            type="submit"
            value="register"
          />
        </form>
      </div>
      <img
        className={styles.image}
        src="https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="party pineaple"
      />
    </main>
  );
}

export default App;
