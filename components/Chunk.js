export default class Chunk {
	constructor() {
		if (new.target === Chunk) {
	      throw new TypeError("Cannot construct Chunk instances directly");
	    }
	}

	length() {
		return 0;
	}

	getType() {
		return this.type;
	}
};