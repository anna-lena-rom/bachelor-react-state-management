import { useForm } from '../../hooks/useForm';
import { useTranslation } from '../../hooks/useTranslation';

export const Form = () => {
  const {
    name,
    setName,
    lastName,
    setLastName,
    age,
    setAge,
    plz,
    setPlz,
    street,
    setStreet,
    addPerson,
  } = useForm();

  const t = useTranslation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPerson();
      }}
    >
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