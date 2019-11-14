exports.emailTpl = data => ({
   subject: '[React Bank] Reset your password',
   html: `Hello ${data.firstName}, <a href="https://localhost:3000/reset-password/${data.resetToken}">Click here</a> to reset your password`,
   text: `Hello ${data.firstName}, <a href="https://localhost:3000/reset-password/${data.resetToken}">Click here</a> to reset your password`
});
