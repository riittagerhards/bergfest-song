import React, { useState } from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <form className={styles.form}>
      <select className={styles.select}>
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
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        className={styles.textinput}
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      ergebnis: {firstName} {lastName}
      <input className={styles.submitbutton} type="submit" value="party on!" />
    </form>
  );
}

export default Form;
