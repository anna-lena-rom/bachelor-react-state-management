import { useAtom } from 'jotai';
import { personListAtom, filterAtom } from '../../state/JotaiAtom';
import { useTranslation } from '../../hooks/useTranslation';

export const EntryList = () => {
  const [list] = useAtom(personListAtom);
  const [filter] = useAtom(filterAtom);
  const t = useTranslation();

  const filtered = list.filter(
    (p) =>
      p.name.toLowerCase().includes(filter) ||
      p.plz.toLowerCase().includes(filter)
  );

  return (
    <div>
      {filtered.length === 0 ? (
        <p>{t.listEmpty}</p>
      ) : (
        <ul>
          {filtered.map((p) => (
            <li key={p.id}>
              {p.name} {p.lastName}, {p.age}, {p.plz}, {p.street}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};