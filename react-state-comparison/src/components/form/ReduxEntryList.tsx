import { useSelector } from 'react-redux';
import { RootState } from '../../state/reduxStore';
import { useTranslation } from '../../hooks/useTranslation';

export const ReduxEntryList = () => {
  const list = useSelector((state: RootState) => state.person.list);
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
