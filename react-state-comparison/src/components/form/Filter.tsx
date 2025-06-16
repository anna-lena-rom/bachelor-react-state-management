import { useAtom } from 'jotai';
import { filterAtom } from '../../state/JotaiAtom';
import { useTranslation } from '../../hooks/useTranslation';

export const Filter = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  const t = useTranslation();

  return (
    <input
      placeholder={t.filterPlaceholder}
      value={filter}
      onChange={(e) => setFilter(e.target.value.toLowerCase())}
    />
  );
};