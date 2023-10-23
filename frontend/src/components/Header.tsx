import {
    GridItem,
    Text,
    Menu,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    Box
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectUser, setLogged, setUser } from '../features/userSlice';
import { setUserId } from '../features/formSlice';


function Header(){
    const user = useAppSelector(selectUser);
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    console.log(user.value)
    return(
        <GridItem border='1px' borderColor='gray.200' area={'header'} p={2}>
            <Box ml='90%'>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {   
                        "name" in user.value && 
                        "surname" in user.value &&
                        typeof(user.value.name) === 'string' &&
                        typeof(user.value.surname) === 'string' ?
                        <Text>{user.value.name} {user.value.surname}</Text> : 
                        <span></span>
                    }
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem onClick={() => {
                            dispatch(setLogged(false))
                            dispatch(setUser({}))
                            dispatch(setUserId(0))
                            navigate('/')
                        }}>
                            Log out
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </GridItem>
    )
}

export default Header;