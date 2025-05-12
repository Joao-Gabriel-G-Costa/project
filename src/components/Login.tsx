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
      <Flex h="100vh" overflow="hidden">
      <Flex
        flex="1"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}>
        
        <Stack
          spacing={6}
          mx="auto"
          maxW="lg"
          py={4}
          px={6}
          w="100%"
          align="center"
          justify="center"
        >
          <Image
            src="/logofieg.png"
            alt="Logo FIEG"
            objectFit="contain"
            w="150px"
            h="auto"
          />
    
          <Heading fontSize="3xl" textAlign="center">GESCAD</Heading>
    
          <Box
            rounded="lg"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            p={6}
            w="100%"
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
    
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" />
              </FormControl>
    
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align="start"
                  justify="space-between"
                >
                  <Checkbox>Lembrar</Checkbox>
                  <Text color="blue.400">Esqueci minha senha</Text>
                </Stack>
                <Button
                  bg="blue.400"
                  color="white"
                  _hover={{ bg: 'blue.500' }}
                >
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    
      <Box flex="1" display={{ base: 'none', md: 'block' }}>
        <Image
          src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=1530&auto=format&fit=crop"
          alt="Imagem de fundo"
          objectFit="cover"
          w="100%"
          h="100vh"
        />
      </Box>
    </Flex>
    
  );
}