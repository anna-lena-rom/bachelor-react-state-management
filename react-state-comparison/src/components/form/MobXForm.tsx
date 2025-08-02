import { useForm } from '../../hooks/useForm';
import { observer } from 'mobx-react-lite';
import { languageStore, personStore } from '../../state/mobxStore';
import { useTranslation } from '../../hooks/useTranslation';

export const MobXForm = observer(() => {
  const t = useTranslation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        personStore.addPerson();
      }}
    >
      <h2>{languageStore.t.form.title}</h2>
      <input
        placeholder={languageStore.t.form.name}
        value={personStore.name}
        onChange={(e) => personStore.setName(e.target.value)}
      />
      <input
        placeholder={languageStore.t.form.lastName}
        value={personStore.lastName}
        onChange={(e) => personStore.setLastName(e.target.value)}
      />
      <input
        type="number"
        placeholder={languageStore.t.form.age}
        value={personStore.age}
        onChange={(e) => personStore.setAge(Number(e.target.value))}
      />
      <input
        placeholder={languageStore.t.form.plz}
        value={personStore.plz}
        onChange={(e) => personStore.setPlz(e.target.value)}
      />
      <input
        placeholder={languageStore.t.form.street}
        value={personStore.street}
        onChange={(e) => personStore.setStreet(e.target.value)}
      />
      <button type="submit">{languageStore.t.form.add}</button>
    </form>
  );
});
