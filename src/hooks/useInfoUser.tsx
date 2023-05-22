import { useEffect, useState } from 'react';
import usersApi from '../api/usersApi';
import { RepoResponse, User, InfoResponse } from '../interfaces/userApi.interfaces';
import { useWindowDimensions } from 'react-native';

interface UserState {
    followers: User[];
    following: User[];
    repos: RepoResponse[];
    personalInfo: InfoResponse | null
}

interface DimensionsState {
    topText: number | null,
    heightContainer: number | null,
    widhtImage: number | null,
    heightImage: number | null
}

export const useInfoUser = ( login: string ) => {

    const { width, height } = useWindowDimensions();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ userState, setUserState ] = useState<UserState>({
        followers: [],
        following: [],
        repos: [],
        personalInfo: null
    });
    const [ dimensions, setDimensions ] = useState<DimensionsState>({
        topText: null,
        heightContainer: null,
        widhtImage: null,
        heightImage: null
    })


    const getInfo = async () => {
        
        const followersPromise = usersApi.get<User[]>(`/users/${login}/followers`);
        const followingsPromise = usersApi.get<User[]>(`/users/${login}/following`);
        const reposPromise = usersApi.get<RepoResponse[]>(`/users/${login}/repos`);
        const personalInfoPromise = usersApi.get<InfoResponse>(`/users/${login}`);
        
        const resps = await Promise.all([ 
            followersPromise, 
            followingsPromise, 
            reposPromise,
            personalInfoPromise
        ]);

        setUserState({
            followers: resps[0].data,
            following: resps[1].data,
            repos: resps[2].data.filter(elem => elem.private === false ),
            personalInfo: resps[3].data
        })

        setIsLoading( false );
    }

   
    useEffect(() => {
        getInfo();
    }, [])

    useEffect(() => {
        if(width > height){
            setDimensions({
                topText: 5,
                heightContainer: 190,
                widhtImage: 90,
                heightImage: 90
            })
        } else {
            setDimensions({
                topText: 40,
                heightContainer: 370,
                widhtImage: 150,
                heightImage: 150
            })
        }
    }, [ width, height ])

    return {
        ...userState,
        ...dimensions,
        isLoading
    }

}