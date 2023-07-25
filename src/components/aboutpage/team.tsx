import { man1, man2, man3, man4 } from "@/assets"
import { Box, Text , Button, Heading } from "@chakra-ui/react"
import Image from "next/image"
import { Grid, GridItem } from '@chakra-ui/react'
const Team = () => {
  return (
    <Box  w={'100%'} h={'100%'} bg={'#020100'} pt={{base: '70px', md: '62px'}} pb={{base: '40px', md: '80px'}}>
      <Box w={{base: '90%', md: '80%', lg: '80%'}} className="center"> 
      <Box pt={{base: '40px', md: '80px'}}>
        <Text fontSize={{base: '23px', md: '25px'}} color={'#fff'} fontWeight={'400'}>Our Team</Text>
      </Box>
      <Box w={{base:'80%', md: '100%'}} className="center">

        <Grid gridGap={{base: '2rem', md:'2rem', lg :'0'}} pt={{base: '40px', md: '80px'}} w={'100%'}  justifyContent={'center'} alignItems={'center'} gridTemplateColumns={{lg: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)'}}> 
            <Box w={'295px'} h={'253px'} bg={'#1C140F'} borderRadius={'20px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Image src={man1} alt="img not found"></Image>
                <Text fontSize={{base: '17px', md: '19px'}} color={'#fff'} fontWeight={'700'} lineHeight={'38px'}>John peter</Text>
                <Text fontSize={{base: '14px', md: '16px'}} color={'#E8E8E8'} fontWeight={'300'} lineHeight={'32px'}>COO</Text>
            </Box>
            <Box w={'295px'} h={'253px'} bg={'#1C140F'} borderRadius={'20px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Image src={man2} alt="img not found"></Image>
                <Text fontSize={{base: '17px', md: '19px'}} color={'#fff'} fontWeight={'700'} lineHeight={'38px'}>John peter</Text>
                <Text fontSize={{base: '14px', md: '16px'}} color={'#E8E8E8'} fontWeight={'300'} lineHeight={'32px'}>COO</Text>
            </Box>
            <Box w={'295px'} h={'253px'} bg={'#1C140F'} borderRadius={'20px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Image src={man3} alt="img not found"></Image>
                <Text fontSize={{base: '17px', md: '19px'}} color={'#fff'} fontWeight={'700'} lineHeight={'38px'}>John peter</Text>
                <Text fontSize={{base: '14px', md: '16px'}} color={'#E8E8E8'} fontWeight={'300'} lineHeight={'32px'}>COO</Text>
            </Box>
            <Box w={'295px'} h={'253px'} bg={'#1C140F'} borderRadius={'20px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Image src={man4} alt="img not found"></Image>
                <Text fontSize={{base: '17px', md: '19px'}} color={'#fff'} fontWeight={'700'} lineHeight={'38px'}>John peter</Text>
                <Text fontSize={{base: '14px', md: '16px'}} color={'#E8E8E8'} fontWeight={'300'} lineHeight={'32px'}>COO</Text>
            </Box>
        </Grid>
      </Box>
      </Box>
    </Box>
  )
}

export default Team
