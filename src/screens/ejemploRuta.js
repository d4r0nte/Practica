//Ejemplo de como añadi la ruta al app.js
//Espero sea de ayuda
const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }else if(route.name === 'Profile'){
            iconName = focused ? 'person-circle' : 'person-circle-outline';


            //aqui se añadio el icono para el tab bar
          }else if(route.name === 'Configuration'){
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      })} 
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />

  //se añade tambien la ruta del componente al tab navigator
      <Tab.Screen name="Configuration" component={ConfigurationScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
