import React, { Component } from 'react'
import { Text, View , ScrollView ,StyleSheet, SafeAreaView} from 'react-native'
import Header from '../components/Header'
import ProductSample from '../components/Card'
import Card from '../components/Card'


const img = require('../../assets/airpods.png')
const img1 = require('../../assets/headphone.png')
const Home = (props) =>{
    return (
        <SafeAreaView style = {{flex : 1 }}>
        <ScrollView style = {{flex : 1 }}>
        <Header title = 'Home' />
        <Card img = {img} describtion = 'AirPods' price = '10.0' />
        <Card img = {img} describtion = 'AirPods' price = '10.0' />
        <Card img = {img} describtion = 'AirPods' price = '10.0' />
        <Card img = {img} describtion = 'AirPods' price = '10.0' />
        <Card img = {img} describtion = 'AirPods' price = '10.0' />
        <Card img = {img} describtion = 'AirPods' price = '10.0' />
        <Card img = {img} describtion = 'AirPods' price = '10.0' />
        </ScrollView>

        </SafeAreaView>
    )
}

export default Home
