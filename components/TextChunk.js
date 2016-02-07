import Chunk from './Chunk';

export default class TextChunk extends Chunk {
	constructor(text) {
		super();
		this.type = 'text';
		this.text = text || '';
	}

	length() {
		return this.text.length;
	}
}