let page = document.querySelector('.page'),
  googleBtn = document.querySelector('.google'),
  instagramBtn = document.querySelector('.instagram')

googleBtn.addEventListener('click', () => {
  location.replace('routes/google_login.html')
})

instagramBtn.addEventListener('click', () => {
  location.replace('routes/instagram_login.html')
})