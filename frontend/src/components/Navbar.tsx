import {
    Button,
    Box,
    Center,
    Flex,
    Image, 
    Text, 
    Spacer, 
    GridItem,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    List,
    ListItem,
    Link
} from '@chakra-ui/react'

function Navbar(){
    return(
        <GridItem border='1px' borderColor='gray.200' area={'nav'}>
            <Center>
                <Accordion allowMultiple h='24vh' w='13vw' mt='5vh' color='gray.500'>
                    <AccordionItem>
                        <AccordionButton>
                            <Flex>
                                <Center>
                                    <Image boxSize='17px' src='/Dashboard.png'/>
                                    <Text as='b' ml='1vw'>Dashboard</Text>
                                </Center>
                            </Flex>
                        </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                        <Flex>
                            <Center>
                                <Image boxSize='17px' src='/Charts.png'/>
                                <Text as='b' ml='1vw'>Charts</Text>
                            </Center>
                        </Flex>
                        </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Flex>
                                <Center>
                                    <Image boxSize='17px' src='/Forms.png'/>
                                    <Text as='b' ml='1vw'>Forms</Text>
                                </Center>
                            </Flex>
                        </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Flex>
                                <Center>
                                    <Image boxSize='17px' src='/Tables.png'/>
                                    <Text as='b' ml='1vw'>Tables</Text>
                                </Center>
                            </Flex>
                            <Spacer/>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <Box ml='2vw'>
                                <Button justifyContent="flex-start" w='100%' borderRadius="0" bg='white'>
                                    Nanoparticles
                                </Button>
                                <Button justifyContent="flex-start" w='100%' borderRadius="0" bg='white'>
                                    Material
                                </Button>
                                <Button justifyContent="flex-start" w='100%' borderRadius="0" bg='white'>
                                    Synthesis
                                </Button>
                                <Button justifyContent="flex-start" w='100%' borderRadius="0" bg='white'>
                                    NOVA
                                </Button>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Flex>
                                <Center>
                                    <Image boxSize='17px' src='/Apps.png'/>
                                    <Text as='b' ml='15px'>Apps</Text>
                                </Center>
                            </Flex>
                            <Spacer/>
                            <AccordionIcon />
                        </AccordionButton>
                    </AccordionItem>
                </Accordion>
            </Center>
        </GridItem>
    )
}

export default Navbar;