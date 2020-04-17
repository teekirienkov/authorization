import { isValid } from "./utils";
import { Question } from "./question";

const form = document.querySelector('#form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

window.addEventListener('load', Question.renderList)

form.addEventListener('submit', submitFormHandler);

input.addEventListener('input', () => {
	submitBtn.disabled = !isValid(input.value);
})

function submitFormHandler(event) {
	event.preventDefault();
	
	if (isValid(input.value)) {
		const question = {
			text: input.value.trim(),
			date: new Date().toJSON()
		}

		submitBtn.disabled = true;
		// Async request for save question
		Question.create(question).then(() => {
			input.value = '';
			input.className = '';
			submitBtn.disabled = false;
		})

		console.log('Question', question)
	}
}

