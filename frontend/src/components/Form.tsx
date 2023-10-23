import { Flex, Box, Button, Spacer, List, ListItem, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../hooks';
import NanoparticleForm from './forms/NanoparticleForm';
import MaterialForm from './forms/MaterialForm';
import SynthesisForm from './forms/SynthesisForm';
import NovaForm from './forms/Nova';
import ArticleForm from './forms/ArticleForm';
import OtherForm from './forms/OtherForm';
import { selectForm } from '../features/formSlice';

function Form(){
    const forms: string[] = ["Nanoparticles", "Material", "Synthesis", "NOVA", "Article", "Other"]
    const formData = useAppSelector(selectForm)

    return(
        <Flex w='80vw' h='265vh' m='4vh'>
            <List w='10vw'>
                {forms.map((form: string) => 
                    (<ListItem
                        justifyContent="flex-start" 
                        w='150%'
                        h='5vh'
                        color='gray.500' 
                        borderRadius="0" 
                        bg='#F9FAFB'>
                            <Text as='b'>
                                {form}
                            </Text>
                    </ListItem>)
                )}
            </List>
            <Spacer/>
            <Box>
                <NanoparticleForm/>
                <MaterialForm/>
                <SynthesisForm/>
                <NovaForm/>
                <ArticleForm />
                <OtherForm/>
                <Button mt={5}>Submit</Button>
            </Box>
        </Flex>
    )
}

export default Form;