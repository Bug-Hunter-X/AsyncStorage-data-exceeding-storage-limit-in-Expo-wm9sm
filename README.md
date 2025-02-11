# AsyncStorage Data Limit Exceeded in Expo

This repository demonstrates a common issue encountered when using AsyncStorage in Expo applications: exceeding the maximum storage capacity. The error is often cryptic and not immediately apparent.

The `bug.js` file showcases how attempting to store excessive data leads to unexpected behavior.

The `bugSolution.js` file provides a solution to overcome this limitation by optimizing data storage.

## Solution

The solution involves several approaches:

1. **Data Compression:** Before storing data in AsyncStorage, compress it using libraries like `zlib` or `lz-string` to reduce its size.
2. **Data Splitting:** Split large data into smaller chunks and store each chunk separately, retrieving them as needed.
3. **Alternative Storage:** For larger datasets, consider using alternative storage solutions like SQLite or cloud storage (e.g., Firebase).
4. **Data Migration:** If you need to upgrade the app with more data consider data migration techniques.