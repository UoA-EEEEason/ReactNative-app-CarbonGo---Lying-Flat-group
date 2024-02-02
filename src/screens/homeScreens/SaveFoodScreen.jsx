import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
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
import { postFood, postPoints, fetchFood } from '../../redux/actions/carbonFootprint';
import { postTotalFood, postTotalPoints, fetchTotalFood } from '../../redux/actions/total';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import FoodComponent from './../../components/FoodComponent';

const SaveFoodScreen = () => {
    const [foodConsumption, setFoodConsumption] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [photo, setPhoto] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    // handle FoodComponents value
    const [prevValues, setPrevValues] = useState({});
    const updateTotalValue = (id, newValue) => {
        setPrevValues(prev => ({ ...prev, [id]: newValue }));
    };
    useEffect(() => {
        const newTotal = Object.values(prevValues).reduce((acc, curr) => acc + curr, 0);
        setFoodConsumption(newTotal);
    }, [prevValues]); 

    // get auth state from redux
    const uid = useSelector(state => state.auth.uid);

    // get weight value from redux
    const foodWeight = useSelector(state => state.weight).weight.food ?? 0;
    const meatWeight = useSelector(state => state.weight).weight.meat ?? 0;
    const breadWeight = useSelector(state => state.weight).weight.bread ?? 0;
    const fruitWeight = useSelector(state => state.weight).weight.fruit ?? 0;
    const milkWeight = useSelector(state => state.weight).weight.milk ?? 0;

    // console.log('meatWeight:',meatWeight)
    // console.log('breadWeight:',breadWeight)
    // console.log('fruitWeight:',fruitWeight)
    // console.log('milkWeight:',milkWeight)

    const foodItems = [
        {
            id: 1,
            weight: meatWeight,
            image: require('./../../assets/images/meat.png'),
        },
        {
            id: 2,
            weight: breadWeight,
            image: require('./../../assets/images/bread.png'),
        },
        {
            id: 3,
            weight: fruitWeight,
            image: require('./../../assets/images/fruit.png'),
        },
        {
            id: 4,
            weight: milkWeight,
            image: require('./../../assets/images/milk.png'),
        },
        // ... more items
    ];

    // fetch food
    useEffect(() => {
        dispatch(fetchFood(uid));
    }, [dispatch]);
    const lastFood = useSelector(state => state.carbonFootprint).foodConsumption ?? 0;
    // console.log('last foodConsumption:', lastFood)

    // fetch last total points
    const lastPoints = useSelector(state => state.carbonFootprint).points ?? 0;

    const lastTotal = useSelector(state => state.total).totalEmission ?? 0;
    const lastTotalFood = useSelector(state => state.total).foodTotalConsumption ?? 0;

    const handleSubmitPress = async () => {
        const createdAt = firestore.Timestamp.now();
        const consumptionNumber = Number(foodConsumption) + lastFood;
        const diffPoints = Number(foodConsumption);
        const points = lastPoints + diffPoints;
        // console.log('consumptionNumber:', typeof(consumptionNumber))
        // console.log('lastPoints:', typeof(lastPoints))
        // console.log('points:', typeof(points))

        // caculation for total data
        const totalNumber = Number(foodConsumption) + lastTotalFood;
        const totalEmission = lastTotal + diffPoints;
        // console.log('totalNumber:', totalNumber)
        // console.log('totalEmission:', totalEmission)
        // console.log('lastTotalElectricity:', lastTotalFood)

        await handleUploadPhoto();
        dispatch(postFood(uid, consumptionNumber, createdAt));
        dispatch(postPoints(uid, points, createdAt, 'food', diffPoints));
        dispatch(postTotalFood(totalNumber, createdAt));
        dispatch(postTotalPoints(totalEmission, createdAt));
        navigation.navigate('Home')
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

                    {foodItems.map(item => (
                        <FoodComponent
                            key={item.id}
                            id={item.id}
                            weight={item.weight}
                            image={item.image}
                            onUpdateTotalValue={updateTotalValue}
                        />
                    ))}

                    {/* <Text style={styles.points}>
                        Points you will earn: {foodConsumption ? foodConsumption * foodWeight : ''}
                    </Text>
                    <TextInputComponent
                        style={styles.input}
                        label={'The weight of the food you buy'}
                        onChangeText={handleFoodConsumptionChange}
                        value={foodConsumption}
                    /> */}

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
        width: '40%',
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
    points: {
        backgroundColor: 'transparent',
        color: COLORS.black,
        width: '80%',
        marginBottom: 20,
        borderRadius: 5,
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
    foodComponentContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
});