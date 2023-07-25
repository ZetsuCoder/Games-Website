import Home from '@/pages'
import { Box, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { url } from 'inspector'
import { new4 } from '@/assets'


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')

    
  return (
    <>
    <Box w={'100%'} minH={'10vh'} bg={'#020100'} display={{lg: 'flex', md: 'none', base: 'none'}} pb={'0'}>
        <Box w={'80%'} className='center' >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pt={'0px'}>
            <Box>
                <Text color={'#fff'} fontSize={'40px'} fontWeight={'1000'}>LOGO</Text>
            </Box>

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'4rem'} >
                <Text className='txt' color={'#fff'} fontSize={'20px'}><Link href="/home" >Home</Link></Text>
                <Text className='txt' color={'#fff'} fontSize={'20px'}><Link href="/about" >AboutUs</Link></Text>
                <Text className='txt' color={'#fff'} fontSize={'20px'}><Link href="/portfolio">Portfolio</Link></Text>
                <Text className='txt' color={'#fff'} fontSize={'20px'}><Link href="/news">News</Link></Text>
                <Button w={'131px'} h={'41px'} color={'#fff'} borderRadius={'6px'} bg={'#FA9021'}> <Link href="/signUp">Contact Us</Link> </Button>
                <Box w={'40px'} h={'40px'}>
                    <Image style={{borderRadius: "50%"}} src={new4} alt='img not found'></Image>
                </Box>
            </Box>

        </Box>
        </Box>
    </Box>



    {/* responsive only phone */}


    <Box display={{base: 'flex', md: 'none', lg: 'none'}} w={'100%'} h={'10vh'} bg={'#020100'}>
        <Box w={'90%'} className='center'  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
            <Text color={'#fff'} fontSize={{base: '32px', md: '50px'}} fontWeight={'1000'}>LOGO</Text>
            </Box>


            <Box display={{base: 'flex', md: 'none'}} >
            <Box w={'35px'} h={'35px'} mr={'10px'}>
                <Image style={{borderRadius: "50%"}} src={new4} alt='img not found'></Image>
            </Box>
                    
                    <Button  w={{base: '45px', md: '70px'}} h={{base: '35px', md: '55px'}} colorScheme='blue' onClick={onOpen}  fontSize={{base:'20px', md: '35px'}} bg={'#FA9021'}><HamburgerIcon /></Button>
               
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerHeader display={'flex'} alignItems={'center'} justifyContent={'left'} h={'10vh'} borderBottomWidth='1px'>
                        <Text color={'#000'} fontSize={{base: '35px', md: '40px'}} fontWeight={'1000'}>LOGO</Text>
                        </DrawerHeader>
                    <DrawerBody>
                    <Box display={'flex'} justifyContent={'left'} flexDirection={'column'} alignItems={'left'} gap={'10px'} pt={'10px'}>
                        <Text className='txt2' color={'#000'} fontSize={'20px'}><Link href="/home" >Home</Link></Text>
                        <Text className='txt2' color={'#000'} fontSize={'20px'} cursor={'pointer'}><Link href="/about" >AboutUs</Link></Text>
                        <Text className='txt2' color={'#000'} fontSize={'20px'}><Link href="/portfolio">Portfolio</Link></Text>
                        <Text className='txt2' color={'#000'} fontSize={'20px'}><Link href="/news">News</Link></Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'flex-end'} position={'absolute'} bottom={'10px'} left={'10px'}>
                        <Button  w={'131px'} h={'41px'} color={'#fff'} borderRadius={'6px'} bg={'#FA9021'}>Contact Us</Button>
                    </Box>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>

        </Box>
    </Box>

    <Box>
        <Text w={'100%'} h={'1px'} bg={'#fff'}></Text>
    </Box>

    </>
  )
}

export default Navbar
