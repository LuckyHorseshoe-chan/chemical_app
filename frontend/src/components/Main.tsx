import { GridItem } from '@chakra-ui/react'
import DataTable from './DataTable';
import Form from './Form';

function Main(){
    return(
        <GridItem bg='#F9FAFB' border='1px' borderColor='gray.200' area={'main'}>
            <DataTable/>
        </GridItem>
    )
}

export default Main;