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
} from '@chakra-ui/react'
import { useAppDispatch } from '../hooks';
import { setTab } from '../features/userSlice'
import { setColumn } from '../features/databaseSlice';

function Navbar(){
    const dispatch = useAppDispatch()
    const tables: string[] = ["Nanoparticles", "Material", "Synthesis", "NOVA"]
    const onClick = (table: string) => () => {
        dispatch(setColumn(table))
        dispatch(setTab("table"))
    }

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
                        <AccordionButton onClick={() => dispatch(setTab("form"))}>
                            <Flex>
                                <Center>
                                    <Image boxSize='17px' src='/Forms.png'/>
                                    <Text as='b' ml='1vw'>Forms</Text>
                                </Center>
                            </Flex>
                        </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton onClick={() => dispatch(setTab("table"))}>
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
                                {tables.map((table: string) => 
                                    (<Button 
                                        justifyContent="flex-start" 
                                        w='100%' 
                                        borderRadius="0" 
                                        bg='white'
                                        onClick={onClick(table)}>
                                            {table}
                                    </Button>)
                                )}
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