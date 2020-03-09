const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(require('../config/keys').sendgridKey)

const mailService = async ( { body, recipients, subject }, content ) => {

    //convert recipients objects array into array of just emails
    const mailList = recipients.map(({email}) => email);

    //construct message with inserting survey properties and template
    const msg = {
        to: mailList,
        from: 'no-reply@example.com',
        subject: subject,
        text: body,
        html: content
      };

      //try sending and return result
      try {
        const res = await sendgrid.sendMultiple(msg)
        return res
      } catch (error) {
        return error
      }
}

module.exports = mailService;