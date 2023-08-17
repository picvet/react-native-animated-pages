import React from 'react'
import { Flex, Box, useColorModeValue } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '../assets/colors'
import { Image } from 'react-native'

export default function TopBar () {
	return (
		<Flex direction='row' justify='space-between' >
			<Box >
				<Ionicons name="menu-outline" size={32} color={useColorModeValue(Colors.black, Colors.lightBlue)} />
			</Box>

				<Box flexDir='row' alignItems='center'>
					<Ionicons name='search-outline' size={32} color={useColorModeValue(Colors.black, Colors.lightBlue)} />
					<Image 
						source={require('../../assets/profile.png')}
						style={{ width: 38, height: 38, marginLeft: 4, padding: 1, backgroundColor: Colors.lightBlue }}
						borderRadius={32}	
						resizeMode='contain'
					/>
					</Box>
		</Flex>
	)
}
