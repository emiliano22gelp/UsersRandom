import { useState } from 'react';
import usersApi from '../api/usersApi';
import { User } from '../interfaces/userApi.interfaces';

export const useUsers = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const getUsers = async ( value: number ) => {
        setIsLoading(true);
        const usersPromise = await usersApi.get<User[]>('/users');
        return usersPromise.data.slice(0, value);
    }

    const fullcharge = () => {
        setIsLoading( false );
    }

    return {
        isLoading,
        getUsers,
        fullcharge
    }

}