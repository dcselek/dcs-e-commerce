import React from 'react';
import { Box, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Card() {
    return (
        <div>
            <Box maxW='sm' borderWidth='1px' borderRadius='md' ml="5" mt="5" overflow='hidden'>
                <Image src='https://picsum.photos/500/300' alt='product' />
                <Link to="#/">
                    <Box p="2">
                        <Box fontWeight="semibold" mt="3" fontSize="1.2rem">
                            Product 1
                        </Box>
                        <Box fontWeight="light" color="gray.500">
                            31/01/2021
                        </Box>
                        <Box fontWeight="medium">
                            34$
                        </Box>
                    </Box>
                </Link>
                <Box>
                    <Box mt="5">
                        <Button colorScheme="whatsapp" >Add to bucket</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Card;
