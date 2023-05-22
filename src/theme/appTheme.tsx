import { StyleSheet } from "react-native";
import colors from "./colorsTheme";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    logoBackground: {
        position: 'absolute',
        width: 250,
        height: 250,
        top: -30,
        right: -80,
        opacity: 0.2
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5
    },
    blackButton: {
        marginTop: 10,
        flexDirection: 'row',
        height: 45,
        width: 200,
        backgroundColor: colors.button,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    buttonText: {
        color: colors.text,
        fontSize: 18
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    cardContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 1,
        backgroundColor: colors.card,
        borderRadius: 10,
        borderColor: colors.card,
        borderWidth: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
      },
      cardTitle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 10,
        color: colors.text,
      },
      cardImage: {
        width:80,
        height: 80,
        borderRadius: 40,
      },
      cardGeneral: {
        padding: 10
      },
      cardIcono: {
        flex: 1,
        alignItems: 'flex-end'
      },
      headerContainer: {
        flexDirection: 'row',
        backgroundColor: colors.header,
        alignItems: 'center',
        height: 70,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
      },
      headerIcon: {
          paddingLeft: 10
      },
      minicontainer: {
        flexDirection: 'row',
        backgroundColor: colors.text,
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        marginLeft: 20,
        paddingRight: 15,
    },
    followerInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
    imageFollower: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    loginFollower: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    idFollower: {
        fontSize: 16,
        opacity: 0.7
    },
    headerContainerUserDetail: {
      zIndex: 999,
      alignItems: 'center',
      borderBottomRightRadius: 1000,
      borderBottomLeftRadius: 1000,
  },
  backButtonUserDetail: {
      position: 'absolute',
      left: 20
  },
  userNameDetail: {
      color: colors.text,
      fontSize: 40,
      alignSelf: 'center'
  },
  userImageDetail: {
      width: 90,
      height: 90,
      borderRadius: 100
  },
  imageContainerUserDetail: {
      marginTop: 30
  },
  containerUserDetail: {
      marginHorizontal: 20,
      marginBottom: 40
  },
  titleUserDetail: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20
  },
  regularText: {
      fontSize: 19
  },
  loadingIndicatorUserInfo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  userInfoContainer: {
      flexDirection: 'column'
  },
  labelUserInfo: {
      fontSize: 23,
      marginTop: 10,
      fontWeight: 'bold',
      marginHorizontal: 20
  },
  containerFlatList: {
      marginTop: 5,
      marginBottom: 20
  },
  flatlistHorizontal: {
      marginTop: 10,
      height: 70
  },
  dateContainer: {
    position: 'absolute',
    height: 45,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.card,
    opacity: 0.5,
    borderRadius: 50,
    shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 3
      },
      shadowOpacity: 0.27,
      elevation: 6
  },
  input: {
    height: 60,
    width: 280,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    backgroundColor: colors.text,
    borderRadius: 20,
    opacity: 0.6
  },
  containerNotFound: {
    marginTop: 100,
    alignItems: 'center',
    padding: 50,
    backgroundColor: colors.card
  },
  spinnerTextStyle: {
    color: colors.button
  },
  containerHome: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#73174E',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  }
});