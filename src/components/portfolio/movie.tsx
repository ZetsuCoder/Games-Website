import { check } from '@/assets'
import { Box, Text,Grid } from '@chakra-ui/react'
import Image from 'next/image'


const Movie = () => {
  return (
    <Box w={'100%'} h={{md: '63vh', lg: '48vh', base : '90vh'}} bg={'#020100'} pt={{base :'30px', md:'50px', lg: '20px'}} >
      <Box  w={{base: '90%', md: '80%', lg: '80%'}}  className="center">
        <Box display={'flex'} justifyContent={'space-around'} flexDirection={{base: 'column', lg: 'row', md: 'column'}}>
            <Box >
            <iframe className='video' src="https://www.youtube.com/embed/MrjBTvp8EuM" title="Spider-Man 4 The Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share controls" allowfullscreen></iframe>
            </Box>
            <Box color={'#fff'} display={'flex'} flexDirection={'column'} gap={{base: '0.6em', md: '0.6em', lg :'0'}}>
                <Text w={{base :'100%', lg: '383px', md: '100%'}} fontSize={{base: '28px', md: '30px'}} fontWeight={'700'} lineHeight={{md:'54px', base: '35px'}} pt={{md: '10px', base: '20px', lg:'0'}}>Lorem Ipsum is simply dummy text.</Text>
                <Text w={{base :'100%', lg: '383px', md: '100%'}}  fontSize={{base: '12px', md: '14px'}} fontWeight={'700'} lineHeight={{md:'34px', base: '25px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</Text>
                
                <Grid gridTemplateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)'}} flexDirection={'column'} gap={'0.5em'} pt={{base: '0', md: '0', lg: '20px'}}>

                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Image src={check} alt='img not found'></Image>
                    <Text fontSize={{base: '12px', md: '14px'}} fontWeight={'300'}>Lorem Ipsum is simply</Text>
                </Box>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Image src={check} alt='img not found'></Image>
                    <Text fontSize={{base: '12px', md: '14px'}} fontWeight={'300'}>Lorem Ipsum is simply</Text>
                </Box>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Image src={check} alt='img not found'></Image>
                    <Text fontSize={{base: '12px', md: '14px'}} fontWeight={'300'}>Lorem Ipsum is simply</Text>
                </Box>
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Image src={check} alt='img not found'></Image>
                    <Text fontSize={{base: '12px', md: '14px'}} fontWeight={'300'}>Lorem Ipsum is simply</Text>
                </Box>
                </Grid>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Movie
