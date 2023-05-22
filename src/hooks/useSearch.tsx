import { useEffect, useState } from 'react';
import { User } from '../interfaces/userApi.interfaces';

export const useSearch = ( usersState: User[] ) => {

    const [ term, setTerm ] = useState<string>('');
    const [userFiltered, setUserFiltered] = useState<User[]>([])


    const updateTerm = (value: string) => {
        setTerm(value);
      }
    
      const getLenght = () => {
        return term === '' ? usersState.length : userFiltered.length; 
      }
    
      useEffect(() => {    
        if ( term.length === 0 ) {
            return setUserFiltered([]);
        }
        if ( isNaN( Number(term) ) ) {
            setUserFiltered(
                usersState.filter( 
                    (user) => user.login.toLocaleLowerCase()
                        .includes( term.toLocaleLowerCase() )
                )
            );
        } else {
            const userById = usersState.find(user => user.id === Number(term));
            setUserFiltered(
                ( userById ) ? [userById] : []
            );
        }
    }, [term])



    return {
        updateTerm,
        getLenght,
        term,
        userFiltered
    }

}