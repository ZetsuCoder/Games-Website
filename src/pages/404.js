import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
    return(
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} minH={'100vh'} gap={'10px'}>
            <Heading>404 This page could not found</Heading>
            <Heading>👇Go to the Homepage👇</Heading>
            <Heading className="link"><Link href="/">Homepage</Link></Heading>
        </Box>
        ) 
        
    
  }