import { Box, Heading, Input, Text } from '@chakra-ui/react'
import Link from 'next/link'


const signUp = () => {
  return (
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
              <Input style={{outline: 'none'}} w={'280px'} placeholder='Enter your password' required />
            </Box>

            {/* forgot pass */}

            <Box pt={'20px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              
            </Box>
            <Input mt={'20px'} type='submit' bg={'#45f3ff'} value="Sign In"></Input>
            </form>
            
          </Box>
       
      </Box>
    </Box>
  )
}

export default signUp
