import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
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
      />
      <input className={styles.textinput} type="text" placeholder="last name" />
      <input className={styles.submitbutton} type="submit" value="party on!" />
    </form>
  );
}

export default Form;
