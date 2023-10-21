import { Flex, Box, Button, Spacer } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../hooks';
import { setColumn, selectDatabase } from '../features/databaseSlice';
import NanoparticleForm from './forms/NanoparticleForm';

function Form(){
    const dispatch = useAppDispatch()
    const database = useAppSelector(selectDatabase);
    const forms: string[] = ["Nanoparticles", "Material", "Synthesis", "NOVA", "Article", "Other"]
    
    return(
        <Flex w='80vw' h='45vh' m='4vh'>
            <Box w='10vw'>
                {forms.map((form: string) => 
                    (<Button 
                        justifyContent="flex-start" 
                        w='150%'
                        h='5vh'
                        color='gray.500' 
                        borderRadius="0" 
                        bg='#F9FAFB'
                        onClick={() => dispatch(setColumn(form))}>
                            {form}
                    </Button>)
                )}
            </Box>
            <Spacer/>
            <NanoparticleForm />
        </Flex>
    )
}

export default Form;