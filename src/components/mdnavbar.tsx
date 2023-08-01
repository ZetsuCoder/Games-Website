import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Text, Button } from '@chakra-ui/react'
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
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { new4 } from '@/assets'
import Image from 'next/image'
const Mdnavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
    const [size, setSize] = useState('')

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const sizes = ['md']
  const [scrollTop, setScrollTop] = useState(0)
    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100
        setScrollTop(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

  return (
    <>
    <Box bg={'black'} h={'10px'} position={'sticky'} top={'0'} left={'0'} zIndex={1} w={'100%'}>
        <Box  h={'10px'} w={`${scrollTop}%`} bg={'#FA9021'}></Box>
    </Box>
    <Box>
       <Box display={{base: 'none', md: 'flex', lg: 'none'}} w={'100%'} h={'10vh'} bg={'#020100'}>
        <Box w={'90%'} className='center'  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
            <Text color={'#fff'} fontSize={{base: '32px', md: '50px'}} fontWeight={'1000'}>LOGO</Text>
            </Box>

            <Box display={'flex'} alignItems={'center'}>
            <Box w={'50px'} h={'50px'} mr={'10px'}>
                <Image style={{borderRadius: "50%"}} src={new4} alt='img not found'></Image>
            </Box>
            <Box>
            
            {sizes.map((size) => (
                <Button  h={'60px'}
                onClick={() => handleClick(size)}
                key={size}
                m={4}
                bg={'#FA9021'} color={'#fff'} fontSize={'40px'}
                ><HamburgerIcon /></Button>
            ))}
                <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton fontSize={{base: '23px', md: '30px'}} pt={'10px'} pr={'10px'} color={'red'} />
                    <DrawerHeader borderBottomWidth={'1px'} borderColor={'#000'}><Text color={'#000'}  fontSize={{base: '35px', md: '50px'}} fontWeight={{base: '800', md: '1000'}}>LOGO</Text></DrawerHeader>
                    <DrawerBody>
                    <Box display={'flex'} justifyContent={'left'} flexDirection={'column'} alignItems={'left'} gap={'20px'} pt={'10px'}>
                        <Text className='txt1' color={'#000'} fontSize={{base:'20px', md: '30px'}}><Link href="/home" >Home</Link></Text>
                        <Text className='txt1' color={'#000'} fontSize={{base:'20px', md: '30px'}}><Link href="/about" >AboutUs</Link></Text>
                        <Text className='txt1' color={'#000'} fontSize={{base:'20px', md: '30px'}}><Link href="/portfolio">Portfolio</Link></Text>
                        <Text className='txt1' color={'#000'} fontSize={{base:'20px', md: '30px'}}><Link href="/news">News</Link></Text>
                        <Button position={'absolute'} bottom={'25px'} w={'150px'} h={'47px'} fontSize={'23px'} color={'#fff'} borderRadius={'6px'} bg={'#FA9021'}>Contact Us</Button>
                    </Box>
                    
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
            </Box>
        </Box>
    </Box>
    
    </Box>
    </>
  )
}

export default Mdnavbar
