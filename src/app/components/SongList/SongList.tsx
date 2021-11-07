import React, { FormEvent, useState } from 'react';
import styles from './SongList.module.css';

function SongListForm(): JSX.Element {
  const [fullUserName, setFullUserName] = useState('');
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

  /*async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const selectFullUserName = await response.json();
    setFullUserName(selectFullUserName);
  }

  const fullUserNameOptions = userName.map((userName) => (
    <option key={userName.id}>
      {userName.firstName} {userName.lastName}
    </option>
  ));*/

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      please type your name and add some songs
      <input
        className={styles.textinput}
        type="text"
        placeholder="your name"
        value={fullUserName}
        onChange={(event) => setFullUserName(event.target.value)}
      />
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

/*      <select
        className={styles.select}
        onClick={handleSelectClick}
        onChange={(event) => onSelectFullUserName(event.target.value)}
      >
        <option>select your name</option>
        {fullUserNameOptions}
      </select>*/
