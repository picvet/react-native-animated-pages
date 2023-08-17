import React from "react";
import { Container, Card, Text, Flex, HStack, Box, useColorModeValue } from "native-base";
import { Image, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {Colors} from "../assets/colors";

interface Props {
	data: any[]
}

interface ItemProps {
id: number,
		title: string,
		subTitle: string,
		imageURL: string,
		rating: number,
		pages: number,
		language: 'Eng',
		description: string
}

export default function Cards ( props: Props ) {
	const { data } = props;
	return (
			<ScrollView showsHorizontalScrollIndicator={false} style={{ width: '100%'}} horizontal>
				<HStack space={8}>
					{data.map((item: ItemProps) => (
						<Card key={item.id} style={{ paddingHorizontal: 10, paddingVertical: 16 }}>
							<Box flexDir='row' mb={4}>
								<Image 
									source={{ 
										uri: item.imageURL
									}}
									style={{ width: 200, height: 300}}
									resizeMode='contain'
								/>
								<Ionicons name="heart-outline" style={{ marginLeft: 8}} size={32} color={useColorModeValue(Colors.black, Colors.lightBlue)} />
							</Box>
							<Text 
								fontSize={20} 
								mb={2}
								fontWeight={400}
								color={useColorModeValue(Colors.black, Colors.lightBlue)}
							>{item.title}</Text>
							<Text 
								fontSize={15} 
								fontWeight={400}
								color={useColorModeValue(Colors.black, Colors.lightBlue)}
							>{item.subTitle}</Text>
						</Card>
					))}
				</HStack>
			</ScrollView>
	)
}
