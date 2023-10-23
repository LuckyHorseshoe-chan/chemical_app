import { Flex, Box, Spacer, Text, Input, Textarea } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectForm, setMatName, setMatSynonyms, setMatChemForm, setMatCas } from '../../features/formSlice';

function MaterialForm(){
    const form = useAppSelector(selectForm)
    const dispatch = useAppDispatch()

    return(
        <Box 
            w='63vw' 
            h='45vh'
            mt={5}
            border='1px'
            borderColor='gray.200' 
            bg='white'>
                <Box m='3vh' w='90%'>
                    <Text as='b'>Material Form</Text>
                    <Flex color='#72777A'>
                        <Box w='59%'>
                            <Flex mt='2vh'>
                                <Box w='34%'>
                                    <Text>id</Text>
                                    <Input 
                                        isDisabled 
                                        bg='#CED4DA' 
                                        mt='1vh' 
                                        placeholder={form.material.mat_id}/>
                                </Box>
                                <Spacer />
                                <Box w='63%'>
                                    <Text>Name</Text>
                                    <Input 
                                        mt='1vh' 
                                        onChange={(e: any) => dispatch(setMatName(e.target.value))} />
                                </Box>
                            </Flex>
                            <Flex color='#72777A' mt='1vh'>
                                <Box w='34%'>
                                    <Text>CAS number</Text>
                                    <Input 
                                        mt='1vh'
                                        onChange={(e: any) => dispatch(setMatCas(e.target.value))}/>
                                </Box>
                                <Spacer />
                                <Box w='63%'>
                                    <Text>Chemical formula</Text>
                                    <Input 
                                        mt='1vh'
                                        onChange={(e: any) => dispatch(setMatChemForm(e.target.value))}/>
                                </Box>
                            </Flex>
                        </Box>
                        <Spacer/>
                        <Box w='39%'>
                            <Text mt='2vh'>Synonyms</Text>
                            <Textarea 
                                mt='1vh' 
                                h='16.6vh'
                                onChange={(e: any) => dispatch(setMatSynonyms(e.target.value))}/>
                        </Box>  
                    </Flex>
                </Box>
        </Box>
    )
}

export default MaterialForm;