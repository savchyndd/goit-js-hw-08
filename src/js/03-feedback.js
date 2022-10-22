// Import library
import throttle from 'lodash.throttle';

// Initial constants
const FB_FORM_STATE = 'feedback-form-state';
const formData = {};

// Get form element
const formRef = document.querySelector('.feedback-form');

// Add event listener on form submit and input
formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextInput, 500));

// Write on formData value event listener input  and save in localStorag
function onTextInput(e) {
  const { name, value } = e.target;

  formData[name] = value;

  localStorage.setItem(FB_FORM_STATE, JSON.stringify(formData));
}

// Checks localStorage and writ in form save value
function populateForm() {
  const savedFormData = localStorage.getItem(FB_FORM_STATE);

  if (savedFormData) {
    const { email = '', message = '' } = JSON.parse(savedFormData);
    formRef.email.value = email;
    formRef.message.value = message;
  }
}

// Clears the form and 'feedback-form-state' in localstorage
function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(FB_FORM_STATE);
}

populateForm();
