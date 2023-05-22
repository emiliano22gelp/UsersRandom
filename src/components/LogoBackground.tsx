import React, { useState, useEffect } from 'react'
import { useWindowDimensions } from 'react-native';
import { Image} from 'react-native';
import { styles } from '../theme/appTheme';

interface Dimensions {
  top: number,
  right: number
}

const LogoBackground = () => {

  const [ dimensions, setDimensions ] = useState<Dimensions>();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height){
        setDimensions({
          top: 180,
          right: 650
        })
    } else {
      setDimensions({
        top: 620,
        right: 200
      })
    }
  }, [width, height])

  return (
    <>
        <Image 
            source={ require('../assets/circle.png') }
            style={ styles.logoBackground }
        />
        <Image 
            source={ require('../assets/circle.png') }
            style={{
                ...styles.logoBackground,
                top: dimensions?.top,
                right: dimensions?.right
            }}
        />
    </>
  )
}

export default LogoBackground;
