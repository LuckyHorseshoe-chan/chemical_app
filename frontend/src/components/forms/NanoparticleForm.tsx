import { Box, Text, Input, Grid,GridItem, ControlBox } from '@chakra-ui/react'
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
        console.log(JSON.stringify({"np_name": form.nanoparticle.np_str}))
        fetch('http://localhost:8000/api/set_ids/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"np_name": form.nanoparticle.np_str})
        })
        .then((res) => res.json())
        .then((data) =>{
            dispatch(setNpId(data.np_id))
            dispatch(setArticleId(data.article_id)) 
            dispatch(setMepId(data.mep_id))
            dispatch(setMatId(data.mat_id))
            dispatch(setNovaId(data.nova_id))
            dispatch(setSynthesisId(data.syn_id))
        })
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
                    <Grid 
                        color='#72777A' 
                        mt='2vh'
                        gap={4}
                        templateRows='repeat(2, 1fr)' 
                        templateColumns='repeat(5, 1fr)' >
                            <GridItem>
                                <Box>
                                    <Text>id key</Text>
                                    <Input 
                                        isDisabled bg='#CED4DA' 
                                        mt='1vh'
                                        placeholder={form.nanoparticle.id}/>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Box>
                                    <Text>Nanoparticle</Text>
                                    <Input mt='1vh' onChange={setEntity}/>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Box>
                                    <Text>Size</Text>
                                    <Input 
                                        mt='1vh' 
                                        onChange={(e: any) => dispatch(setNpSize(e.target.value))}/>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box>
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
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Box>
                                    <Text>Material id</Text>
                                    <Input 
                                        isDisabled 
                                        bg='#CED4DA' 
                                        mt='1vh'
                                        placeholder={form.nanoparticle.mat_id}/>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box>
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
                            </GridItem>
                            <GridItem>
                                <Box>
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
                            </GridItem>
                    </Grid>
                </Box>
        </Box>
    )
}

export default NanoparticleForm;