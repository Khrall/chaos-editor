/**
 * This application operates on a single object, with the following structure:
 *
 * {
 * 	sections: [
 * 		chunks: [
 * 			{
 * 				type: String, (text|figure|blockquote)
 * 				classes: String,
 * 				
 * 				text: String,
 * 				markup: [
 * 					{ type: String, start: Number, end: Number }
 * 				]
 * 				
 * 			}
 * 		]
 * 	]
 * }
 */

import {Article, TextChunk} from '../components';
import './style';
import $ from 'jquery';
import _ from 'lodash';

let $a = $('#article');

function render(article) {
	$a.empty();

	let chunk = article.firstChunk();
	while(chunk) {
		let $p = $('<p>');
		$p.text(chunk.text);
		$a.append($p);

		chunk = chunk.nextChunk;
	}
}

let a = new Article();
let caret = 0;
a.append(new TextChunk(''));
render(a);







function isCharacterKeyPress(e) {
    if (typeof e.which == "undefined") return true;
    else if (typeof e.which == "number" && e.which > 0) {
        return !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8;
    }
    return false;
}

function isCapslockOn(e) {
	e = (e) ? e : window.event;

	let charCode = false;
	if (e.which) charCode = e.which;
	else if (e.keyCode) charCode = e.keyCode;

	let shifton = false;
	if (e.shiftKey) shifton = e.shiftKey;
	else if (e.modifiers) shifton = !!(e.modifiers & 4);

	if (charCode >= 97 && charCode <= 122 && shifton) return true;
	if (charCode >= 65 && charCode <= 90 && !shifton) return true;
	return false;
}


$(document).bind('keypress', (e) => {


	if(isCharacterKeyPress(e)) {
		let s = String.fromCharCode(e.which);
		a.insertString(s, caret);
		caret++;
		render(a);
	}

});

$(document).bind('keydown', (e) => {

	if(e.keyCode == 8) { // Stop backspace
		e.preventDefault();
		a.backspace(caret, caret);
		if(caret > 0) caret--;
		render(a);
	}

	if(e.keyCode == 13) { // Enter down
		e.preventDefault();
		a.append(new TextChunk(''));
		caret++;
		render(a);
	}

});