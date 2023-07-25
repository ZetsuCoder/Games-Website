import {  cube, desctop, glasses, pc, phone, ps4 } from '@/assets'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'



const Devices = () => {
  return (
    <Box className='bg' h={{lg: '85vh', md: '100%', base: '100%'}} pb={{md : '60px', lg: '0', base: '0'}}>
      <Box  w={{base: '90%', md: '80%', lg: '80%'}} className="center">
        <Box w={{lg: '826px', md: '100%', base: '100%'}} className='center' pt={{base: '40px', md: '70px'}}>
        <Text textAlign={'center'} fontSize={{base: '25px', md: '30px'}} color={'#fff'} fontWeight={'700'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        <Text pt={{base: '10px', md: '10px'}} textAlign={'center'} fontSize={{base: '14px', md: '16px'}} color={'#fff'} fontWeight={'700'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
        </Box>

        <Box pt={'100px'} display={{md: 'flex', base: 'none'}} flexDirection={'column'} gap={'4rem'}>
            <Box textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={phone} alt='img not found'></Image></Box>
                <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>Mobile Game Development</Text>
                <a href="https://appradar.com/blog/mobile-game-engines-development-platforms"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={pc} alt='img not found'></Image></Box>
                <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>PC Game Development</Text>
                <a href="https://learn.microsoft.com/en-us/gaming/gdk/_content/gc/get-started-with-pc-dev/gr-get-started-with-pc-dev-toc"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={ps4} alt='img not found'></Image></Box>
                <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>PS4 Game Development</Text>
                <a href="https://unity.com/solutions/playstation"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={glasses} alt='img not found'></Image></Box>
                <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>AR/VR Solutions</Text>
                <a href="https://www.arm.com/markets/consumer-technologies/ar-vr"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                
            </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'10rem'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={desctop} alt='img not found'></Image></Box>
                <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>AR/ VR design</Text>
                <a href="https://www.toptal.com/designers/ui/vr-ar-design-guide"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={cube} alt='img not found'></Image></Box>
                <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>3D Modelings</Text>
                <a href="https://www.sketchup.com/"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
            </Box>
            </Box>
        </Box>


        <Box display={{base:'flex', md: 'none'}} alignItems={'center'} justifyContent={'space-between'} pt={'40px'} pb={'30px'}>
            <Box textAlign={'center'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                    <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={phone} alt='img not found'></Image></Box>
                    <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>Mobile Game Development</Text>
                    <a href="https://appradar.com/blog/mobile-game-engines-development-platforms"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                    <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={pc} alt='img not found'></Image></Box>
                    <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>PC Game Development</Text>
                    <a href="https://learn.microsoft.com/en-us/gaming/gdk/_content/gc/get-started-with-pc-dev/gr-get-started-with-pc-dev-toc"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                    <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={ps4} alt='img not found'></Image></Box>
                    <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>PS4 Game Development</Text>
                    <a href="https://unity.com/solutions/playstation"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                </Box>
            </Box>

            <Box textAlign={'center'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                    <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={glasses} alt='img not found'></Image></Box>
                    <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>AR/ VR design</Text>
                    <a href="https://www.arm.com/markets/consumer-technologies/ar-vr"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                    <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={desctop} alt='img not found'></Image></Box>
                    <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>AR/ VR design</Text>
                    <a href="https://www.toptal.com/designers/ui/vr-ar-design-guide"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '18px', md :'1.5rem'}}>
                    <Box w={'65px'} h={'65px'} borderRadius={'50%'} bg={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}><Image src={cube} alt='img not found'></Image></Box>
                    <Text fontSize={{base: '14px', md: '16px'}} fontWeight={'500'} color={'#fff'}>3D Modelings</Text>
                    <a href="https://www.sketchup.com/"><ArrowForwardIcon fontSize={'21px'} color={'#DC7000'} /></a>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Devices
