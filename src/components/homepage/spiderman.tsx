import { circles, spiderman } from '@/assets'
import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'


const Spiderman = () => {
  return (
    <Box w={'100%'} h={'100%'} bg={'#020100'} pt={{base: '100px', md: '140px'}} pb={{md: '140px', base: '50px'}}>
      <Box  w={{base: '90%', md: '80%', lg: '80%'}} className="center">
        <Box w={{base: '100%', md: '100%', lg: '826px'}} className='center'>
            <Heading  textAlign={'center'} fontSize={{base: '27px', md: '35px'}} color={'#fff'} fontWeight={'600'} lineHeight={{md:'65px', base: '40px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
        </Box>

        <Box pt={{base: '40px', md: '90px'}}>
            <Text textAlign={'left'} fontSize={{base: '25px', md: '30px'}} color={'#fff'} fontWeight={'600'} lineHeight={{md:'65px', base: '40px'}}>Spiderman</Text>
            <Text w={{base: '100%', md: '545px'}} pt={{base: '10px', md: '15px'}} textAlign={'left'} fontSize={{base: '14px', md: '16px'}} color={'#fff'} fontWeight={'600'} >
                Spider-Man - Wikipedia
                Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.</Text>
        </Box>


        <Box pt={'10px'}>
            <Box  ml={{lg: '1100px', base: '120px', md: '340px'}} pb={{lg: '40px', base: '0px', md: '0'}}>
                <Image src={circles} alt='img not found'></Image>
            </Box>
            <Box  mt={{lg:'-100px', md: '-60px', base: '-70px'}}>
                <Image  className='img1' src={spiderman} alt='img not found'></Image>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Spiderman
