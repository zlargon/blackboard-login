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
    document.getElementById('username').value = '';  // username
    document.getElementById('password').value = '';  // password
    document.getElementsByClassName('btn-submit')[0].click();
    break;

  default:
    break;
}
