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
    const imageWidth = actualScreenWidth - wp(50);
    const spacing = wp(12.5); // The spacing between images

    return (
        <FlatList
            data={items}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={[
                    styles.slide, 
                    { marginLeft: index === 0 ? wp(25) : 0 }, 
                    { marginRight: index === (items.length-1) ? wp(25) : wp(12.5) }
                    ]}>
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
        height: wp(70),
        width: actualScreenWidth - wp(50), // Set the width of each slide
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
});

export default ImageCarousel;