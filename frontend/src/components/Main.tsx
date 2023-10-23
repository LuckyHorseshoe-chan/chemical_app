import { GridItem } from '@chakra-ui/react'
import { useAppSelector } from '../hooks';
import { selectUser } from '../features/userSlice';
import DataTable from './DataTable';
import Form from './Form';
import Footer from './Footer';

function Main(){
    const user = useAppSelector(selectUser)
    return(
        <GridItem bg='#F9FAFB' border='1px' borderColor='gray.200' area={'main'}>
            {user.tab == "table"
            ? <DataTable/>
            : <Form />}
        </GridItem>
    )
}

export default Main;