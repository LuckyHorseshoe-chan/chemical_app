import { Flex, Box, Spacer, Text, Input, Textarea } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectForm, setSynthesisMethod } from '../../features/formSlice';


function SynthesisForm(){
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
                    <Text as='b'>Synthesis Form</Text>
                    <Flex color='#72777A'>
                        <Box w='30%' mt='2vh'>
                            <Box w='67%'>
                                <Text>id</Text>
                                <Input 
                                    isDisabled 
                                    bg='#CED4DA' 
                                    mt='1vh'
                                    placeholder={
                                        form.synthesis.id ? 
                                        String(form.synthesis.id) : ""}/>
                            </Box>
                            <Box w='67%'>
                                <Text>Nanoparticle id</Text>
                                <Input 
                                    isDisabled 
                                    bg='#CED4DA' 
                                    mt='1vh'
                                    placeholder={form.synthesis.np_id}/>
                            </Box>
                            <Box w='67%'>
                                <Text>Article id</Text>
                                <Input 
                                    isDisabled 
                                    bg='#CED4DA' 
                                    mt='1vh'
                                    placeholder={
                                        form.nanoparticle.article_id ? 
                                        String(form.synthesis.article_id) : ""}/>
                            </Box>
                        </Box>
                        <Spacer/>
                        <Box w='70%'>
                            <Text mt='2vh'>Method</Text>
                            <Textarea 
                                mt='1vh' 
                                h='26vh'
                                onChange={(e: any) => dispatch(setSynthesisMethod(e.target.value))}/>
                        </Box>   
                    </Flex>  
                </Box>
        </Box>
    )
}

export default SynthesisForm;