import { 
    AlertDialog, 
    Menu, 
    Popover, 
    Tooltip, 
    Modal, 
    Box, 
    VStack, 
    Text, 
    Pressable, 
    HStack, 
    Icon, 
    Divider, 
    Center, 
    useColorModeValue, 
    Switch, 
    Button, 
    Badge 
} from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const ConfigurationScreen = () => {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false); 
    const [isOpNotfications, setIsOpNotifications] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [isDeleteAlertifEnabled, setDeleteAlertEnabled] = React.useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false);
    const [activeModal, setActiveModal] = React.useState(null);

    const toggleSwitch = () => {
        setIsNotificationsEnabled(prev => !prev);
        if (!isNotificationsEnabled) {
            setIsOpNotifications(true);
        }
    };

    const openModal = (modalName) => {
        setIsMenuModalOpen(false);
        setActiveModal(modalName);
    };

    const closeModal = () => setActiveModal(null);
    const returnToMenu = () => {
        setActiveModal(null);
        setIsMenuModalOpen(true);
    };

    const onCloseNotif = () => setIsOpNotifications(false);
    const cancelRef = React.useRef(null);
    const onCloseDeleteAlert = () => setDeleteAlertEnabled(false);

    const bgColor = useColorModeValue('coolGray.100', 'coolGray.800');
    const textColor = useColorModeValue('light.text.900', 'dark.text.100');
    const iconColor = useColorModeValue('dar.icon.200', 'white');
    const boxColor = useColorModeValue('white', 'coolGray.700');
    const borderColor = useColorModeValue('muted.300', 'darkBlue.800');

    return (
        <Center flex={1} bg={bgColor}>
            <Box
                bg={boxColor}
                px={4}
                py={6}
                safeArea w="80%"
                maxW={400}
                borderLeftWidth={1}
                borderRightWidth={1}
                borderLeftColor={borderColor}
                borderRightColor={borderColor}
                borderRadius={10}
                Boxshadow={3}
            >
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Configuración
                </Text>
                <VStack space={4}>
                    {/* Notificaciones */}
                    <HStack alignItems="center" justifyContent="space-between">
                        <HStack alignItems="center" space={2}>
                            <Text fontSize="md">Notificaciones</Text>
                            <Switch onValueChange={toggleSwitch} isChecked={isNotificationsEnabled} />
                        </HStack>
                        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpNotfications} onClose={onCloseNotif}>
                            <AlertDialog.Content>
                                <AlertDialog.CloseButton />
                                <AlertDialog.Header>Notificaciones</AlertDialog.Header>
                                <AlertDialog.Body>Se enviarán notificaciones a partir de ahora.</AlertDialog.Body>
                                <AlertDialog.Footer>
                                    <Button.Group space={2}>
                                        <Button colorScheme="success" onPress={onCloseNotif}>
                                            Aceptar
                                        </Button>
                                    </Button.Group>
                                </AlertDialog.Footer>
                            </AlertDialog.Content>
                        </AlertDialog>
                        <Popover trigger={triggerProps => (
                            <Pressable {...triggerProps}>
                                <Icon as={MaterialIcons} name="info-outline" size="md" color={iconColor} />
                            </Pressable>
                        )}>
                            <Popover.Content accessibilityLabel="Información" w="130">
                                <Popover.Arrow />
                                <Popover.Header>Información</Popover.Header>
                                <Popover.Body>Activa las notificaciones</Popover.Body>
                            </Popover.Content>
                        </Popover>
                    </HStack>
                    <Divider />

                    {/* Opciones avanzadas */}
                    <HStack justifyContent="space-between" alignItems="center">
                        <Text fontSize="md">Opciones avanzadas</Text>
                        <Menu shadow={2} w="190" trigger={triggerProps => (
                            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                <Icon as={MaterialIcons} name="more-vert" size="md" color={iconColor} />
                            </Pressable>
                        )}>
                            <Menu.Item>Historial</Menu.Item>
                            <Menu.Item>Ir a perfil</Menu.Item>
                            <Menu.Item>Opción algo</Menu.Item>
                            <Menu.Item>Restaurar configuraciones</Menu.Item>
                            <Menu.Item>No sé</Menu.Item>
                            <Menu.Item isDisabled>Item Prieto</Menu.Item>
                        </Menu>
                    </HStack>
                    <Divider />

                    {/* Información general */}
                    <HStack justifyContent="space-between" alignItems="center">
                        <Pressable onPress={() => setShowModal(true)}>
                            <Text fontSize="md">Información general</Text>
                        </Pressable>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="400px">
                                <Modal.CloseButton />
                                <Modal.Header>Información general</Modal.Header>
                                <Modal.Body>
                                    <VStack space={2}>
                                        <Text>Esta pantalla fue creada por el equipo 4:</Text>
                                        <Text>Jose Sael Lopez Carrillo</Text>
                                        <Text>Alan Eduardo Guevara Hernandez</Text>
                                        <Text>Liliana Alejandra Bonilla Salas</Text>
                                        <Text>Michelle Guadalupe Villagomez Lopez</Text>
                                        <Text>Cesar de Jesus Alvarez Ortiz</Text>
                                    </VStack>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                                            Cerrar
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                        <Tooltip
                            label="Presiona para ver información interesante"
                            openDelay={5}
                            bg="blue.600"
                            color={textColor}
                            placement="left"
                        >
                            <Pressable>
                                <Icon as={MaterialIcons} name="help-outline" size="md" color={iconColor} />
                            </Pressable>
                        </Tooltip>
                    </HStack>
                    <Divider />

                    {/* Detalles adicionales */}
                    <Pressable onPress={() => setIsMenuModalOpen(true)}>
                        <Text fontSize="md" color="blue.500">
                            Detalles adicionales <Badge bg="blue.500" borderRadius={20}>WIP</Badge>
                        </Text>
                    </Pressable>

                    {/* Modal de Menú y otros */}
                    <Modal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)}>
                        <Modal.Content>
                            <Modal.CloseButton />
                            <Modal.Header>Detalles adicionales</Modal.Header>
                            <Modal.Body>
                                <VStack space={4}>
                                    <Button variant="ghost" onPress={() => openModal("terms")}>Términos y Condiciones</Button>
                                    <Button variant="ghost" onPress={() => openModal("privacy")}>Política de Privacidad</Button>
                                    <Button variant="ghost" onPress={() => openModal("license")}>Licencia</Button>
                                </VStack>
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>

                    {/* Otros Modales */}
                    {activeModal === "terms" && (
                        <Modal isOpen onClose={closeModal}>
                            <Modal.Content>
                                <Modal.Header>Términos y Condiciones</Modal.Header>
                                <Modal.Body>Lorem ipsum dolor sit amet...</Modal.Body>
                                <Modal.Footer>
                                    <Button onPress={closeModal}>Cerrar</Button>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    )}

                    {/* Continúa con el resto... */}
                </VStack>
            </Box>
        </Center>
    );
};

export default ConfigurationScreen;