module.exports = {
   settings: {
      poweredBy: {
         enabled: false
      },
      gzip: {
         enable: true
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
