import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useBusinesses from '../hooks/useBusinesses'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useBusinesses();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
    return (
        <>
            <SearchBar
                term= {term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            <Text>Search Screen</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList title="Cheap" results={filterResultsByPrice('$')}/>
                <ResultsList title="Date Night" results={filterResultsByPrice('$$')} />
                <ResultsList title="Special Events" results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;