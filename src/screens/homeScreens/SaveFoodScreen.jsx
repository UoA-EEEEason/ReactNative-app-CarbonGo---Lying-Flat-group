import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { COLORS } from '../../constants/color/color';
import StatusComponent from './../../components/StatusComponent';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { postFood, fetchFood } from '../../redux/actions/carbonFootprint';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

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

const SaveFoodScreen = () => {
    const [foodConsumption, setFoodConsumption] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [photo, setPhoto] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    // get auth state from redux
    const uid = useSelector(state => state.auth.uid);

    // get weight value from redux
    const foodWeight = useSelector(state => state.weight).weight.food ?? 0;

    // fetch food
    useEffect(() => {
        dispatch(fetchFood(uid));
    }, [dispatch]);
    const lastFood = useSelector(state => state.carbonFootprint).foodConsumption ?? 0;
    // console.log('last foodConsumption:', lastFood)

    const handleSubmitPress = async () => {
        const createdAt = firestore.Timestamp.now();
        const consumptionNumber = Number(foodConsumption) * foodWeight + lastFood;
        // console.log('consumptionNumber:', consumptionNumber)
        await handleUploadPhoto();
        dispatch(postFood(uid, consumptionNumber, createdAt));
        navigation.navigate('Home')
    };

    const handleFoodConsumptionChange = value => {
        setFoodConsumption(value);
    };

    const handleChoosePhoto = () => {
        const options = {
            noData: true,
        };

        const selectPhoto = response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                if (response.assets && response.assets.length > 0) {
                    const selectedPhoto = response.assets[0];
                    setPhoto(selectedPhoto);
                }
            }
        };

        Alert.alert(
            'Upload Photo',
            'Choose an option',
            [
                {
                    text: 'Camera',
                    onPress: () => launchCamera(options, selectPhoto),
                },
                {
                    text: 'Gallery',
                    onPress: () => launchImageLibrary(options, selectPhoto),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancelled'),
                    style: 'cancel',
                },
            ],
            { cancelable: true },
        );
    };

    const handleUploadPhoto = async () => {
        if (photo) {
            setIsLoading(true);
            const uploadUri = Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri;
            const filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
            const storageRef = storage().ref(`photos/${filename}`);

            try {
                await storageRef.putFile(uploadUri);
                Alert.alert('Photo Uploaded', 'Your photo has been uploaded to Firebase storage.');
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <ImageBackground
            source={require('./../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <StatusComponent title={'Food'} />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image
                        source={require('./../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.createText}>
                        Submit your Food carbon footprint
                    </Text>
                    {/* here should be a drop down bar to select food type */}
                    {/* <TextInputComponent
                        style={styles.input}
                        label={'The kind of food you buy'}
                    /> */}
                    <Text style={styles.input}>
                        Points you will earn: {foodConsumption ? foodConsumption * foodWeight : ''}
                    </Text>
                    <TextInputComponent
                        style={styles.input}
                        label={'The weight of the food you buy'}
                        onChangeText={handleFoodConsumptionChange}
                        value={foodConsumption}
                    />
                    <Text style={styles.uploadPhotoText}>
                        Please upload your photo
                    </Text>
                    {photo && (
                        <Image
                            source={{ uri: photo.uri }}
                            style={styles.uploadedImage}
                        />
                    )}
                    <TouchableOpacity
                        style={styles.photoButton}
                        onPress={handleChoosePhoto}>
                        <Text style={styles.buttonText}>Upload Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleSubmitPress}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
            {isLoading && (
                <ActivityIndicator size="large" color={COLORS.buttonGreen} />
            )}
        </ImageBackground>
    );
};

export default SaveFoodScreen;

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
        color: COLORS.black,
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