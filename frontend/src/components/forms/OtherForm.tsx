import { Box, Text } from '@chakra-ui/react'

function OtherForm(){

    return(
        <Box 
            w='63vw' 
            h='30vh'
            mt={5}
            border='1px'
            borderColor='gray.200' 
            bg='white'>
                <Box m='3vh' w='90%'>
                    <Text as='b'>Other Form</Text>
                </Box>
        </Box>
    )
}

export default OtherForm;