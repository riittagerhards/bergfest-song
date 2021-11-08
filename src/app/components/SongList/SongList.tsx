import React, { FormEvent, useState } from 'react';
import styles from './SongList.module.css';

type SongListFormProps = {
  fullUserName: string;
};

function SongListForm({ fullUserName }: SongListFormProps): JSX.Element {
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      please add some songs
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
      <input className={styles.submitbutton} type="submit" value="GO" />
    </form>
  );
}

export default SongListForm;
