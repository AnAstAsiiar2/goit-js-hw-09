const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};


loadFormData();


form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});


function loadFormData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      formData = JSON.parse(saved);
      if (formData.email) form.elements.email.value = formData.email;
      if (formData.message) form.elements.message.value = formData.message;
    } catch (e) {
      console.error('Помилка при читанні з localStorage:', e);
    }
  }
}
