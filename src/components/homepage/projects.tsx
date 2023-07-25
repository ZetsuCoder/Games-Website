import { pro1, pro2, pro3, pro4, pro5, pro6 } from '@/assets'
import { Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'


const Projects = () => {
  return (
    <Box w={'100%'} bg={'#020100'} h={{lg:'97vh',md :'100%', base: '100%'}}>
        <Box  w={{base: '90%', md: '80%', lg: '80%'}} className="center">
            <Box w={{base: '100%', md: '479px'}} className='center' pt={{base: '30px', md: '140px'}}>
                <Text  textAlign={'center'}  fontSize={{base: '25px', md: '30px'}} color={'#fff'} fontWeight={'700'} lineHeight={'56px'}>Our Recent Projects</Text>
                <Text pt={{base: '10px', md: '15px'}} textAlign={'center'} fontSize={{base: '12px', md: '14px'}} color={'#fff'} fontWeight={'700'} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </Box>

            <Box pt={{base: '30px', md: '60px'}} display={'flex'} flexDirection={'column'} gap={{base: '1rem', md: '2rem'}}>
                <Box display={'flex'} justifyContent={'center'} gap={{base: '1rem', md: '3rem'}} alignItems={'center'} flexDirection={{base: 'column', md: 'row'}}>
                    <Box overflow={'hidden'}><Image className='hv' src={pro1} alt='img not found'></Image></Box>
                    <Box overflow={'hidden'}><Image className='hv' src={pro2} alt='img not found'></Image></Box>
                    <Box overflow={'hidden'}><Image className='hv' src={pro3} alt='img not found'></Image></Box>
                </Box>
                <Box display={'flex'} justifyContent={'center'} gap={{base: '1rem', md: '3rem'}} alignItems={'center'} flexDirection={{base: 'column', md: 'row'}}>
                    <Box  overflow={'hidden'}><Image className='hv' src={pro4} alt='img not found'></Image></Box>
                    <Box overflow={'hidden'}><Image className='hv' src={pro5} alt='img not found'></Image></Box>
                    <Box overflow={'hidden'}><Image className='hv' src={pro6} alt='img not found'></Image></Box>
                </Box>
            </Box>

            <Box pb={{base: '20px', md: '20px', lg: '0'}} display={'flex'} alignItems={'center'} justifyContent={'center'} pt={{base: '20px', md: '60px'}}>
                <Button w={{base: '110px', md: '139px'}} h={{base:'45px', md: '57px'}} color={'#fff'} fontSize={{base: '18px', md: '20px'}} bg={'rgba(255, 255, 255, 0.11)'}>See All</Button>
            </Box>
        </Box>
    </Box>
  ) 
}

export default Projects
