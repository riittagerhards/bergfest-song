import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <img
        className={styles.image}
        src="https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="party pineaple"
      />
      <div>
        <Title />
        <Form />
      </div>
    </main>
  );
}

export default App;
