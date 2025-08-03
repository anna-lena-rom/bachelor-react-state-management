import { useAtom } from 'jotai';
import { personListAtom } from '../../state/JotaiAtom';
import { useTranslation } from '../../hooks/useTranslation';

export const JotaiEntryList = () => {
  const [list] = useAtom(personListAtom);
  const t = useTranslation();

  return (
    <div>
      {list.length === 0 ? (
        <p>{t.listEmpty}</p>
      ) : (
        <ul>
          {list.map((p) => (
            <li key={p.id}>
              {p.name} {p.lastName}, {p.age}, {p.plz}, {p.street}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};