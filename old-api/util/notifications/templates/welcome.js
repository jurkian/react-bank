exports.emailTpl = data => ({
   subject: 'Welcome to React Bank!',
   html: `Hello ${data.firstName}, welcome to React Bank!`,
   text: `Hello ${data.firstName}, welcome to React Bank!`
});
