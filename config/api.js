// API Configuration
import { Platform } from 'react-native';

// API Configuration
// IMPORTANT: Update this IP address to your computer's local IP address
// Your current IP: 192.168.0.14 (detected automatically)
// To find your IP manually:
// - Windows: Open CMD and type 'ipconfig', look for IPv4 Address
// - Mac/Linux: Open Terminal and type 'ifconfig' or 'ip addr', look for inet address

const YOUR_COMPUTER_IP = '192.168.0.14'; // Your computer's IP address

let API_BASE_URL;

if (__DEV__) {
  // Development mode
  if (Platform.OS === 'android') {
    // Android Emulator uses 10.0.2.2 to access host machine
    // For physical Android device, use your computer's IP
    // Change the line below if using a physical Android device:
    API_BASE_URL = `http://10.0.2.2:5000/api`; // For Android Emulator
    // API_BASE_URL = `http://${YOUR_COMPUTER_IP}:5000/api`; // Uncomment for physical Android device
  } else {
    // iOS Simulator can use localhost
    // For physical iOS device, use your computer's IP
    // Change the line below if using a physical iOS device:
    API_BASE_URL = `http://localhost:5000/api`; // For iOS Simulator
    // API_BASE_URL = `http://${YOUR_COMPUTER_IP}:5000/api`; // Uncomment for physical iOS device
  }
} else {
  // Production mode
  API_BASE_URL = 'https://your-production-url.com/api';
}

// FOR PHYSICAL DEVICE TESTING: Uncomment the line below and comment out the Platform-specific URLs above
// API_BASE_URL = `http://${YOUR_COMPUTER_IP}:5000/api`;

export default API_BASE_URL;

