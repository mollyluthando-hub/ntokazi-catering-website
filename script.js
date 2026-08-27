const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

/*
  BEFORE PUBLISHING:
  1. Replace the placeholder WhatsApp number below with Ntokazi's number.
  2. Replace the email address with the real business email.
  3. Add real event/food photographs in the gallery if available.
*/
const WHATSAPP_NUMBER = '27837934919';
const BUSINESS_EMAIL = 'ntokazi@ntokazievents.co.za';

document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const email = data.get('email') || '';
  const event = data.get('event') || '';
  const date = data.get('date') || '';
  const guests = data.get('guests') || '';
  const message = data.get('message') || '';

  const body =
`Ntokazi Catering & Events — New Enquiry

Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email}
Event: ${event}
Event date: ${date}
Guests: ${guests}

Event details:
${message}`;

  const status = document.getElementById('formStatus');

  if (WHATSAPP_NUMBER !== 'YOUR_WHATSAPP_NUMBER') {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
    status.textContent = 'Your enquiry is ready in WhatsApp.';
  } else if (BUSINESS_EMAIL !== 'YOUR_EMAIL_ADDRESS') {
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('Ntokazi Catering & Events — New Enquiry')}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Your email application should open with the enquiry prepared.';
  } else {
    status.textContent = 'The enquiry form is ready. Add the business WhatsApp number or email in script.js before publishing.';
  }
});
