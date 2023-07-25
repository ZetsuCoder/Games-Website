import { Box, Button, Input, Text,  } from "@chakra-ui/react"
import Link from "next/link"


const Main = () => {
  return (
    <Box w={'100%'} h={{md: '80%', lg: '62vh', base : '57vh'}} bg={'#020100'} pb={{base: '0', md: '40px', lg: '0'}}>
      <Box w={{base: '90%', md: '80%', lg: '70%'}}  className="center">
        <Box display={'flex'} textAlign={'center'} flexDirection={'column'} justifyContent={'center'} color={'#fff'}  alignItems={'center'} pt={{base: '50px', md: '140px'}} gap={{base: '5px', md: '10px'}}>
          <Text fontSize={{base: '18px', lg: '20px'}} fontWeight={'700'} lineHeight={'155%'}><Link href={'/home'}>Home</Link>  > <span style={{color: '#E47500'}}>News</span> </Text>
          <Text fontSize={{base : '31px', md: '33px'}} fontWeight={'600'} lineHeight={{base: '40px', md: '60px'}}>Lorem Ipsum is simply dummy text of the printing and.</Text>
          <Text fontSize={{base : '14px', md: '16px'}} fontWeight={'600'} lineHeight={'30px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
        </Box>
        
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={{base :'30px', md:'80px'}}>
            <Box w={'45px'} h={{base: '42px', md: '49px'} } display={'flex'} alignItems={'center'} border={'1px'} borderColor={'#fff'} borderLeftRadius={'10px'} borderRightColor={'transparent'} mr={'-10px'} pl={'12px'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <g clip-path="url(#clip0_1_639)">
                        <path d="M14.9084 14.0247L10.5511 9.66728C11.3775 8.64696 11.875 7.34981 11.875 5.93752C11.875 2.66359 9.21142 0 5.93749 0C2.66356 0 0 2.66359 0 5.93752C0 9.21145 2.66359 11.875 5.93752 11.875C7.34981 11.875 8.64696 11.3775 9.66729 10.5511L14.0247 14.9085C14.1468 15.0305 14.3446 15.0305 14.4667 14.9085L14.9085 14.4666C15.0305 14.3446 15.0305 14.1467 14.9084 14.0247ZM5.93752 10.625C3.35268 10.625 1.25001 8.52236 1.25001 5.93752C1.25001 3.35268 3.35268 1.25001 5.93752 1.25001C8.52236 1.25001 10.625 3.35268 10.625 5.93752C10.625 8.52236 8.52236 10.625 5.93752 10.625Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_639">
                        <rect width="15" height="15" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </Box>
            <Box>
                <Input type="search" color={'#fff'} borderLeftColor={'transparent'} borderLeftRadius={'0px'}  w={{base: '100%', md :'400px'}} h={{base: '42px', md: '49px'}} borderRightRadius={'10px'} placeholder="Search..." />
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main
