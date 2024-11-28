import React, { useState } from 'react';
import {
  Box,
  Text,
  Pressable,
  VStack,
  Badge,
  Divider,
  Center,
  Heading,
} from 'native-base';

export default function TabTwoScreen() {
  const [badgeCount, setBadgeCount] = useState(3);

  const handleButtonClick = () => {
    setBadgeCount(badgeCount + 1);
  };

  return (
    <Box p={4} flex={1} bg="white">
      <VStack space={4}>
        {/* Badge Section */}
        <Heading size="md">Badge</Heading>
        <Text>
          El componente Badge se utiliza para mostrar una pequeña etiqueta con un número o texto. 
          Es comúnmente usado para notificaciones o para mostrar cantidades.
        </Text>

        {/* Button with Badge */}
        <Center>
          <Box position="relative">
            <Pressable
              onPress={handleButtonClick}
              bg="primary.600"
              px={4}
              py={2}
              rounded="md"
            >
              <Text color="white">Explore</Text>
            </Pressable>
            <Badge
              colorScheme="danger"
              rounded="full"
              mb={-4}
              mr={-4}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              position="absolute"
              top={-10}
              right={-5}
            >
              {badgeCount}
            </Badge>
          </Box>
        </Center>

        <Divider my={4} />

        {/* Divider Section */}
        <Heading size="md">Divider</Heading>
        <Text>
          El componente Divider crea una línea divisoria que se utiliza para separar 
          visualmente diferentes secciones de contenido.
        </Text>

        {/* List of names */}
        <Text bold>Lista de nombres:</Text>
        <VStack space={2} mt={2}>
          <Text>Salmerón Rodríguez Jonathan Alexis – 20151671</Text>
          <Divider />
          <Text>Cardona Zúñiga Yahaira Viviana – 19150308</Text>
          <Divider />
          <Text>Ruvalcaba Brayan Sebastián – 19150358</Text>
          <Divider />
          <Text>Espinosa Martínez Antonio Alejandro – 19151676</Text>
          <Divider />
          <Text>García García Oscar Adrían - 19150345</Text>
        </VStack>
      </VStack>
    </Box>
  );
}