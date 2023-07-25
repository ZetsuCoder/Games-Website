import { card1, card2, card3, card4,  } from "@/assets"
import { StarIcon } from "@chakra-ui/icons"
import { Grid, GridItem } from '@chakra-ui/react'
import { Box, Button, Text,  } from "@chakra-ui/react"
import Image from "next/image"

const Cards = () => {
  return (
    <Box w={'100%'} h={'100%'} bg={'#020100'} pt={{base: '70px', md: '62px'}} >
    <Box w={{base: '90%', md: '80%', lg: '80%'}} className="center"   >
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Text fontSize={{base: '20px', md: '31px'}} fontWeight={'700'} color={'#fff'}> Currently Trending Games</Text>
        <Button color={'#fff'} fontSize={'20px'} w={{base: '110px', md: '139px'}} h={{base:'45px', md:'57px'}} bg={'rgba(255, 255, 255, 0.11)'}>SEE ALL</Button>
      </Box>

    <Box >

      <Box pb={{base: '20px', md: '0'}} className="container" pt={{base: '30px', md: '80px'}} display={{lg:'flex', md: 'none', base: 'flex'} } flexDirection={{base: 'column', lg: 'row'}} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'} gap={{base: '1.4rem', lg: '0'}} >
        <Box  w={'251px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Image className="imgg" src={card1} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>
        <Box w={'251px'}>
            <Image src={card2} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>
        <Box w={'251px'}>
            <Image src={card3} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>
        <Box w={'251px'}>
            <Image src={card4} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>
      </Box>


      {/* ipad responsive only */}
      <Box pb={'20px'}  pt={{base: '30px', md: '80px'}} display={{lg:'none', md: 'flex', base: 'none'} } alignItems={'center'} justifyContent={'space-between'} textAlign={'center'} >
        <Box >
        <Box w={'251px'} >
            <Image src={card1} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>
        <Box w={'251px'} pt={'20px'}>
            <Image src={card2} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>

        </Box>
        <Box >

        <Box w={'251px'} >
            <Image src={card3} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>
        <Box w={'251px'} pt={'20px'}>
            <Image src={card4} alt="img not found"></Image>
            <Text pt={{base: '10px', md: '16px'}} fontSize={{base:'18px', md: '24px'}} color={'#fff'} ><StarIcon /> 40 Followers</Text>
        </Box>
        </Box>
      </Box>
    </Box>
    </Box>
    
    </Box>
  )
}

export default Cards
