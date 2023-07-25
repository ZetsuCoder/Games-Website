import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { bg, gameimg } from '@/assets'
const Game1 = () => {
  return (
    <Box  w={'100%'} bg={'#000000'} h={{lg:'75vh', md :'100%', base: '100%'}} pb={{base:'20px', md: '40px', lg: '0'}}>
        <Box  w={{base: '90%', md: '80%', lg: '80%'}} className="center">
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pt={{base: '30px', md: '80px'}} flexDirection={{base: 'column', md: 'column', lg: 'row'}}>

            <Box color={'#FFF'} w={{base :'100%', lg: '536px', md: '100%'}} display={'flex'} flexDirection={'column'} gap={{base: '1.4em', md: '3em'}}>
                <Text fontSize={{base: '28px', md: '30px'}} fontWeight={'500'} lineHeight={'normal'}>Lorem Ipsum is simply dummy 
                text dummy text x</Text>
                <Text fontSize={{base: '15px', md: '17px'}} fontWeight={'400'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                <Text fontSize={{base: '15px', md: '17px'}} fontWeight={'400'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                <Button w={{base: '150px', md: '177px'}} h={{base :'45px', md: '50px'}} bg={'#DC7000'}>Read More</Button>
            </Box>

            <Box  display={'flex'} alignItems={'center'} justifyContent={'center'} pt={{base: '20px', md: '30px', lg :'0'}}>
              <Image className='gameimg' src={gameimg} alt='img not found'></Image>
            </Box>
          </Box>
        </Box>
      
    </Box>
  )
}

export default Game1
