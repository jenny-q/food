import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useBusinesses from '../hooks/useBusinesses'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useBusinesses();
    
    return (
        <View>
            <SearchBar
                term= {term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            <Text>Search Screen</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;