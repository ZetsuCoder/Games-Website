import { Box, Button, Heading, Input, Text, InputRightElement, InputGroup } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import { useState } from "react";
import Image from 'next/image'
import { google } from '@/assets'
const signUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
  <Box w={'100%'} h={'100vh'} pb={{md: '80px', base: '0', lg: '0'}} display={'flex'} bg={'#1c1c1c'}> 
    <Box w={{base: '90%', md: '80%', lg: '70%'}} className="center" >
      
        <Box color={'#fff'} w={{base: '100%', md: '400px'}} borderRadius={'8px'} inset={'4px'} className='center' minH={{md:'500px', base: '400px'}} bg={'#222'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'}>
          
  
          <form>
  
          <Heading fontWeight={'400'} textAlign={'center'} mt={'-30px'}>Sign In</Heading>
          <Box pt={'35px'}>
            <Text>Email</Text>
            <Input style={{outline: 'none'}} w={'280px'} placeholder='Enter your email' required />
          </Box>
          <Box pt={'20px'}>
            <Text>Password</Text>
            <InputGroup w={'100%'}>
              <Input w={'100%'}
                pr='4rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                required
              />
              <InputRightElement width='4rem' pr={'0px'}>
                <Button  h='1.75rem' size='sm'  onClick={handleClick}>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
  
  
          <Box pt={'20px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Text>Sign up with</Text>
            <Button mt={'10px'} fontSize={'20px'} w={'100%'}> <Box w={'25px'}><Image src={google} alt='img not found'></Image> 
              </Box> 
              oogle</Button>
          </Box>
          <Input mt={'20px'} type='submit' bg={'#45f3ff'} value="Sign In"></Input>
          </form>
          
        </Box>
     
    </Box>
  </Box>
    </>
  )
}

export default signUp
