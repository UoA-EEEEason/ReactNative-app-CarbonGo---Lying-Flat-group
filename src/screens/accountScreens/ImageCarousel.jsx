import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';
import {
    actualScreenWidth,
    hp,
    wp,
} from '../../utils/dimensions';

const ImageCarousel = ({ items }) => {
    const imageWidth = actualScreenWidth - wp(15);
    const spacing = wp(5); // The spacing between images
    console.log('items:',items)

    return (
        <FlatList
            data={items}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={[styles.slide, { marginLeft: index == 0 ? wp(5) : 0 }]}>
                    <Image source={{ uri: item }} resizeMode="cover" style={styles.image} />
                </View>
            )}
            snapToInterval={imageWidth + spacing} // Ensures that the flatlist stops on each image
            decelerationRate="fast" // Adjusts how quickly the scrolling decelerates after the user lets go
        />
    );
};

const styles = StyleSheet.create({
    slide: {
        height: hp(40),
        width: actualScreenWidth - wp(15), // Set the width of each slide
        marginRight: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
});

export default ImageCarousel;