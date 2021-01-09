import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
} from 'react-native';

const logo  = '#EF0D33';
const gray  = '#000000';

const App = ({navigation, route}) => {
	const user = route.params.user;
	return (
		<View style={styles.container}>
		  <StatusBar barStyle="light-content" />
			<View style={{marginHorizontal: 20}}>
				<View style={{alignItems: 'center', marginBottom: 10}}>
					<Image style={styles.logo} source={require('./assets/images/logo_transparent.png')}/>
				</View>
				<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
					<Text style={styles.greeting}>Welcome </Text>
					<Text style={styles.txt}>{user}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	logo:{
		width: 90,
		height: 60,
		marginVertical: 20
	},
	txt: {
		fontFamily: 'Montserrat-Italic',
		color: '#EF0D33',
		fontSize: 20,
	},
	greeting: {
		fontFamily: 'Montserrat-Bold',
		color: '#EF0D33',
		fontSize: 24,
	},
});

export default App;
