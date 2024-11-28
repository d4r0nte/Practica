import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, VStack, FormControl, Input, Button, Center, Link } from 'native-base';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    onLogin(); // Llama a la función pasada por props para cambiar el estado de autenticación
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="4">
          Bienvenido
        </Text>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo Electrónico</FormControl.Label>
            <Input
              placeholder="Ingresa tu correo"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input
              placeholder="Ingresa tu contraseña"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <Link
              _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }}
              alignSelf="flex-end"
              mt="1"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
            Iniciar Sesión
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
