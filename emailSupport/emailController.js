import mail from "./mail.js"
export const sendHelp = async (req, res, next) => {
    const { email, comment } = req.body;
    const emailInLowerCase = email.toLowerCase();
    mail.sendMail({
        to: process.env.SUPPORT_EMAIL,
        from:  process.env.SUPPORT_EMAIL,
        subject: `Letter from ${emailInLowerCase}!`,
        html: `<h1> A letter from the ${emailInLowerCase} about the problem: </h1>
         <div>
         <h2>Comment: ${comment}</h2>
        </div>`,
        text: `A letter from the ${emailInLowerCase} about the problem: ${comment}`


    })
    res.json({message: "We have received your message. Thank you for your request!"});

}