module.exports = {
   settings: {
      poweredBy: {
         enabled: false
      },
      gzip: {
         enable: false
      },
      // Error handling
      customErrorHandler: {
         enabled: true
      },
      load: {
         before: ['boom', 'customErrorHandler']
      }
   }
};
