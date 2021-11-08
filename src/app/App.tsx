import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import SongListForm from './components/SongList/SongList';
import Image from './components/Image/Image';

function App(): JSX.Element {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  let content;

  if (selectedName) {
    content = <SongListForm fullUserName={selectedName} />;
  } else {
    content = <RegistrationForm onSelectParticipantName={setSelectedName} />;
  }

  useEffect(() => {
    document.title = selectedName ? `Hi ${selectedName}` : 'Bergfest';
  });

  return (
    <main className={styles.container}>
      <div>
        <Title text={selectedName ? `Welcome ${selectedName}` : 'Bergfest'} />
        {content}
      </div>
      <Image
        url="https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="party pineaple with sunglasses and party hat"
      />
    </main>
  );
}

export default App;
