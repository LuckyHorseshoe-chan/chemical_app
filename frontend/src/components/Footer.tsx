import { 
    Center,
    Flex,
    Text, 
    GridItem
} from '@chakra-ui/react'

function Footer(){
    return(
        <GridItem border='1px' borderColor='gray.200' area={'footer'} >
            <Flex h='100%' justifyContent='center'>
                <Center>
                    <Text color='#7C8695'>Copyright © 2023</Text>
                </Center>  
            </Flex>
        </GridItem>
    )
}

export default Footer;