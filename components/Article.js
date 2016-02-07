import _ from 'lodash';

export default class Article {
	constructor() {
		this.content = { 
			sections: [{
				chunks: []
			}] 
		};
	}

	/** GETTERS  **/
	length() {
		let counter = 0;
		for(var section of this.content.sections) {
			for(var chunk of section.chunks) {
				counter += chunk.length() + 1;
			}
		}
		if(counter > 0) counter--;
		return counter;
	}

	firstSection() {
		return this.content.sections[0];
	}

	lastSection() {
		return _.last(this.content.sections);
	}

	firstChunk() {
		return this.firstSection().chunks[0];
	}

	lastChunk() {
		return _.last(this.lastSection().chunks);
	}


	/** MANIPULATION **/
	append(chunk) {
		let lastChunk = this.lastChunk();

		if(lastChunk) {
			chunk.previousChunk = lastChunk;
			lastChunk.nextChunk = chunk;
		}

		this.lastSection().chunks.push(chunk);
		chunk.parent = this.lastSection();
	}


	remove(chunk) {
		console.log('--- REMOVING ---')
		if(chunk.previousChunk) chunk.previousChunk.nextChunk = chunk.nextChunk;
		if(chunk.nextChunk) chunk.nextChunk.previousChunk = chunk.previousChunk;
		_.remove(chunk.parent.chunks, chunk);
	}


	backspace(start, end) {
		let counter = 0;

		let chunk = this.firstChunk();

		// 1. Search for start chunk
		while(counter + chunk.length() < start) {
			counter += chunk.length() + 1;
			chunk = chunk.nextChunk;
		}

		// 2. Found it
		let startChunk = chunk;
		let startOffset = start - counter;
		
		// 3. Search for end chunk
		while(counter + chunk.length() < end) {
			counter += chunk.length() + 1;
			chunk = chunk.nextChunk;
		}

		// 4. Found it
		let endChunk = chunk;
		let endOffset = end - counter;

		// 5. Remove stuff
		while(startChunk != endChunk) {
			let nextChunk = startChunk.nextChunk;
			if(nextChunk != endChunk) this.remove(nextChunk);
			else {
				// Merge and remove
				endOffset += startChunk.length();
				startChunk.text = startChunk.text + endChunk.text;
				this.remove(endChunk);
				endChunk = startChunk;
			}
		}

			
		/**
		 * If startOffset != endOffset: The selection should be removed.
		 * 
		 * If startOffset == endOffset: No selection, one character should be removed. 
		 * Furthermore, if startOffset == 0 the previous chunk should be removed, or merged.
		 * Furthermore, if there is no previous chunk, no action should be taken.
		 */

		if(startOffset != endOffset) {
			startChunk.text = startChunk.text.slice(0, startOffset) + startChunk.text.slice(endOffset);
		}

		else { // startOffset == endOffset
			
			if(startOffset == 0) { // Merge chunks
				let prevChunk = startChunk.previousChunk;
				if(!prevChunk) return; 
				prevChunk.text = prevChunk.text + startChunk.text;
				this.remove(startChunk);
			} else {
				startChunk.text = startChunk.text.slice(0, startOffset-1) + startChunk.text.slice(startOffset);	
			}
		}
	}


	insertString(str, at) {
		let chunk = this.firstChunk();
		let counter = 0;
		while(counter + chunk.length() < at) {
			counter += chunk.length() + 1;
			chunk = chunk.nextChunk;
		}

		let offset = at - counter;
		chunk.text = chunk.text.slice(0, offset) + str + chunk.text.slice(offset);
	}
};