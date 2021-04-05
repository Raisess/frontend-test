import EventEmitter from "events";

class Emitter extends EventEmitter {}

const emitter: Emitter = new Emitter();

export default emitter;

