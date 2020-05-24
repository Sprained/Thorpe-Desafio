import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import { MaterialIcons } from '@expo/vector-icons'

import { Alert } from 'react-native';
import { Container, Back, Button, ButtonSing, ImagePic } from '../../Components/styles';

export default function ImageEditor(){
    const [image, setImage] = useState(null);

    useEffect(() => {
        getPermission();
    })

    const getPermission = async () => {
        if(Constants.platform.android || Constants.platform.ios){
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== 'granted'){
                alert('Sorry');
            }
        }
    }

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                allowsMultipleSelection: true,
                aspect: [ 4, 3 ],
                quality: 1
            })

            if(!result.cancelled) {
                setImage(result.uri);
            }
        } catch (error) {
            Alert.alert(error);
        }
    }

    const navigation = useNavigation();
    return(
        <Container>
            <Back
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name='arrow-back' size={20} color='#138A72' />
            </Back>
            
            <Button
                onPress={() => pickImage()}
            >
                <ButtonSing>Select an image</ButtonSing>
            </Button>

            <ImagePic source={{ uri: image }} />
        </Container>
    )
}