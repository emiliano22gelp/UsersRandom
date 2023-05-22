import { useEffect, useState } from 'react';
import moment from 'moment';
import { useWindowDimensions } from 'react-native';

export const useValidation = () => {

    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [date, setDate] = useState<string>(moment(new Date()).format('DD/MM/yyyy hh:mm A'));
    const [topDateContainer, setTopDateContainer] = useState<number | undefined>();
    const { width, height } = useWindowDimensions();

    const validaciones = ( value: string ): boolean => {
        if (value.includes(",") || value.includes(".") || value.includes(" ") || isNaN(Number(value))){
            setError(true);
            setErrorMessage("Por favor ingrese un numero ENTERO");
            return false;
        }
        if (value === ""){
            setError(true);
            setErrorMessage("La cantidad de Usuarios es REQUERIDA");
            return false;
        }
        if (Number(value) < 1 || Number(value) > 30){
            setError(true);
            setErrorMessage("La cantidad debe ser MAYOR que 0 y MENOR que 30 ");
            return false;
        }
        return true
    }
 
    const closeAlert = () => {
      setError(false);
      setErrorMessage("");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment(new Date()).format('DD/MM/yyyy hh:mm A'));
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (width > height){
            setTopDateContainer(10);
        } else {
            setTopDateContainer(100);
        }
    }, [width, height])

    return {
        validaciones,
        error,
        errorMessage,
        closeAlert,
        topDateContainer,
        date
    }

}