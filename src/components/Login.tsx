import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react'
  
  export default function SimpleCard() {
    return (
    <Flex minH="100vh">
      <Flex
        flex="1"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

        <Image
          src="C:\desenvolvimento\project\fieg-logo.svg"
          alt="Imagem de fundo"
          objectFit="cover" 
          w="100%"
          h="100vh"
        />
        
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>GESCAD</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Lembrar</Checkbox> <br />
                  <Text color={'blue.400'}>Esqueci minha senha</Text>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
   
      <Box
        flex="1" 
        display={{ base: "none", md: "block" }} 
      >
        <Image
          src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem de fundo"
          objectFit="cover" 
          w="100%"
          h="100vh"
        />
      </Box>
    </Flex>
  );
}