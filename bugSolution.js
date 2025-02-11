```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
import LZString from 'lz-string'; // Example compression library

const storeData = async (key, value) => {
  try {
    const compressedValue = LZString.compress(JSON.stringify(value)); //Compress the data
    await AsyncStorage.setItem(key, compressedValue);
  } catch (e) {
    console.error('Failed to store data:', e);
  }
};

const getData = async (key) => {
  try {
    const compressedValue = await AsyncStorage.getItem(key);
    if (compressedValue !== null) {
      const decompressedValue = JSON.parse(LZString.decompress(compressedValue)); //Decompress the data
      return decompressedValue;
    } else {
      return null;
    }
  } catch (e) {
    console.error('Failed to retrieve data:', e);
    return null;
  }
};

//Example usage
const largeData = Array.from({length: 1000}, (_, i) => ({id: i, data: `Data ${i}`})); //Simulate large data
storeData('@myKey', largeData);

getData('@myKey').then(data => console.log('Retrieved data:', data));
```