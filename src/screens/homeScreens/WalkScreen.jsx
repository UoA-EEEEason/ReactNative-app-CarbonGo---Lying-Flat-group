import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWalk, postWalk } from '../../redux/actions/carbonFootprint';
import firestore from '@react-native-firebase/firestore';
import useHealthData from './../../hooks/useHealthData';
import { useNavigation } from '@react-navigation/native';

const WalkScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    // test for walk data
    const [date, setDate] = useState(new Date());
    const { steps, flights, distance } = useHealthData(date);

    // get auth state from redux
    const uid = useSelector(state => state.auth.uid);

    // get weight value from redux
    const walkWeight = useSelector(state => state.weight).weight.walk ?? 0;

    // fetch walk
    useEffect(() => {
        dispatch(fetchWalk(uid));
    }, [dispatch]);
    const lastWalk = useSelector(state => state.carbonFootprint).walkConsumption ?? 0;
    // console.log('last lastWalk:', lastWalk)

    const handleSubmitPress = async () => {
        const createdAt = firestore.Timestamp.now();
        const consumptionNumber = steps * walkWeight + lastWalk;
        console.log('consumptionNumber:', consumptionNumber)
        dispatch(postWalk(uid, consumptionNumber, createdAt));
        navigation.navigate('Home')
    };

    return (
        <ImageBackground
            source={require('./../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <StatusComponent title={'Walk'} />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image
                        source={require('./../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text
                        style={styles.createText}
                    >
                        {steps.toString()}
                    </Text>
                    {/* <Text style={styles.createText}>
                        Submit your Electricity carbon footprint
                    </Text> */}
                    <Text style={styles.input}>
                        Points you will earn: {steps.toString() ? steps.toString() * walkWeight : ''}
                    </Text>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleSubmitPress}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default WalkScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '60%',
        height: undefined,
        aspectRatio: 1,
    },
    createText: {
        fontSize: 16,
        width: '80%',
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        backgroundColor: 'transparent',
        width: '80%',
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 5,
    },
    loginButton: {
        width: '80%',
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: COLORS.buttonGreen,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.white,
    },
    uploadPhotoText: {
        fontSize: 12,
        width: '80%',
        color: COLORS.black,
        marginBottom: 5,
    },
    photoButton: {
        width: '80%',
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: COLORS.buttonGreen,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    uploadedImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
});
