import { Box, Button, Text,  } from "@chakra-ui/react"

import  { gameimg } from '../assets'
import Image from "next/image"
import Link from "next/link"

const Main = () => {
  return (
    <Box w={'100%'} h={{md: '100%', lg: '89.9vh', base : '100%'}} pb={{md: '80px', base: '20px', lg: '0'}}  bg={'#020100'}>
    <Box w={{base: '90%', md: '80%', lg: '70%'}}  className="center">
      <Box display={'flex'} flexDirection={{base :'column', md: 'column', lg: 'row'}} pt={{base: '20px', md: '30px', lg: '80px'}} justifyContent={{lg: 'space-between'}} alignItems={{base: 'left', md: 'left', lg: 'center'}} >
        <Box w={{base: '100%', md: '100%', lg: "479px"}} display={'flex'} flexDirection={'column'}  gap={{base: '1rem', md :'1.5rem', lg: '2rem'}}>
            <Text fontSize={{base: '18px', lg: '20px'}} fontWeight={'700'} color={'#E87D0E'} lineHeight={'155%'}>3D game Dev </Text>
            <Text fontSize={{base: '30px', md: '45px', lg: '50px'}} fontWeight={'700'} color={'#fff'} lineHeight={'155%'} >Work that we produce for our clients</Text>
            <Text className="hidetxt" fontSize={{base: '15px', lg: '17px'}} fontWeight={'700'} color={'#ccccccc'} lineHeight={'155%'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Text>
            <Button className="btn" borderRadius={'40px'} w={{base: '160px', md: '175px', lg: "195px"}} h={{base: '45px', md: '48px', lg: '53px'}}  color={'#fff'} bg={'linear-gradient(113deg, #FA8305 0%, #FB9E3C 100%)'}><Link href="/home">Get More Details</Link></Button>
        </Box>


        <Box pt={{base:'20px', md: '40px', lg: '0'}} > 
            <Image src={gameimg} alt="img not found"></Image>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default Main
