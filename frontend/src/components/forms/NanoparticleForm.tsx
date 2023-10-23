import { Flex, Box, Spacer, Text, Input } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { 
    selectForm, setNpId, setNpStr, setNpSize, setArticleId, 
    setMepId, setMatId, setUserId, setNovaId, setSynthesisId,
} from '../../features/formSlice';

function NanoparticleForm(){
    const form = useAppSelector(selectForm)
    const dispatch = useAppDispatch()
    const setEntity = (e: any) => {
        dispatch(setNpStr(e.target.value))
    }

    return(
        <Box 
            w='63vw' 
            h='45vh'
            border='1px'
            borderColor='gray.200' 
            bg='white'>
                <Box m='3vh' w='90%'>
                    <Text as='b'>Nanoparticles Form</Text>
                    <Flex color='#72777A' mt='2vh'>
                        <Box w='20%'>
                            <Text>id key</Text>
                            <Input 
                                isDisabled bg='#CED4DA' 
                                mt='1vh'
                                placeholder={form.nanoparticle.id}/>
                        </Box>
                        <Spacer />
                        <Box w='36%'>
                            <Text>Nanoparticle</Text>
                            <Input mt='1vh' onChange={setEntity}/>
                        </Box>
                        <Spacer />
                        <Box w='36%'>
                            <Text>Size</Text>
                            <Input 
                                mt='1vh' 
                                onChange={(e: any) => dispatch(setNpSize(e.target.value))}/>
                        </Box>
                    </Flex>
                    <Flex color='#72777A' mt='1vh'>
                        <Box w='20%'>
                            <Text>Article id</Text>
                            <Input 
                                isDisabled 
                                bg='#CED4DA' 
                                mt='1vh'
                                placeholder={
                                    form.nanoparticle.article_id ? 
                                    String(form.nanoparticle.article_id) :
                                    ""}/>
                        </Box>
                        <Spacer />
                        <Box w='36%'>
                            <Text>Material id</Text>
                            <Input 
                                isDisabled 
                                bg='#CED4DA' 
                                mt='1vh'
                                placeholder={form.nanoparticle.mat_id}/>
                        </Box>
                        <Spacer />
                        <Box w='16%'>
                            <Text>MEP id</Text>
                            <Input 
                                isDisabled 
                                bg='#CED4DA' 
                                mt='1vh'
                                placeholder={
                                    form.nanoparticle.mep_id ? 
                                    String(form.nanoparticle.mep_id) :
                                    ""}/>
                        </Box>
                        <Spacer />
                        <Box w='16%'>
                            <Text>User id</Text>
                            <Input 
                                isDisabled 
                                bg='#CED4DA' 
                                mt='1vh'
                                placeholder={
                                    form.nanoparticle.user_id ? 
                                    String(form.nanoparticle.user_id) :
                                    ""}/>
                        </Box>
                    </Flex>
                </Box>
        </Box>
    )
}

export default NanoparticleForm;