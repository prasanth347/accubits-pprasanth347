import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const logo  = '#EF0D33';
const gray  = '#000000';
const title = 'accubits';

const Login = ({navigation}) => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [selected, setSelect] = useState(0);

	const validation = () => {
		if(user == 'admin' && pass == 'admin'){
			navigation.navigate('Dashboard', { user: user });
		}
		else{
			alert('Please verify your username or password');
		}
	};

	return (
		<View style={styles.container}>
		  <StatusBar barStyle="light-content" />
		  <SafeAreaView>
			<ScrollView
			  style={styles.scrollView}
			  contentInsetAdjustmentBehavior="automatic">
				<View style={{alignItems: 'center', paddingTop: 50, marginVertical: 100}}>
					<Image style={styles.logo} source={require('./assets/images/logo_transparent.png')}/>
				</View>
				<TextInput
					style={styles.textInput}
					placeholder="Username"
					onChangeText={setUser}/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					onChangeText={setPass}/>
				<TouchableOpacity
					style={[styles.login]}
					onPress={validation}>
					<Text style={styles.txt}>Login</Text>
				</TouchableOpacity>
			</ScrollView>
		  </SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	scrollView:{
		marginHorizontal: 50,
	},
	logo:{
		width: 180,
		height: 120,
	},
	txt: {
		fontFamily: 'Montserrat-SemiBold',
		marginVertical: 8,
		textAlign: 'center',
		color: '#FFFFFF'
	},
	textInput: {
		borderBottomWidth: 1,
		borderBottomColor: gray,
		marginVertical: 10,
	},
	login: {
		borderRadius: 5,
		justifyContent: 'center',
		backgroundColor: logo,
		marginVertical: 20
	}
});

export default Login;
