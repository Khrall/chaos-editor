import {Article, TextChunk} from '../../components';

describe('InsertString Functionality', () => {

	it('Should be able to insert into empty Article', () => {
		let article = new Article();
		let textChunk = new TextChunk();
		article.append(textChunk);

		article.insertString('Hello world!', 0);

		textChunk.text.should.equal('Hello world!');
	});

	it('Should be able to insert into new chunk', () => {
		let article = new Article();

		article.append(new TextChunk('Lorem ipsum.'));
		let newChunk = new TextChunk('');
		article.append(newChunk);

		article.insertString('Dolor sit amet.', 13);

		newChunk.text.should.equal('Dolor sit amet.');
	});

});