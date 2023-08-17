import * as React from 'react'
import {
	Box,
	VStack,
	StatusBar
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import TopBar from '../components/TopBar'
import PopularHeader from '../components/PopularHeader'
import Cards from '../components/Cards'
import { popularData } from '../assets/constants'


export default function MainScreen() {
	return (
		<Box
			_dark={{bg: 'blueGray.900'}} 
			_light={{bg: 'blueGray.50'}} 
			px={4} 
			flex={1}
		>
			<StatusBar />
			<VStack space={5} margin={1}>
				<TopBar />
				<PopularHeader heading='Popular' link='Show all' />
				<Cards data={popularData} />
				<ThemeToggle />
			</VStack>
		</Box>
	)
}
