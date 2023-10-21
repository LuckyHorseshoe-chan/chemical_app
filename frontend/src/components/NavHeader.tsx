import { 
    Center,
    Flex,
    Image, 
    Text, 
    GridItem
} from '@chakra-ui/react'

function NavHeader(){
    return(
        <GridItem border='1px' borderColor='gray.200' area={'nav-header'}>
            <Flex m='12px'>
                <Center>
                    <Image src='logo_mps-04.png' h='4vh'/>
                    <Text as='b' fontStyle='Roboto' ml='20px'>MatVerse</Text>
                </Center>
            </Flex>
        </GridItem>
    )
}

export default NavHeader;