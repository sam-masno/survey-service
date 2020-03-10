const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validateRecipients = emails => {

    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => !re.test(email) && email !== '');//ensure email matches regex and is not empty string
    
    if(invalidEmails.length){
        return `The following emails are invalid: ${invalidEmails}`
    } else if (emails.split(',').filter(email => email).length > 5) {
        return 'Please limit recipients list to 5 emails or less.'
    }
    return null
}

export const validateFrom = email => {
    if(!re.test(email)) {
        return 'Please enter a valid Email'
    }
}