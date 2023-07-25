import { Box, Text , Button, Heading } from "@chakra-ui/react"


const Card = () => {
  return (
    <Box w={'100%'} bg={'#020100'} h={{lg:'60vh',md :'100%', base: '100%'}}>
      <Box w={{base: '90%', md: '80%', lg: '80%'}} className="center" pt={{base: '40px', md: '40px', lg: '0'}} pb={{base: '50px', md: '40px', lg: '0'}}>
        <Box>
          <Heading color={'#fff'} textAlign={{base: 'center', md: 'left'}}>Why work with us</Heading>
        </Box>
        <Box display={{lg:'flex', base: 'flex', md: 'none'}} justifyContent={'space-between'} alignItems={'center'} flexDirection={{base: 'column', md: 'row'}} pt={{base: '50px', md: '80px'}} gap={{base: '2rem', lg: '0'}}>
          <Box  className="card" display={'flex'} flexDirection={'column'}  w={{base: '270px', md :'378px'}} h={{base: '300px', md: '348px'}} bg={'#1C140F'} px={{lg:'40px', base: '30px'}} py={{lg:'60px', base: '43px'}} gap={{base: '1em', md: '1.6rem'}}>
            <Button borderRadius={'8px'} color={'#fff'} bg={'rgba(176, 0, 220, 0.11);'} w={'170px'}> <a href="https://www.imdb.com/title/tt10872600/"> Watch Movie</a></Button>
            <Text color={'#fff'} fontSize={{base: '18px',md: '20px'}} fontWeight={'500'} >Spiderman</Text>
            <Text color={'#fff'}  fontSize={{base: '12px',md: '14px'}} fontWeight={'500'} >* Spider-Man's real name is Peter Benjamin Parker. * His various nicknames and aliases include Friendly Neighborhood Spider-Man.</Text>
          </Box>
          <Box  className="card" display={'flex'} flexDirection={'column'}  w={{base: '270px', md :'378px'}} h={{base: '300px', md: '348px'}} bg={'#1C140F'} px={{lg:'40px', base: '30px'}} py={{lg:'60px', base: '43px'}} gap={{base: '1em', md: '1.6rem'}}>
            <Button borderRadius={'8px'} color={'#fff'} bg={'rgba(220, 66, 0, 0.11);'} w={'170px'}> <a href="https://www.kinopoisk.ru/film/463634/?utm_referrer=www.google.com"> Watch Movie</a></Button>
            <Text color={'#fff'} fontSize={{base: '18px',md: '20px'}} fontWeight={'500'} >Venom</Text>
            <Text color={'#fff'}  fontSize={{base: '12px',md: '14px'}} fontWeight={'500'} >Venom, the poisonous secretion of an animal, produced by specialized glands that are often associated with spines, teeth, stings, or other piercing devices.</Text>
          </Box>
          <Box  className="card" display={'flex'} flexDirection={'column'}  w={{base: '270px', md :'378px'}} h={{base: '300px', md: '348px'}} bg={'#1C140F'} px={{lg:'40px', base: '30px'}} py={{lg:'60px', base: '43px'}} gap={{base: '1em', md: '1.6rem'}}>
            <Button borderRadius={'8px'} color={'#fff'} bg={'rgba(0, 220, 141, 0.11);'} w={'170px'}> <a href="https://www.transformersmovie.com/">Watch Movie</a></Button>
            <Text color={'#fff'} fontSize={{base: '18px',md: '20px'}} fontWeight={'500'} >Transfromers</Text>
            <Text color={'#fff'}  fontSize={{base: '12px',md: '14px'}} fontWeight={'500'} >A transformer is a device that transfers electric energy from one alternating-current circuit to one or more other circuits, either increasing (stepping up) or reducing (stepping down) the voltage</Text>
          </Box>
        </Box>





        <Box display={{lg:'none', base: 'none', md: 'flex'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} pt={{base: '20px', md: '80px'}} gap={'1em'}>
          <Box display={'flex'} justifyContent={'space-between'} gap={'1em'}>
          <Box  className="card" display={'flex'} flexDirection={'column'}  w={'310px'} h={{base: '310px', md: '348px'}} bg={'#1C140F'} px={'30px'} py={'50px'} gap={{base: '1em', md: '1.6rem'}}>
            <Button borderRadius={'8px'} color={'#fff'} bg={'rgba(176, 0, 220, 0.11);'} w={'170px'}> <a href="https://www.imdb.com/title/tt10872600/"> Watch Movie</a></Button>
            <Text color={'#fff'} fontSize={{base: '18px',md: '20px'}} fontWeight={'500'} >Spiderman</Text>
            <Text color={'#fff'}  fontSize={{base: '12px',md: '14px'}} fontWeight={'500'} >* Spider-Man's real name is Peter Benjamin Parker. * His various nicknames and aliases include Friendly Neighborhood Spider-Man.</Text>
          </Box>
          <Box  className="card" display={'flex'} flexDirection={'column'}  w={'310px'} h={{base: '310px', md: '348px'}} bg={'#1C140F'} px={'30px'} py={'50px'} gap={{base: '1em', md: '1.6rem'}}>
            <Button borderRadius={'8px'} color={'#fff'} bg={'rgba(220, 66, 0, 0.11);'} w={'170px'}> <a href="https://www.kinopoisk.ru/film/463634/?utm_referrer=www.google.com"> Watch Movie</a></Button>
            <Text color={'#fff'} fontSize={{base: '18px',md: '20px'}} fontWeight={'500'} >Venom</Text>
            <Text color={'#fff'}  fontSize={{base: '12px',md: '14px'}} fontWeight={'500'} >Venom, the poisonous secretion of an animal, produced by specialized glands that are often associated with spines, teeth, stings, or other piercing devices.</Text>
          </Box>

          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box  className="card" display={'flex'} flexDirection={'column'}  w={'310px'} h={{base: '310px', md: '348px'}} bg={'#1C140F'} px={'30px'} py={'40px'} gap={{base: '1em', md: '1.5rem'}}>
            <Button  borderRadius={'8px'} color={'#fff'} bg={'rgba(0, 220, 141, 0.11);'} w={'170px'}> <a href="https://www.transformersmovie.com/">Watch Movie</a></Button>
            <Text color={'#fff'} fontSize={{base: '18px',md: '20px'}} fontWeight={'500'} >Transfromers</Text>
            <Text color={'#fff'}  fontSize={{base: '12px',md: '14px'}} fontWeight={'500'} >A transformer is a device that transfers electric energy from one alternating-current circuit to one or more other circuits, either increasing (stepping up) or reducing (stepping down) the voltage</Text>
          </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
