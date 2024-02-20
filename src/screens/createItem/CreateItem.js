import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Redux hooks
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//Components
import { AppInput, Button, AppLoader } from '../../components';

//Styles
import { styles } from './styles';
import fonts from '../../constants/Fonts';
import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';

import { createItem, updateItem } from '../../redux/todoSlice/todoSlice';

export const CreateItem = (props) => {
    const Item = props?.route?.params;

    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const [name, setName] = useState(Item?.title || '');
    const [description, setDescription] = useState(Item?.description || '');
    const [isLoading, setIsLoading] = useState(false);

    const [infoErr, setInfoErr] = useState('');
    const [nameErr, setNameErr] = useState('');

    const checkValidation = () => {
        let isValid = true;
        if (!name) {
            setNameErr('Title is required');
            isValid = false;
        }
        if (!description) {
            setInfoErr('Description is required');
            isValid = false;
        }
        if (isValid) {

            Item?.id ? updateTodo() : createTodo();
        }
    };

    const createTodo = async () => {
        const body = {
            title: name,
            description: description,
        };
        dispatch(createItem(body))
        props.navigation.goBack()
    };

    const updateTodo = async () => {
        const body = {
            title: name,
            description: description,
        };
        const payload = { id: Item?.id, title: name, description: description }

        dispatch(updateItem(payload))
        props.navigation.goBack()
    };

    const title = Item?.id ? "Update" : "Create"
    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ flex: 1, backgroundColor: Colors.white }}>
            <View style={styles.container}>
                <View style={styles.skipContainer}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()} >
                        <Text style={styles.skipText}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title} Item</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeader}>
                            Title <Text style={{ color: Colors.red }}>*</Text>
                        </Text>
                        <AppInput
                            value={name}
                            placeholder="Title..."
                            textInputStyle={styles.input}
                            onChangeText={text => {
                                setNameErr('');
                                setName(text);
                            }}
                            width={'100%'}
                            Error={nameErr == '' ? false : true}
                            errorMessage={nameErr}
                        />

                        <Text style={styles.inputHeader}>
                            Description <Text style={{ color: Colors.red }}>*</Text>
                        </Text>
                        <AppInput
                            width={'100%'}
                            height={hp(15)}
                            maxLength={400}
                            multiline={true}
                            borderRadius={5}
                            value={description}
                            fontSize={fonts.P4}
                            placeholder="Description..."
                            fontFamily={Fonts.SoraLight}
                            textInputStyle={styles.descriptionInput}
                            onChangeText={(text) => {
                                setInfoErr(null)
                                setDescription(text);
                            }}
                            Error={infoErr || false}
                            errorMessage={infoErr}
                        />
                    </View>
                    <View style={styles.bottomButtonsContainer}>
                        <Button
                            icon={false}
                            title={title}
                            width={'100%'}
                            testID="Login.Button"
                            bgColor={Colors.theme}
                            iconPlace={'leftCenter'}
                            onPress={checkValidation}
                            titleStyle={styles.buttonText}
                        />
                    </View>
                </View>
            </View>
            {isLoading && <AppLoader visible={isLoading} />}
        </KeyboardAwareScrollView>
    );
};
