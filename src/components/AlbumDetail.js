import React from 'react';
import {View , Text , Image , Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({Albums}) => {

    const { title , artist , thumbnail_image , image , url} = Albums;

return(
    <Card>

        <CardSection>
            <View style = {styles.thumbnailContainerStyle}>
                <Image 
                style = {styles.thumbnailStyles}
                source = {{uri: thumbnail_image}} 
                /> 
            </View>
            <View style = {styles.HeaderContentStyles}>
                <Text style = {styles.HeaderTextStyles}>{title}</Text>
                <Text style = {styles.textStyles}>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image 
            style = {styles.ImageStyle}
            source = {{uri: image}} 
            />
        </CardSection>

        <CardSection>
            <Button onPress = {()=> Linking.openURL(url)}>
                Buy Now
            </Button>
        </CardSection>

    </Card>
);
};

const styles = {
    textStyles: {
        color: '#000'
    },
    HeaderTextStyles: {
        color: '#000',
        fontSize: 20
    },
    HeaderContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyles: {
        height: 50,
        width: 50
    }, 
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    ImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
