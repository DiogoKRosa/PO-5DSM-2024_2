import React from 'react';
import { StyleSheet, Image } from 'react-native';

interface UserImageProps {
    image: string | number;
}

const defaultImage = require('@/assets/images/profile-image_default.png');

const UserImage: React.FC<UserImageProps> = ({ image }) => {
    const source =
        typeof image === 'number'
            ? image
            : image
              ? { uri: image }
              : defaultImage;

    return (
        <Image
            source={source}
            style={styles.image}
            resizeMode='center'
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 36,
        height: 36,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#F1F1F1',
    },
});

export default UserImage;
