import { location, server, user } from "@/assets"
import { Box , Text, Button } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
const Main = () => {
  const [counter, setCounter] = useState(false)
  return (
    <Box w={'100%'} h={{md: '80%', lg: '70vh', base : '89.9vh'}} bg={'#020100'} pb={{base: '0', md: '40px', lg: '0'}}>
      <Box w={{base: '90%', md: '80%', lg: '70%'}}  className="center">
        <Box display={'flex'} textAlign={'center'} flexDirection={'column'} justifyContent={'center'} color={'#fff'}  alignItems={'center'} pt={{base: '50px', md: '140px'}} gap={{base: '5px', md: '10px'}}>
          <Text fontSize={{base: '18px', lg: '20px'}} fontWeight={'700'} lineHeight={'155%'}><Link href={'/home'}>Home</Link>  > <span style={{color: '#E47500'}}>Services</span> </Text>
          <Text fontSize={{base : '31px', md: '33px'}} fontWeight={'600'} lineHeight={{base: '40px', md: '60px'}}>Lorem Ipsum is simply dummy text of the printing and.</Text>
          <Text fontSize={{base : '14px', md: '16px'}} fontWeight={'600'} lineHeight={'30px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
        </Box>

        <Box w={{base :'100%', md: '100%', lg:'1140px'}} h={{base :'100%', md: '100%', lg: '200px'}} bg={'#1C140F'} className="center" mt={{base: '70px', md: '70px'}} borderRadius={'10px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={{base: '2em', md :'0rem'}} flexDirection={{base :'column', md: 'row'}} py={{base: '40px', md: '40px', lg: '0'}} px={{base: '0', lg: '0', md: '20px'}}>
          <Box display={'flex'} alignItems={'center'} gap={'1em'}>
            <Box w={'55px'} h={'55px'} bg={'#FFECEC'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}><Image src={user} alt="img not found"></Image></Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} color={'#fff'}><ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <Text fontSize={{base: '23px', md: '25px'}} fontWeight={'700'} lineHeight={'30px'}>
                {counter && <CountUp start={0} end={100} duration={3} delay={0} />}
                
                </Text>
            </ScrollTrigger>
              <Text fontSize={{base: '18px', md: '20px'}} fontWeight={'400'} lineHeight={'30px'}>Clients</Text>
            </Box>
          </Box>


          <Text textAlign={'center'} h={{base :'2px', md: '125px'}} w={{base: '200px', md: '2px'}} bg={'#EEEFF2'}></Text>
          <Box display={'flex'} alignItems={'center'} gap={'1em'}>
            <Box w={'55px'} h={'55px'} bg={'#FFECEC'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}><Image src={location} alt="img not found"></Image></Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} color={'#fff'}>
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <Text fontSize={{base: '23px', md: '25px'}} fontWeight={'700'} lineHeight={'30px'}>
                {counter && <CountUp start={0} end={30} duration={3} delay={0} />}
                
                </Text>
            </ScrollTrigger>
              <Text fontSize={{base: '18px', md: '20px'}} fontWeight={'400'} lineHeight={'30px'}>Countries</Text>
            </Box>
          </Box>


          <Box h={{base :'2px', md: '125px'}} w={{base: '200px', md: '2px'}} bg={'#EEEFF2'}></Box>
          <Box display={'flex'} alignItems={'center'} gap={'1em'}>
            <Box w={'55px'} h={'55px'} bg={'#FFECEC'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}><Image src={server} alt="img not found"></Image></Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} color={'#fff'}>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <Text fontSize={{base: '23px', md: '25px'}} fontWeight={'700'} lineHeight={'30px'}>
                {counter && <CountUp start={0} end={50} duration={3} delay={0} />}
                </Text>
            </ScrollTrigger>
              <Text fontSize={{base: '18px', md: '20px'}} fontWeight={'400'} lineHeight={'30px'}>Projects</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main
