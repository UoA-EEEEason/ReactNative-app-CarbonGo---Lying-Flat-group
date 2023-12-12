import React, { useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native';
import { COLORS } from '../../constants/color/color';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
    login,
    logout,
} from '../../redux/actions/auth';

const TestsScreen = () => {
    const navigation = useNavigation();

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const dispatch = useDispatch();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleLogin = async () => {
        dispatch(login('aa@aa.com', 'aaaaaa'));
        console.log('isAuthenticated: ', isAuthenticated)
    };

    const handleLogout = async () => {
        dispatch(logout());
        console.log('isAuthenticated: ', isAuthenticated)
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <ImageBackground
            source={require('./../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Image
                        source={require('./../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.welcomeText}>Test Screen</Text>
                    {(!user) ? <Text style={styles.userText}>No user</Text> : <Text style={styles.userText}>Welcome {user.email}</Text>}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Demo')}
                    >
                        <Text style={styles.buttonText}>Component Demo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Welcome')}
                    >
                        <Text style={styles.buttonText}>Login & Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Home pages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Account')}
                    >
                        <Text style={styles.buttonText}>News pages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Account')}
                    >
                        <Text style={styles.buttonText}>Account pages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogout}
                    >
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default TestsScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight || 0,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '80%',
        height: undefined,
        aspectRatio: 1,
    },
    welcomeText: {
        fontSize: 30,
        color: COLORS.grew,
        textAlign: 'center',
    },
    userText: {
        fontSize: 20,
        color: COLORS.grew,
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 70,
        paddingVertical: 10,
        marginHorizontal: '10%',
        marginTop: 5,
        marginBottom: 5,
        width: '80%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
    },
});
