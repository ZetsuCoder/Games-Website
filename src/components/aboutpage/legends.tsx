import { img2 } from "@/assets"
import { Box, Text , Button, Heading } from "@chakra-ui/react"
import Image from "next/image"

const Legends = () => {
  return (
    <Box w={'100%'} bg={'#1C140F'} h={{lg:'75vh',md :'100%', base: '100%'}}>
      <Box w={{base: '90%', md: '80%', lg: '80%'}} className="center">
        <Box pt={{base: '0', md: '0', lg: '195px'}} display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={{base: 'column', md: 'column', lg: 'row'}}>
            <Box pt={{base: '30px', md: '50px', lg: '0'}}>
                <Image className="bgg" src={img2} alt="img not found"></Image>
            </Box>

            <Box pb={{md: '30px', base: '10px', lg :'0'}} pt={{base: '30px', md: '50px', lg: '0'}} w={{base: '100%', lg: '536px', md: '100%'}} color={'#fff'} display={'flex'} flexDirection={'column'} gap={{base: '0.8em', md: '2.3em'}}>
                <Text fontSize={{base: '14px', lg: '16px', md: '20px'}} fontWeight={'500'} lineHeight={'20px'}>League of Legends</Text>
                <Text fontSize={{base: '26px', md: '28px'}} fontWeight={'600'} lineHeight={'44px'}>League of Legends boasts the largest esports community in the world.</Text>
                <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} lineHeight={'32px'}>League of Legends is a multiplayer online battle arena (MOBA) game in which the player controls a character ("champion") with a set of unique abilities from an isometric perspective. As of 2023, there are over 160 champions available to play.</Text>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Legends
