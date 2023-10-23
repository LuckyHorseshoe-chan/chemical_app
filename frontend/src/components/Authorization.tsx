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
import { useAppDispatch } from '../hooks';
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogged, setUser } from '../features/userSlice';
import { getNanoparticleAsync, getMaterialAsync, getSynthesisAsync, getNOVAAsync } from '../features/databaseSlice'
import { setUserId } from '../features/formSlice';

function Authorization(){
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [msg, setMsg] = useState("")

    const login = () => {
        fetch('http://localhost:8000/api/authenticate/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"username": username, "password": password, "rememberMe": rememberMe})
        })
        .then((res) => res.json())
        .then((data) => {
            if (data["success"]) {
                dispatch(setLogged(true))
                dispatch(setUser(data["user"]))
                dispatch(getNanoparticleAsync())
                dispatch(getMaterialAsync())
                dispatch(getSynthesisAsync())
                dispatch(getNOVAAsync())
                dispatch(setUserId(data["user"]["id"]))
                navigate('main')
            }
            else setMsg(data["message"])
        })
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
                        <Input 
                            mt='1vh' 
                            size='sm' 
                            placeholder='Username'
                            onChange={(e: any) => setUsername(e.target.value)}></Input>
                    </Box>
                    <Box mt='2vh'>
                        <Text as='b' fontStyle='Roboto'>Password</Text>
                        <Input 
                            mt='1vh' 
                            size='sm' 
                            placeholder='Password'
                            onChange={(e: any) => setPassword(e.target.value)}></Input>
                    </Box>
                    <Text mt='1vh' color='red'>{msg}</Text>
                    <Flex mt='2vh'>
                        <Radio fontStyle='Roboto' onChange={(e: any) => setRememberMe(true)}>Remember Me</Radio>
                        <Spacer />
                        <Button bg='#2196F3' color='white' onClick={login}>Login</Button>
                    </Flex>
                </Box>
                
            </Flex>
        </Center>
        
    )
}

export default Authorization;