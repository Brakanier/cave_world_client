
class Connect{
    constructor() {
        console.log(process.env.VUE_APP_BASE_WS_URL)
        this.token = "";
        this.socket = null;
    }
    close() {
        this.socket.close()
    }
    open(token) {
        if (this.socket === null || this.socket.readyState != this.socket.OPEN) {
            this.socket = new WebSocket(`${process.env.VUE_APP_BASE_WS_URL}/${token}`);
            this.socket.onopen = e => this.onopen(e);
            this.socket.onmessage = e => this.onmessage({...e, ...{data: JSON.parse(e.data)}});
            this.socket.onclose = e => this.onclose(e);
        }
    }
    send(data) {
        return new Promise((resolve) => {
            this.socket.send(JSON.stringify(data))
            resolve(true);
        })
        
    }
}



export default Connect