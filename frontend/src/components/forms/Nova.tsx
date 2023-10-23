import { 
    Flex, 
    Box, 
    Spacer, 
    Text, 
    Input, 
    Textarea, 
    Button, 
    Center,
    Grid,
    GridItem
 } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { 
    selectForm, setNovaMethod, setNovaAbsorbat, setNovaPoreSize,  
    setNovaDensity, setNovaAdsCurve, setNovaPoreCurve 
} from '../../features/formSlice';
import { useRef, useState } from 'react'

function NovaForm(){
    const [adsFile, setAdsFile] = useState<File>()
    const [poreFile, setPoreFile] = useState<File>()

    const form = useAppSelector(selectForm)
    const dispatch = useAppDispatch()

    const poreFileInputRef = useRef<HTMLInputElement>(null);
    const adsFileInputRef = useRef<HTMLInputElement>(null);

    const poreClick = () => {
        if(poreFileInputRef.current) {poreFileInputRef.current.click()}
    }
    const adsClick = () => {
        if(adsFileInputRef.current) {adsFileInputRef.current.click()}
    }

    const handleAdsFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            setAdsFile(e.target.files[0])
            dispatch(setNovaAdsCurve(e.target.files[0].name))
        }
    }
    const handlePoreFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            setPoreFile(e.target.files[0])
            dispatch(setNovaPoreCurve(e.target.files[0].name))
        }
    }

    return(
        <Box 
            w='63vw' 
            h='45vh'
            mt={5}
            border='1px'
            borderColor='gray.200' 
            bg='white'>
                <Box m='3vh' w='90%'>
                    <Text as='b'>NOVA Form</Text>
                    <Box color='#72777A'>
                        <Flex>
                            <Box w='59%'>
                                <Flex mt='2vh'>
                                    <Box w='30%'>
                                        <Text>id</Text>
                                        <Input 
                                            isDisabled 
                                            bg='#CED4DA' 
                                            mt='1vh'
                                            placeholder={
                                                form.nova.id ? 
                                                String(form.nova.id) : ""}/>
                                    </Box>
                                    <Spacer />
                                    <Box w='30%'>
                                        <Text>Nanoparticle id</Text>
                                        <Input 
                                            isDisabled 
                                            bg='#CED4DA' 
                                            mt='1vh'
                                            placeholder={form.nova.np_id}/>
                                    </Box>
                                    <Spacer />
                                    <Box w='34%'>
                                        <Text>Density</Text>
                                        <Input mt='1vh' onChange={(e: any) => dispatch(setNovaDensity(e.target.value))}/>
                                    </Box>
                                </Flex>
                                <Flex color='#72777A' mt='1vh'>
                                    <Box w='63%'>
                                        <Text>Absorbat</Text>
                                        <Input mt='1vh' onChange={(e: any) => dispatch(setNovaAbsorbat(e.target.value))}/>
                                    </Box>
                                    <Spacer />
                                    <Box w='34%'>
                                        <Text>Pore size</Text>
                                        <Input mt='1vh' onChange={(e: any) => dispatch(setNovaPoreSize(e.target.value))}/>
                                    </Box>
                                </Flex>
                            </Box>
                            <Spacer/>
                            <Box w='39%'>
                                <Text mt='2vh'>Method</Text>
                                <Textarea mt='1vh' h='16.6vh' onChange={(e: any) => dispatch(setNovaMethod(e.target.value))}/>
                            </Box>  
                        </Flex>
                        <Grid 
                            mt='2vh' 
                            w='65%' 
                            templateRows='1fr' 
                            templateColumns='1fr 1fr' 
                            gap={6}>
                            <GridItem>
                                <Box>
                                    <Text>Adsorbtion-desorbtion curve</Text>
                                    <Flex>
                                        <Button mt='1vh' onClick={adsClick}>
                                            Choose file
                                        </Button>
                                        <Center>
                                            <Text ml={2} isTruncated maxWidth="8vw">
                                                {adsFile ? form.nova.ads_desorb_curve : "No file chosen"}
                                            </Text>
                                        </Center>
                                        <Input 
                                            type='file' 
                                            ref={adsFileInputRef} 
                                            style={{ display: 'none'}} 
                                            onChange={handleAdsFileSelected}/>
                                    </Flex>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box>
                                    <Text>Pore distribution curve</Text>
                                    <Flex>
                                        <Button mt='1vh' onClick={poreClick}>
                                            Choose file
                                        </Button>
                                        <Center>
                                            <Text ml={2} maxWidth="8vw" isTruncated>
                                                {poreFile ? form.nova.pore_distr_curve : "No file chosen"}
                                            </Text>
                                        </Center>
                                        <Input 
                                            type='file' 
                                            ref={poreFileInputRef} 
                                            style={{ display: 'none'}}
                                            onChange={handlePoreFileSelected}/>
                                    </Flex>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
        </Box>
    )
}

export default NovaForm;