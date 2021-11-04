import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import RegistrationForm from './components/Form/RegistrationForm';
import Image from './components/Image/Image';

function App(): JSX.Element {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  console.log(selectedName);

  return (
    <main className={styles.container}>
      <div>
        <Title text="Bergfest" />
        <RegistrationForm onSelectParticipantName={setSelectedName} />
      </div>
      <Image
        url="https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="party pineaple with sunglasses and party hat"
      />
    </main>
  );
}

export default App;
