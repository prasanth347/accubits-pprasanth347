	import * as React from 'react';
	import { NavigationContainer } from '@react-navigation/native';
	import { createStackNavigator } from '@react-navigation/stack';

	import Login from './src/Login';
	import Dashboard from './src/Dashboard';

	const Stack = createStackNavigator();
	const App = () => {
	  return (
			<NavigationContainer>
				<Stack.Navigator
				 screenOptions={{ headerShown: false }} >
				 	<Stack.Screen name="Login" component={Login}/>
					<Stack.Screen name="Dashboard" component={Dashboard}/>
				</Stack.Navigator>
			</NavigationContainer>
	  );
	};

	export default App;
