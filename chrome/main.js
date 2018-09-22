(() => {
const USER_NAME = '';
const PASSWORD = '';

if (!USER_NAME || !PASSWORD) {
  alert('Please setup your username and password before using the "NEU Login" chrome extension.');
  return;
}

switch (window.location.host) {
  // MyNEU
  case 'my.northeastern.edu':
    window.location = 'https://my.northeastern.edu/c/portal/login';
    break;

  // Blackboard
  case 'northeastern.blackboard.com':
    document.getElementById('ssoUrl').click();
    break;

  // CAS
  case 'neuidmsso.neu.edu':
    document.getElementById('username').value = USER_NAME;
    document.getElementById('password').value = PASSWORD;
    document.getElementsByClassName('btn-submit')[0].click();
    break;

  default:
    break;
}
})();
