import Connect from "./websocket"

import store from "@/store"

import onmessage from "./receive"

const ws = new Connect()

ws.onopen = () => {
  console.log('OPEN')
  ws.send({ data: "data" });
};

ws.onmessage = onmessage;

ws.onclose = () => {
  console.log('CLOSE')
  
  setTimeout(() => {
    console.log('TRY RECONNECT')
    ws.open(store.state.app.token)
  }, 5000)
};

export default ws