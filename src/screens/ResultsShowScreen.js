import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({route, navigation}) => {
    const {id} = route.params;
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    if(!result.photos.length)
                        return <Text>No images to show</Text>
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 200,
        marginBottom: 15,
        marginLeft: 10,
        borderRadius: 4
    }
});

export default ResultsShowScreen;