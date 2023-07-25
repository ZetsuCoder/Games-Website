import { Box, Text, Input, Button } from '@chakra-ui/react'


const Contact = () => {
    
  return (
    <Box id='contact' w={'100%'} bg={'#020100'} h={{lg:'67vh',md :'100%', base: '100%'}}>
      <Box w={{base: '90%', md: '80%', lg: '80%'}} className="center" pb={{base: '20px', md: '40px', lg: '0'}}>
        <Box  pt={{base: '40px', md: '80px'}} w={{base: '100%', md: '400px'}} >
            <Text fontSize={{base: '25px', md: '30px'}} color={'white'} fontWeight={'700'} lineHeight={'56px'}>Lorem Ipsum</Text>
            <Text  fontSize={{base: '14px', md: '16px'}} color={'white'} fontWeight={'400'} lineHeight={'30px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
        </Box>

        <Box display={'flex'}>

        <Box w={'100%'} bg={'#1C140F'} borderRadius={'15px'} mt={{base: '50px', md: '70px'}} >
            <Box p={'40px'} display={'flex'} alignItems={'center'} flexDirection={{base: 'column', lg: 'row'}} justifyContent={'space-around'} gap={{base: '1.6rem', md: '3rem',  lg: '10rem'}} >
                <Box display={'flex'} flexDirection={'column'} gap={{base: '10px', md: '15px'}}>
                    <Text textAlign={{base: 'center', md :'left'}} fontSize={{base: '25px', md: '30px'}} color={'#fff'} >Stay in the loop</Text>
                    <Text textAlign={{base: 'center', md :'left'}} w={{base: '100%', lg: '636px', md: '500px'}} color={'#fff'}>Subscribe to receive the latest news and updates about TDA.
                    We promise not to spam you! </Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Input style={{caretColor: '#DC7000'}} pattern="[a-z]{3}" title="Three letter country code" w={{base: '250px', md: '385px'}} h={{base: '40px', md: '48px'}} bg={'#fff'} placeholder='Enter Email Adress' />
                    <Button   zIndex={99} w={{base: '70px', md: '104px'}} h={{base: '30px', md: '39px'}} fontSize={{base: '12px', md: '18px '}} ml={{md:'-110px', base: '-74px'}} color={'#fff'} bg={'#DC7000'}>Continue</Button>
                </Box>
            </Box>
        </Box>
        </Box>



        
      </Box>
    </Box>
  )
}

export default Contact

