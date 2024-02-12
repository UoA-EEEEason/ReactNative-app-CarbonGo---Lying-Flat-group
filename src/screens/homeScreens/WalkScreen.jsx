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
import { fetchWalk, postWalk, postPoints } from '../../redux/actions/carbonFootprint';
import { postTotalWalk, postTotalPoints, fetchTotalWalk } from '../../redux/actions/total';
import firestore from '@react-native-firebase/firestore';
import useHealthData from './../../hooks/useHealthData';
import { useNavigation } from '@react-navigation/native';
import PointsComponent from './../../components/PointsComponent';

const WalkScreen = () => {
    const [walkConsumption, setFoodConsumption] = useState('');
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

    // fetch last total points
    const lastPoints = useSelector(state => state.carbonFootprint).points ?? 0;

    const lastTotal = useSelector(state => state.total).totalEmission ?? 0;
    const lastTotalWalk = useSelector(state => state.total).walkTotalConsumption ?? 0;

    const handleSubmitPress = async () => {
        const createdAt = firestore.Timestamp.now();
        const consumptionNumber = steps * walkWeight + lastWalk;
        const diffPoints = Number(steps) * walkWeight;
        const points = lastPoints + diffPoints;
        // console.log('consumptionNumber:', consumptionNumber)
        // console.log('lastPoints:', lastPoints)
        // console.log('points:', points)

        // caculation for total data
        const totalNumber = Number(walkConsumption) * walkWeight + lastTotalWalk;
        const totalEmission = lastTotal + diffPoints;
        // console.log('totalNumber:', totalNumber)
        // console.log('totalEmission:', totalEmission)
        // console.log('lastTotalElectricity:', lastTotalWalk)

        dispatch(postWalk(uid, consumptionNumber, createdAt));
        dispatch(postPoints(uid, points, createdAt, 'walk', diffPoints));
        dispatch(postTotalWalk(totalNumber, createdAt));
        dispatch(postTotalPoints(totalEmission, createdAt));
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
                    <PointsComponent points={steps ? (steps * walkWeight).toFixed(2) : '0'}/>
                    {/* <Text style={styles.input}>
                        Points you will earn: {steps ? (steps * walkWeight).toFixed(2) : '0'}
                    </Text> */}
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
