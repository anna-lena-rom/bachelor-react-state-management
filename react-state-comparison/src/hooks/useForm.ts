import { useAtom } from 'jotai';
import {
  nameAtom,
  lastNameAtom,
  ageAtom,
  plzAtom,
  streetAtom,
  personListAtom,
} from '../state/JotaiAtom';
import { v4 as uuidv4 } from 'uuid';

export const useForm = () => {
  const [name, setName] = useAtom(nameAtom);
  const [lastName, setLastName] = useAtom(lastNameAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [plz, setPlz] = useAtom(plzAtom);
  const [street, setStreet] = useAtom(streetAtom);
  const [list, setList] = useAtom(personListAtom);

  const addPerson = () => {
    setList([
      ...list,
      {
        id: uuidv4(),
        name,
        lastName,
        age,
        plz,
        street,
      },
    ]);
    setName('');
    setLastName('');
    setAge(0);
    setPlz('');
    setStreet('');
  };

  return {
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
  };
};
