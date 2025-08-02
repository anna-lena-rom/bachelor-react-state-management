import { useTranslation } from '../../hooks/useTranslation';
import { languageStore, Person, personStore } from '../../state/mobxStore';
import { observer } from 'mobx-react-lite';

export const MobXEntryList = observer(() => {
  const list = personStore.list;
  const t = useTranslation();

  return (
    <div>
      {list.length === 0 ? (
        <p>{languageStore.t.listEmpty}</p>
      ) : (
        <ul>
          {list.map((p: Person) => (
            <li key={p.id}>
              {p.name} {p.lastName}, {p.age}, {p.plz}, {p.street}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
