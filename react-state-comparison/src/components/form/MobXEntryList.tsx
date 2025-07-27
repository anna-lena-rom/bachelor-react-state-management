import { useTranslation } from '../../hooks/useTranslation';
import { personStore } from '../../state/mobxStore';

export const MobXEntryList = () => {
    const list = personStore.list;
    const t = useTranslation();
    return (
        <div>
            {list.length === 0 ? (
                <p>{t.listEmpty}</p>
            ) : (
                <ul>
                    {list.map((p: any) => (
                        <li key={p.id}>
                            {p.name} {p.lastName}, {p.age}, {p.plz}, {p.street}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
