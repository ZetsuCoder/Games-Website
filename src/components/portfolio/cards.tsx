import { per1, per2, per3 } from '@/assets'
import { Box, Text,Grid } from '@chakra-ui/react'
import Image from 'next/image'


const Cards = () => {
  return (
    <Box w={'100%'} bg={'#1C140F'} h={{lg:'70vh', md :'100%', base: '100%'}}>
      <Box w={{base: '90%', md: '80%', lg: '80%'}} className="center">
        <Box w={{base: '100%', md: '447px'}} className='center' color={'#fff'} display={'flex'} flexDirection={'column'} gap={{base: '1em', md : '1.5em'}} textAlign={'center'} pt={{base: '40px', md :'70px'}}>
            <Text fontSize={{base: '30px', md: '35px'}} fontWeight={'500'} lineHeight={'50px'}>Trusted by Thousands of Happy Customer</Text>
            <Text fontSize={{base: '12px', md: '14px'}} fontWeight={'400'} lineHeight={'30px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</Text>
        </Box>
        <Box>
            <Grid pt={{base:'30px', md: '70px'}} justifyContent={'center'} alignItems={'center'} gridTemplateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)',lg: 'repeat(3, 1fr)'}} gap={{md: '10px', lg: '0', base :'1em'}}>
                <Box w={{base: '100%', md: '350px', lg: '400px'}} h={{md:'230px', base: '200px'}} px={{base:'10px', md: '20px'}} py={{base: '10px', md: '20px'}} border={'1px'} borderColor={'#DC7000'} borderRadius={'10px'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                            <Box>
                            <Image src={per1} alt='img not found' />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'}>
                            <Text fontSize={{base: '16px', md: '18px'}} color={'#fff'} fontWeight={'500'} lineHeight={'normal'}>Viezh Robert</Text>
                            <Text fontSize={{base: '16px', md: '18px'}} fontWeight={'500'} lineHeight={'normal'} color={'#4F5665'}>Warsaw, Poland</Text>
                            </Box>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                            <Text fontSize={{base: '16px', md: '18px'}} color={'#fff'} fontWeight={'500'} lineHeight={'normal'}>4.5</Text>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M14.1891 6.16515L10.2219 5.58859L8.44844 1.99328C8.4 1.89484 8.32031 1.81515 8.22187 1.76672C7.975 1.64484 7.675 1.7464 7.55156 1.99328L5.77812 5.58859L1.81094 6.16515C1.70156 6.18078 1.60156 6.23234 1.525 6.31047C1.43244 6.4056 1.38143 6.53359 1.38319 6.66631C1.38495 6.79904 1.43933 6.92563 1.53437 7.01828L4.40469 9.81672L3.72656 13.7683C3.71066 13.8602 3.72083 13.9547 3.75592 14.0412C3.79102 14.1276 3.84963 14.2025 3.92511 14.2573C4.00059 14.3121 4.08992 14.3447 4.18297 14.3513C4.27602 14.358 4.36907 14.3384 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3464 11.7578 14.3636 11.8656 14.3448C12.1375 14.298 12.3203 14.0402 12.2734 13.7683L11.5953 9.81672L14.4656 7.01828C14.5437 6.94172 14.5953 6.84172 14.6109 6.73234C14.6531 6.4589 14.4625 6.20578 14.1891 6.16515Z" fill="#FEA250"/>
                            </svg>
                        </Box>
                    </Box>

                    <Box pt={'15px'}>
                        <Text  fontSize={{base: '12px', md: '14px'}} fontWeight={'400'} lineHeight={'30px'} color={'#fff'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                    </Box>
                </Box>
                <Box w={{base: '100%', md: '350px', lg: '400px'}} h={{md:'230px', base: '200px'}} px={{base:'10px', md: '20px'}} py={{base: '10px', md: '20px'}} border={'1px'} borderColor={'#DC7000'} borderRadius={'10px'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                            <Box>
                            <Image src={per2} alt='img not found' />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'}>
                            <Text fontSize={{base: '16px', md: '18px'}} color={'#fff'} fontWeight={'500'} lineHeight={'normal'}>Yessica Christy</Text>
                            <Text fontSize={{base: '16px', md: '18px'}} fontWeight={'500'} lineHeight={'normal'} color={'#4F5665'}>Shanxi, China</Text>
                            </Box>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                            <Text fontSize={{base: '16px', md: '18px'}} color={'#fff'} fontWeight={'500'} lineHeight={'normal'}>4.5</Text>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M14.1891 6.16515L10.2219 5.58859L8.44844 1.99328C8.4 1.89484 8.32031 1.81515 8.22187 1.76672C7.975 1.64484 7.675 1.7464 7.55156 1.99328L5.77812 5.58859L1.81094 6.16515C1.70156 6.18078 1.60156 6.23234 1.525 6.31047C1.43244 6.4056 1.38143 6.53359 1.38319 6.66631C1.38495 6.79904 1.43933 6.92563 1.53437 7.01828L4.40469 9.81672L3.72656 13.7683C3.71066 13.8602 3.72083 13.9547 3.75592 14.0412C3.79102 14.1276 3.84963 14.2025 3.92511 14.2573C4.00059 14.3121 4.08992 14.3447 4.18297 14.3513C4.27602 14.358 4.36907 14.3384 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3464 11.7578 14.3636 11.8656 14.3448C12.1375 14.298 12.3203 14.0402 12.2734 13.7683L11.5953 9.81672L14.4656 7.01828C14.5437 6.94172 14.5953 6.84172 14.6109 6.73234C14.6531 6.4589 14.4625 6.20578 14.1891 6.16515Z" fill="#FEA250"/>
                            </svg>
                        </Box>
                    </Box>

                    <Box pt={'15px'}>
                    <Text  fontSize={{base: '12px', md: '14px'}} fontWeight={'400'} lineHeight={'30px'} color={'#fff'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                    </Box>
                </Box>
                <Box w={{md:'0%', base: '100%', lg: '100%'}} className='center'>
                <Box  w={{base: '100%', md: '350px', lg: '400px'}} h={{md:'230px', base: '200px'}} px={{base:'10px', md: '20px'}} py={{base: '10px', md: '20px'}} border={'1px'} borderColor={'#DC7000'} borderRadius={'10px'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                            <Box>
                            <Image src={per3} alt='img not found' />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'}>
                            <Text fontSize={{base: '16px', md: '18px'}} color={'#fff'} fontWeight={'500'} lineHeight={'normal'}>Kim Young Jou</Text>
                            <Text fontSize={{base: '16px', md: '18px'}} fontWeight={'500'} lineHeight={'normal'} color={'#4F5665'}>Seoul, South Korea</Text>
                            </Box>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                            <Text fontSize={{base: '16px', md: '18px'}} color={'#fff'} fontWeight={'500'} lineHeight={'normal'}>4.5</Text>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M14.1891 6.16515L10.2219 5.58859L8.44844 1.99328C8.4 1.89484 8.32031 1.81515 8.22187 1.76672C7.975 1.64484 7.675 1.7464 7.55156 1.99328L5.77812 5.58859L1.81094 6.16515C1.70156 6.18078 1.60156 6.23234 1.525 6.31047C1.43244 6.4056 1.38143 6.53359 1.38319 6.66631C1.38495 6.79904 1.43933 6.92563 1.53437 7.01828L4.40469 9.81672L3.72656 13.7683C3.71066 13.8602 3.72083 13.9547 3.75592 14.0412C3.79102 14.1276 3.84963 14.2025 3.92511 14.2573C4.00059 14.3121 4.08992 14.3447 4.18297 14.3513C4.27602 14.358 4.36907 14.3384 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3464 11.7578 14.3636 11.8656 14.3448C12.1375 14.298 12.3203 14.0402 12.2734 13.7683L11.5953 9.81672L14.4656 7.01828C14.5437 6.94172 14.5953 6.84172 14.6109 6.73234C14.6531 6.4589 14.4625 6.20578 14.1891 6.16515Z" fill="#FEA250"/>
                            </svg>
                        </Box>
                    </Box>

                    <Box pt={'15px'}>
                    <Text  fontSize={{base: '12px', md: '14px'}} fontWeight={'400'} lineHeight={'30px'} color={'#fff'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                    </Box>
                </Box>

                </Box>
            </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Cards
