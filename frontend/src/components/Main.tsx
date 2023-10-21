import { GridItem } from '@chakra-ui/react'
import Table from './Table';

function Main(){
    return(
        <GridItem bg='#F9FAFB' border='1px' borderColor='gray.200' area={'main'}>
            <Table />
        </GridItem>
    )
}

export default Main;