import { facebook, instagram, linkedin, twiter } from "@/assets"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Text,  } from "@chakra-ui/react"
import Image from "next/image"
import { FaFacebookF } from 'react-icons/fa';
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
  return (
    <>
    
    <ScrollToTop smooth top={20} style={{paddingLeft: '5px'}} color="#DC7000" />
    <Box w={'100%'} h={{lg :'44vh', md: '100%', base: '100%'}} bg={'#020100'} pt={{base: '70px', md: '62px'}}>
      <Box w={{base: '90%', md: '80%', lg: '80%'}} className="center">
        <Box flexDirection={{base: 'column', md :'row'}} display={{lg:'flex', md: 'none'}} alignItems={'flex-start'} gap={{base: '2rem', md: '0'}} justifyContent={'space-between'}>
          <Box display={'flex'} flexDirection={'column'} gap={{md:'1.3rem', base :'0.5rem'}}>
            <Text color={'#fff'} fontWeight={'700'} fontSize={{base: '22px', md: '24px'}} lineHeight={'36px'}>LOGO</Text>
            <Text w={{base: '250px', md :'372px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            <Text pt={{base :'0', md: '13px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>@Logo</Text>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={{md:'0.5rem', base :'0.5rem'}}>
            <Text color={'#fff'} fontWeight={'700'} fontSize={{base: '15px', md: '17px'}} lineHeight={'36px'}>About us</Text>
            <Text pt={{base: '0px', md: '10px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Zeux</Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Portfolio</Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}> Careers</Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}> Contact us</Text>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={{md:'0.5rem', base :'0.5rem'}}>
            <Text color={'#fff'} fontWeight={'700'} fontSize={{base: '15px', md: '17px'}} lineHeight={'36px'}>Contact us</Text>
            <Text pt={{base: '0px', md: '10px'}} w={{base: '250px', md: '282px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}> +908 89097 890</Text>
          </Box>
          <Box display={'flex'} alignItems={'center'} pt={{base: '20px', lg: '160px'}} gap={{md:'0.5rem', base :'0.5rem'}}>


          <div className="wrapper">
         <div className="button">
            <div className="icon">
              <FaFacebookF  className="i" />
            </div>
            <span>Facebook</span>
         </div>
         <div className="button">
            <div className="icon">
                <HamburgerIcon className="i" />
            </div>
            <span>Twitter</span>
         </div>
         <div className="button">
            <div className="icon">
            <HamburgerIcon className="i" />
            </div>
            <span>Instagram</span>
         </div>
         <div className="button">
            <div className="icon">
            <HamburgerIcon className="i" />
            </div>
            <span>Codepen</span>
         </div>
         <div className="button">
            <div className="icon">
            <HamburgerIcon className="i" />
            </div>
            <span>YouTube</span>
         </div>
      </div>





            {/* <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={facebook} alt="img not found"></Image></Box>
            <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={instagram} alt="img not found"></Image></Box>
            <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={twiter} alt="img not found"></Image></Box>
            <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={linkedin} alt="img not found"></Image></Box> */}
            
          </Box>
        </Box>


        <Box flexDirection={'column'} display={{lg:'none', md: 'flex', base: 'none'}} alignItems={'flex-start'} gap={{base: '2rem', md: '0'}} justifyContent={'space-between'}>
          <Box display={'flex'} justifyContent={'space-between'} w={'100%'}>
          <Box display={'flex'} flexDirection={'column'} gap={{md:'1.3rem', base :'0.5rem'}}>
            <Text color={'#fff'} fontWeight={'700'} fontSize={{base: '22px', md: '24px'}} lineHeight={'36px'}>LOGO</Text>
            <Text w={{base: '250px', md :'372px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            <Text pt={{base :'0', md: '13px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>@Logo</Text>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={{md:'0.5rem', base :'0.5rem'}}>
            <Text color={'#fff'} fontWeight={'700'} fontSize={{base: '15px', md: '17px'}} lineHeight={'36px'}>About us</Text>
            <Text pt={{base: '0px', md: '10px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Zeux</Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Portfolio</Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}> Careers</Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}> Contact us</Text>
          </Box>
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} w={'100%'}>
          <Box display={'flex'} flexDirection={'column'} gap={{md:'0.5rem', base :'0.5rem'}}>
            <Text color={'#fff'} fontWeight={'700'} fontSize={{base: '15px', md: '17px'}} lineHeight={'36px'}>Contact us</Text>
            <Text pt={{base: '0px', md: '10px'}} w={{base: '250px', md: '282px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            <Text pt={{base :'0', md: '8px'}} color={'#fff'} fontSize={{base: '14px', md: '16px'}} fontWeight={'400'} lineHeight={'normal'}> +908 89097 890</Text>
          </Box>
          <Box display={'flex'} alignItems={'center'} pt={'120px'}  gap={{md:'0.5rem', base :'0.5rem'}}>


          




            <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={facebook} alt="img not found"></Image></Box>
            <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={instagram} alt="img not found"></Image></Box>
            <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={twiter} alt="img not found"></Image></Box>
            <Box borderRadius={'50%'} w={'34px'} h={'34px'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={linkedin} alt="img not found"></Image></Box>
            
          </Box>

          </Box>
        </Box>

      </Box>


      <Box mt={{base: '40px', lg: '50px'}}>
        <hr />
        <Box>
        <Text  py={{base: '30px', md :'50px:', lg :'40px'}}  fontSize={'13px'} textAlign={'center'} fontWeight={'400'} lineHeight={'normal'}  color={'#fff'}>Copyright ® 2021 Lorem All rights Rcerved</Text>

        </Box>
      </Box>
    </Box>
    </>
  )
}

export default Footer
