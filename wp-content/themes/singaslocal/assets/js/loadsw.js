if ('serviceWorker' in navigator) {
  // navigator.serviceWorker.ready
  //   .then((registration) => {
  //     registration.unregister();
  //   })
  //   .catch((error) => {
  //     console.error(error.message);
  //   });
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister().then(r => console.log(r));
    }
  });
  // navigator.serviceWorker.register('/sw.js', {scope: '/'}).then((r) => {
  //   console.log("Service worker registered", r);
  // });
}
