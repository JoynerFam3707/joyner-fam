const installBtn = document.getElementById('installBtn');
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installBtn.hidden = false;
});

installBtn.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installBtn.hidden = true;
});

document.getElementById('saveRsvp').addEventListener('click', () => {
  const choice = document.getElementById('rsvp').value;
  // Demo only: stored on this device, not sent to a family database.
  localStorage.setItem('joyner-demo-rsvp', choice);
  document.getElementById('rsvpStatus').textContent =
    `Demo response saved on this device: ${choice}.`;
});

const saved = localStorage.getItem('joyner-demo-rsvp');
if (saved) document.getElementById('rsvp').value = saved;

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  });
}
