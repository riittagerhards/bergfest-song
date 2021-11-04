import React, { FormEvent, useState } from 'react';
import styles from './Form.module.css';

type Participant = {
  firstName: string;
  lastName: string;
};

function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [disable, setDisable] = useState(false);
  const [selectedName, setSelectedName] = useState('');

  function handleChange(event) {
    setSelectedName(event.target.value);
    alert('Hi ' + selectedName);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    setDisable(true);
  }

  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const newParticipants = await response.json();
    setParticipants(newParticipants);
  }

  const participantOptions = participants.map((participant: Participant) => (
    <option>
      {participant.firstName} {participant.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select
        className={styles.select}
        onClick={handleSelectClick}
        onChange={handleChange}
      >
        <option>Select participant</option>
        {participantOptions}
      </select>
      or add your name
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
      <input
        disabled={disable}
        className={styles.submitbutton}
        type="submit"
        value="party on!"
      />
    </form>
  );
}

export default Form;
