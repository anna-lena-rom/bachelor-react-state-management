import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson, RootState } from '../../state/reduxStore';
import { translations } from '../../i18n/translations';
import { useSelector } from 'react-redux';

export const ReduxForm = () => {
  const dispatch = useDispatch();

  const language = useSelector((state: RootState) => state.language.value);
  const t = translations[language];

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [plz, setPlz] = useState('');
  const [street, setStreet] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPerson({
        name, lastName, age, plz, street,
        id: ''
    }));
    setName('');
    setLastName('');
    setAge(0);
    setPlz('');
    setStreet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{t.form.title}</h2>
      <input placeholder={t.form.name} value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder={t.form.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input placeholder={t.form.age} type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <input placeholder={t.form.plz} value={plz} onChange={(e) => setPlz(e.target.value)} />
      <input placeholder={t.form.street} value={street} onChange={(e) => setStreet(e.target.value)} />
      <button type="submit">{t.form.add}</button>
    </form>
  );
};
