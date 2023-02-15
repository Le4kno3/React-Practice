export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  // remove the "StrictMode" of React Development environment to get the correct results, it is generally in "src/index.tsx" file.
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...'
      )
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl)
    }
  }
}
