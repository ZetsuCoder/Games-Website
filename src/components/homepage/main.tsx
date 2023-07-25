import { Box, Button, Text,  } from "@chakra-ui/react"

import Image from "next/image"
import Link from "next/link"
import { cry, joystick, unity, unreal } from "@/assets"
const Main = () => {
  return (
    <Box>
      <Box w={'100%'} h={{md: '100%', lg: '89.9vh', base : '100%'}} pb={{md: '50px', base: '0', lg: '0'}} bg={'#020100'} pt={{base: '30px', md: '0px', lg: '0'}}>
    <Box w={{base: '90%', md: '80%', lg: '70%'}}  className="center">
      <Box display={'flex'} flexDirection={{base :'column', md: 'column', lg: 'row'}}  justifyContent={{lg: 'space-between', md: 'center', base: 'center'}} alignItems={{base: 'left', md: 'left', lg: 'center'}} >
        <Box pt={{base: '0', md: '0', lg: '80px'}} w={{base: '100%', md: '100%', lg: "479px"}} display={'flex'} flexDirection={'column'}  gap={{base: '1rem', md :'1.5rem', lg: '2.3rem'}}>
            <Text fontSize={{base: '18px', lg: '20px'}} fontWeight={'700'} color={'#E87D0E'} lineHeight={'155%'}>3D game Dev </Text>
            <Text fontSize={{base: '30px', md: '45px', lg: '50px'}} fontWeight={'700'} color={'#fff'} lineHeight={'155%'} >Work that we produce for our clients</Text>
            <Text  fontSize={{base: '15px', lg: '17px', md: '20px'}} fontWeight={'700'} color={'#fff'} lineHeight={'155%'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Text>
            <Button className="btn" borderRadius={'40px'} w={{base: '160px', md: '175px', lg: "195px"}} h={{base: '45px', md: '48px', lg: '53px'}}  color={'#fff'} bg={'linear-gradient(113deg, #FA8305 0%, #FB9E3C 100%)'}><Link href="/home">Get More Details</Link></Button>
        </Box>


        <Box  display={'flex'}  alignItems={'center'} justifyContent={'center'} > 
            <Box  mt={{lg:'-37px', base: '20px', md: '20px'}} w={'100%'} mr={{lg:'-180px', md: '0px', base: '0'}} >
             <Image className="img" src={joystick} alt="img not found"></Image>
            </Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={{base: '2rem', md: '2rem'}}>
            <Box position={{lg: 'absolute', base: 'relative'}} top={{lg:'220px', base: '0', md: '0'}}><Image src={unreal} alt="img not found"></Image></Box>
            <Box pt={{base: '5px', md: '10px'}} top={{lg:'220px', base: '0', md: '0'}} right={{lg: '700px', base: '0', md: '0'}} position={{lg: 'absolute', base: 'relative'}}><Image src={unity} alt="img not found"></Image></Box>
            <Box mt={{lg:'30px', base: '0', md: '0'}} right={{lg:'880px', base: '0', md: '0'}} position={{lg: 'absolute', base: 'relative'}}><Image src={cry} alt="img not found"></Image></Box>
                
            </Box>
        </Box>
      </Box>
    </Box>
    </Box>
    </Box>
  )
}

export default Main
