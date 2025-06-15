function loadTranslations() {
  fetch('translations.json')
    .then(res => res.json())
    .then(data => {
      window.translations = data;
      const lang = localStorage.getItem('lang') || 'de';
      document.getElementById('langSelect').value = lang;
      changeLanguage(lang);
    })
    .catch(err => console.error('i18n load error:', err));
}

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);
  const texts = window.translations[lang] || {};
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) el.textContent = texts[key];
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (texts[key]) el.placeholder = texts[key];
  });
}

window.addEventListener('DOMContentLoaded', () => {
  loadTranslations();
  document.getElementById('langSelect').addEventListener('change', e => changeLanguage(e.target.value));
});