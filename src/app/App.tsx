import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.title}>Bergfest</h1>
        <form className={styles.form}>
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
          <input className={styles.submitbutton} type="submit" />
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
