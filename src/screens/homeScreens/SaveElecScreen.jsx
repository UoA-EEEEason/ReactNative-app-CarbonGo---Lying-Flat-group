import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import ImagePicker from 'react-native-image-picker';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElectricity, postElectricity } from '../../redux/actions/carbonFootprint';
import firestore from '@react-native-firebase/firestore';
import useHealthData from './../../hooks/useHealthData';

const TextInputComponent = ({ label, onChangeText, style, value }) => {
    const customTheme = {
        colors: {
            primary: 'black',
        },
    };

    return (
        <TextInput
            label={label}
            value={value}
            mode="flat"
            onChangeText={onChangeText}
            style={style}
            theme={customTheme}
        />
    );
};

const SaveElecScreen = () => {
    const [photo, setPhoto] = useState(null);
    const [electricityConsumption, setFoodConsumption] = useState('');
    const dispatch = useDispatch();

    // test for walk data
    // const [date, setDate] = useState(new Date());
    // const { steps, flights, distance } = useHealthData(date);

    // get auth state from redux
    const uid = useSelector(state => state.auth.uid);

    // get weight value from redux
    const electricityWeight = useSelector(state => state.weight).weight.electricy ?? 0;

    // fetch electricy
    useEffect(() => {
        dispatch(fetchElectricity(uid));
    }, [dispatch]);
    const lastElectricity = useSelector(state => state.carbonFootprint).electricityConsumption ?? 0;
    // console.log('last lastElectricity:', lastElectricity)

    const handleSubmitPress = async () => {
        const createdAt = firestore.Timestamp.now();
        const consumptionNumber = Number(electricityConsumption) * electricityWeight + lastElectricity;
        // console.log('consumptionNumber:', consumptionNumber)
        dispatch(postElectricity(uid, consumptionNumber, createdAt));
      };

    const handleElectricityConsumptionChange = value => {
        setFoodConsumption(value);
    };

    const handleChoosePhoto = async () => {
        const options = {
            noData: true,
        };

        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission Required',
                    message: 'App needs access to your storage to download Photos',
                },
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                return;
            }
        }

        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                setPhoto(response.uri);
            }
        });
    };

    return (
        <ImageBackground
            source={require('./../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <StatusComponent title={'Electricity carbon footprint'} />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image
                        source={require('./../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    {/* <Text style={styles.createText}>
                        {steps.toString()}
                    </Text> */}
                    <Text style={styles.createText}>
                        Submit your Electricity carbon footprint
                    </Text>
                    <Text style={styles.input}>
                        Points you will earn: {electricityConsumption ? electricityConsumption * electricityWeight : ''}
                    </Text>
                    <TextInputComponent
                        style={styles.input}
                        label={'The amount of electricity you use'}
                        onChangeText={handleElectricityConsumptionChange}
                        value={electricityConsumption}
                    />
                    <Text style={styles.uploadPhotoText}>Please upload your photo</Text>
                    <TouchableOpacity
                        style={styles.photoButton}
                        onPress={handleChoosePhoto}>
                        <Text style={styles.buttonText}>Upload Photo</Text>
                    </TouchableOpacity>
                    {photo && (
                        <Image source={{ uri: photo }} style={styles.uploadedImage} />
                    )}
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

export default SaveElecScreen;

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
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
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
