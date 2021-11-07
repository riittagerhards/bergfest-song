import React, { FormEvent, useState } from 'react';
import styles from './SongList.module.css';

type fullUserName = {
  id: number;
  firstName: string;
  lastName: string;
};

type fullUserNameProps = {
  onSelectedUserName: (fullUserName: string) => void;
};

function SongListForm({ onSelectedUserName }: fullUserNameProps): JSX.Element {
  const [fullUserName, setFullUserName] = useState<fullUserName[]>([]);
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullUserName: fullUserName,
        artist: artist,
        title: title,
      }),
    });
  }

  /* to get a selection of users*/
  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const selectFullUserName = await response.json();
    setFullUserName(selectFullUserName);
  }

  const fullUserNameOptions = fullUserName.map((userName) => (
    <option key={userName.id}>
      {userName.firstName} {userName.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      please select your name and add some songs
      <select
        className={styles.select}
        onClick={handleSelectClick}
        onChange={(event) => onSelectedUserName(event.target.value)}
      >
        <option>select your name</option>
        {fullUserNameOptions}
      </select>
      <input
        className={styles.textinput}
        type="text"
        placeholder="artist"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />
      <input
        className={styles.textinput}
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input className={styles.submitbutton} type="submit" value="PLAY" />
    </form>
  );
}

export default SongListForm;

/*<input
  className={styles.textinput}
  type="text"
  placeholder="your name"
  value={fullUserName}
  onChange={(event) => setFullUserName(event.target.value)}
/>*/
