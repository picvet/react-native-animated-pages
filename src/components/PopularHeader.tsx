import React from 'react'
import { Flex, Text, useColorModeValue } from 'native-base'
import {Colors} from '../assets/colors'

interface Props {
	heading: string,
	link?: string 
}

export default function PopularHeader ( props: Props ) {
	const { heading, link } = props
	return (
		<Flex direction='row' justify='space-between' align='center'>
			<Text 
				fontSize={30}
				fontStyle='normal'
				fontWeight={400}	
				color={useColorModeValue(Colors.black, Colors.lightBlue)}
			>{heading}</Text>
			<Text 
				fontSize={15}
				fontStyle='normal'
				fontWeight={400}
				color={useColorModeValue(Colors.black, Colors.lightBlue)}
			>{link}</Text>
		</Flex>
	)
}
