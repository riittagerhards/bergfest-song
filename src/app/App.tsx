import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Image from './components/Image/Image';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div>
        <Title text="Bergfest" />
        <Form />
      </div>
      <Image
        url="https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="party pineaple with sunglasses and party hat"
      />
    </main>
  );
}

export default App;
