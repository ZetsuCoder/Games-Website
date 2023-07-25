import { new1, new2, new3, new4, new5, new6, new7, new8, new9 } from '@/assets'
import { Box, Button, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const Cards = () => {
  return (
    <Box w={'100%'} h={{md: '80%', lg: '100%', base : '100%'}} bg={'#020100'} pb={{base: '20px', md: '40px', lg: '0'}}>
      <Box w={{base: '90%', md: '80%'}}  className="center" pt={{base :'0', md:'30px', lg:'0'}}>
        <Box display={'flex'} justifyContent={'space-around'} flexDirection={{base: 'column', md: 'row'}} gap={{base: '2rem', md: '2rem', lg: '0'}}>
            {/* //left card// */}
            <Box w={{base :'100%', md: '400px', lg :'587px'}}>
                <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                    <Box><Image src={new2}></Image></Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#2351F5'} w={{base:'130px', md :'164px'}} h={{base :'42px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '380px', lg :'587px'}} color={'#fff'} display={'flex'} gap={{base:'10px', md: '1em', lg :'1.4em'}} flexDirection={'column'} >
                        <Heading fontWeight={'600'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text</Heading>
                        <Text fontWeight={'400'} lineHeight={'35px'} fontSize={{base :'15px', md:'17px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                        <Text fontWeight={'400'} lineHeight={'35px'} fontSize={{base :'15px', md:'17px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                    </Box>
                </Box>


                <Box py={{base:'30px', md:'40px', lg:'60px'}} color={'#A5A5A5'}><hr /> </Box>

                <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                    <Box><Image src={new3}></Image></Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#2351F5'} w={{base:'130px', md :'164px'}} h={{base :'42px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '380px', lg :'587px'}} color={'#fff'} display={'flex'} gap={{base:'10px', md: '1em', lg :'1.4em'}} flexDirection={'column'} >
                        <Heading fontWeight={'600'} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text</Heading>
                        <Text fontWeight={'400'} lineHeight={'35px'} fontSize={{base :'15px', md:'17px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                    </Box>
                </Box>
            </Box>

            {/* right card */}
            <Box display={{base:'flex',md: 'none', lg: 'flex'}} flexDirection={'column'} gap={{base :'2em', md:'3rem'}}>
                <Box display={'flex'} alignItems={'center'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box><Image src={new4} alt='img no found'></Image></Box>

                    <Box display={'flex'}  flexDirection={'column'} gap={{base :'10px',md :'1.4rem'}}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={{base:'130px', md :'164px'}} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '100%', lg:'392px'}}><Text color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '23px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box><Image src={new5} alt='img no found'></Image></Box>

                    <Box display={'flex'}  flexDirection={'column'} gap={{base :'10px',md :'1.4rem'}}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={{base:'130px', md :'164px'}} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '350px', lg:'392px'}}><Text color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '23px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box><Image src={new6} alt='img no found'></Image></Box>

                    <Box display={'flex'}  flexDirection={'column'} gap={{base :'10px',md :'1.4rem'}}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={{base:'130px', md :'164px'}} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '350px', lg:'392px'}}><Text color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '23px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box><Image src={new7} alt='img no found'></Image></Box>

                    <Box display={'flex'}  flexDirection={'column'} gap={{base :'10px',md :'1.4rem'}}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={{base:'130px', md :'164px'}} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '350px', lg:'392px'}}><Text color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '23px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box><Image src={new8} alt='img no found'></Image></Box>

                    <Box display={'flex'}  flexDirection={'column'} gap={{base :'10px',md :'1.4rem'}}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={{base:'130px', md :'164px'}} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '350px', lg:'392px'}}><Text color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '23px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box><Image src={new9} alt='img no found'></Image></Box>

                    <Box display={'flex'}  flexDirection={'column'} gap={{base :'10px',md :'1.4rem'}}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={{base:'130px', md :'164px'}} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '350px', lg:'392px'}}><Text color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '23px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box><Image src={new1} alt='img no found'></Image></Box>

                    <Box display={'flex'}  flexDirection={'column'} gap={{base :'10px',md :'1.4rem'}}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={{base:'130px', md :'164px'}} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    <Box w={{base :'100%', md: '350px', lg:'392px'}}><Text color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '23px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                    </Box>
                </Box>


            </Box>



            {/* ipad  media */}

            <Box display={{base:'none',md: 'flex', lg: 'none'}} flexDirection={'column'} gap={'2.5rem'}>
                <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box ><Image  src={new4} alt='img no found'></Image></Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={'120px'} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    
                    <Box w={{base :'100%', md: '100%', lg:'392px'}}><Text textAlign={'center'} color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '18px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box ><Image  src={new5} alt='img no found'></Image></Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={'120px'} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    
                    <Box w={{base :'100%', md: '100%', lg:'392px'}}><Text textAlign={'center'} color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '18px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box ><Image  src={new6} alt='img no found'></Image></Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={'120px'} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    
                    <Box w={{base :'100%', md: '100%', lg:'392px'}}><Text textAlign={'center'} color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '18px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={{base :'20px', md :'1em', lg :'2rem'}}>
                    <Box ><Image  src={new7} alt='img no found'></Image></Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Button color={'#fff'} bg={'#FF8484'} w={'120px'} h={{base :'38px', md: '48px'}}>John smash</Button>
                        <Text color={'#fff'}>.5min</Text>
                    </Box>
                    
                    <Box w={{base :'100%', md: '100%', lg:'392px'}}><Text textAlign={'center'} color={'#fff'} fontWeight={'700'} fontSize={{base: '14px', md: '18px'}} lineHeight={'normal'}>Lorem Ipsum is simply dummy text dummy text ? </Text>
                    </Box>
                </Box>
               
                


            </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default Cards

                                