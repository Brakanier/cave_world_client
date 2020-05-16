
class Connect{
    constructor(url, token) {
        this.url = url;
        this.token = token;
        this.socket = null;
    }
    close() {
        this.socket.close()
    }
    open() {
        if (this.socket === null || this.socket.readyState != this.socket.OPEN) {
            this.socket = new WebSocket(`${this.url}/${this.token}`);
            this.socket.onopen = e => this.onopen(e);
            this.socket.onmessage = e => this.onmessage({...e, ...{data: JSON.parse(e.data)}});
            this.socket.onclose = e => this.onclose(e);
        }
    }
    send(data) {
        this.socket.send(JSON.stringify(data))
    }
}

export default Connect