import nodeMailer from "nodemailer";

const emailAccountActivation = async (
  email,
  emailFormat
) => {
  try {
    const { MY_EMAIL, MY_PASSWORD } = process.env;

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: MY_EMAIL,
        pass: MY_PASSWORD,
      },
    });

    transporter.sendMail({
      from: MY_EMAIL,
      to: email,
      subject: `Account activation link for PicHub.`,
      html: emailFormat,
    });
  } catch (e) {
    console.log(e);
  }
};

export default emailAccountActivation;
