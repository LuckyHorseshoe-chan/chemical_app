import { 
    Button,
    Box,
    Center,
    Flex,
    Image, 
    Text, 
    Input,
    Radio,
    Spacer 
} from '@chakra-ui/react'

function Authorization(){
    const onClick = () => {
        fetch('http://localhost:8000/api/users/')
        .then((res) => res.json())
        .then((data) => {console.log(data)})
    }
    return (
        <Center>
            <Flex
                bgImage="url('/mountains.png')"
                bgRepeat='no-repeat'
                bgSize='100% 100%' 
                h='100vh'
                w='118.6vh'
                justifyContent='center'>
                    <Center>
                        <Image src='logo_mps-04.png' h='7vh'/>
                    </Center>
            </Flex>
            <Flex 
                h='100vh'
                w='59.3vh'
                justifyContent='center'>
                <Box mt={70} ml={5} mr={5} w='51.7vh' h='33vh'>
                    <Text fontSize='2xl' fontStyle='Roboto'>Login</Text>
                    <Box mt='3vh'>
                        <Text as='b' fontStyle='Roboto'>Username</Text>
                        <Input mt='1vh' size='sm' placeholder='Username'></Input>
                    </Box>
                    <Box mt='2vh'>
                        <Text as='b' fontStyle='Roboto'>Password</Text>
                        <Input mt='1vh' size='sm' placeholder='Password'></Input>
                    </Box>
                    <Flex mt='2vh'>
                        <Radio fontStyle='Roboto'>Remember Me</Radio>
                        <Spacer />
                        <Button bg='#2196F3' color='white'>Login</Button>
                    </Flex>
                </Box>
                
            </Flex>
        </Center>
        
    )
}

export default Authorization;