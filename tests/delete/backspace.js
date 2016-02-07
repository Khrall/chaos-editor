import {Article, TextChunk} from '../../components';

describe('Backspace Functionality', () => {

	describe('Single text chunk:', () => {

		describe('Backspace at (0, 0)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk = new TextChunk('Lorem ipsum dolor sit amet.');
			article.append(textChunk);

			article.backspace(0, 0);

			it('Should have correct length', () => {
				article.length().should.equal(27);
			});

			it('Should have text: "Lorem ipsum dolor sit amet."', () => {
				textChunk.text.should.equal('Lorem ipsum dolor sit amet.');
			});
		});


		describe('Backspace at (13, 13)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Some Position
			 */
			let article = new Article();
			let textChunk = new TextChunk('Lorem ipsum dolor sit amet.');
			article.append(textChunk);

			article.backspace(13, 13);
			
			it('Should have correct length', () => {
				article.length().should.equal(26);
			});

			it('Should have text: "Lorem ipsum olor sit amet."', () => {
				textChunk.text.should.equal('Lorem ipsum olor sit amet.');
			});
		});


		describe('Backspace at (27, 27)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From End To End
			 */
			let article = new Article();
			let textChunk = new TextChunk('Lorem ipsum dolor sit amet.');
			article.append(textChunk);

			article.backspace(27, 27);

			it('Should have correct length', () => {
				article.length().should.equal(26);
			});

			it('Should have text: "Lorem ipsum dolor sit amet"', () => {
				textChunk.text.should.equal('Lorem ipsum dolor sit amet');
			});
		});


		describe('Backspace at (0, 6)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Multiple backspaces from start
			 */
			let article = new Article();
			let textChunk = new TextChunk('Lorem ipsum dolor sit amet.');
			article.append(textChunk);

			article.backspace(0, 6);

			it('Should have correct length', () => {
				article.length().should.equal(21);
			});
			
			it('Should have text: "ipsum dolor sit amet"', () => {
				textChunk.text.should.equal('ipsum dolor sit amet.');
			});
		});


		describe('Backspace at (6, 18)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Multiple backspaces from start
			 */
			let article = new Article();
			let textChunk = new TextChunk('Lorem ipsum dolor sit amet.');
			article.append(textChunk);

			article.backspace(6, 18);

			it('Should have correct length', () => {
				article.length().should.equal(15);
			});
			
			it('Should have text: "Lorem sit amet."', () => {
				textChunk.text.should.equal('Lorem sit amet.');
			});
		});

	});




	describe('Double text chunk:', () => {

		describe('Backspace at (0, 0)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.');
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.');

			article.append(textChunk1);
			article.append(textChunk2);

			article.backspace(0, 0);

			it('Should have correct length', () => {
				article.length().should.equal(27+1+39);
			});

			it('First chunk should have text: "Lorem ipsum dolor sit amet."', () => {
				textChunk1.text.should.equal('Lorem ipsum dolor sit amet.');
			});

			it('Second chunk should have text: "Duis laboris adipisicing tempor tempor."', () => {
				textChunk2.text.should.equal('Duis laboris adipisicing tempor tempor.');
			});
		});


		describe('Backspace at (0, 18)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.');
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.');

			article.append(textChunk1);
			article.append(textChunk2);

			article.backspace(0, 18);

			it('Should have correct length', () => {
				article.length().should.equal(9+1+39);
			});

			it('First chunk should have text: "sit amet."', () => {
				textChunk1.text.should.equal('sit amet.');
			});

			it('Second chunk should have text: "Duis laboris adipisicing tempor tempor."', () => {
				textChunk2.text.should.equal('Duis laboris adipisicing tempor tempor.');
			});
		});


		describe('Backspace at (6, 18)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.');
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.');

			article.append(textChunk1);
			article.append(textChunk2);

			article.backspace(6, 18);

			it('Should have correct length', () => {
				article.length().should.equal(15+1+39);
			});

			it('First chunk should have text: "Lorem sit amet."', () => {
				textChunk1.text.should.equal('Lorem sit amet.');
			});

			it('Second chunk should have text: "Duis laboris adipisicing tempor tempor."', () => {
				textChunk2.text.should.equal('Duis laboris adipisicing tempor tempor.');
			});
		});


		describe('Backspace at (27, 27)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.');
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.');

			article.append(textChunk1);
			article.append(textChunk2);

			article.backspace(27, 27);

			it('Should have correct length', () => {
				article.length().should.equal(26+1+39);
			});

			it('First chunk should have no text: "Lorem ipsum dolor sit amet"', () => {
				textChunk1.text.should.equal('Lorem ipsum dolor sit amet');
			});

			it('Second chunk should have text: "Duis laboris adipisicing tempor tempor."', () => {
				textChunk2.text.should.equal('Duis laboris adipisicing tempor tempor.');
			});
		});


		describe('Backspace at (28, 28)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.');
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.');

			article.append(textChunk1);
			article.append(textChunk2);

			article.backspace(28, 28);

			it('Should have correct length', () => {
				article.length().should.equal(27+39);
			});

			it('First chunk should have both texts: "Lorem ipsum dolor sit amet.Duis laboris adipisicing tempor tempor."', () => {
				textChunk1.text.should.equal('Lorem ipsum dolor sit amet.Duis laboris adipisicing tempor tempor.');
			});

			it('Article should only contain one text chunk.', () => {
				article.firstSection().chunks.length.should.equal(1);
			});

			it('Article\'s only chunk should be first text chunk.', () => {
				article.firstChunk().should.equal(textChunk1);
			});
		});


		describe('Backspace at (41, 53)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.');
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.');

			article.append(textChunk1);
			article.append(textChunk2);

			article.backspace(41, 53);

			it('Should have correct length', () => {
				article.length().should.equal(27+1+27);
			});

			it('First chunk should have text: "Lorem ipsum dolor sit amet."', () => {
				textChunk1.text.should.equal('Lorem ipsum dolor sit amet.');
			});

			it('Second chunk should have text: "Duis laboris tempor tempor."', () => {
				textChunk2.text.should.equal('Duis laboris tempor tempor.');
			});
		});


		describe('Backspace at (18, 53)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.');
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.');

			article.append(textChunk1);
			article.append(textChunk2);

			article.backspace(18, 53);

			it('Should have correct length', () => {
				article.length().should.equal(18+14);
			});

			it('First chunk should have text: "Lorem ipsum dolor tempor tempor."', () => {
				textChunk1.text.should.equal('Lorem ipsum dolor tempor tempor.');
			});

			it('Article should only contain one text chunk.', () => {
				article.firstSection().chunks.length.should.equal(1);
			});

			it('Article\'s only chunk should be first text chunk.', () => {
				article.firstChunk().should.equal(textChunk1);
			});
		});
	});




	describe('Triple text chunk:', () => {

		describe('Backspace at (18, 81)', () => {
			/**
			 * Case:
			 * Single Text Chunk
			 * Single Backspace From Start
			 */
			let article = new Article();
			let textChunk1 = new TextChunk('Lorem ipsum dolor sit amet.'); // 27 (+1)
			let textChunk2 = new TextChunk('Duis laboris adipisicing tempor tempor.'); // 39 (+1)
			let textChunk3 = new TextChunk('Ut ex fugiat cillum dolore commodo.'); // 35

			article.append(textChunk1);
			article.append(textChunk2);
			article.append(textChunk3);

			article.backspace(18, 81);

			it('Should have correct length', () => {
				article.length().should.equal(18+22);
			});

			it('First chunk should have text: "Lorem ipsum dolor cillum dolore commodo."', () => {
				textChunk1.text.should.equal('Lorem ipsum dolor cillum dolore commodo.');
			});

			it('Article should only contain one text chunk.', () => {
				article.firstSection().chunks.length.should.equal(1);
			});

			it('Article\'s only chunk should be first text chunk.', () => {
				article.firstChunk().should.equal(textChunk1);
			});
		});

	});

});