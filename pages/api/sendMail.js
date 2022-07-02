import nodemailer from 'nodemailer';

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_MAIL_TO = process.env.SMTP_MAIL_TO;

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function raiseError(err_msg){
    if(err_msg==="ERR_INVALID_EMAIL"){
        return "This email address in not valid."
    }else if(err_msg==="ERR_SHORT_TEXT"){
        return "it looks like your message has been tempered."
    }else if(err_msg==="ERR_SHORT_NAME"){
        return "Your name is too short, kindly provide your full name."
    }else if(err_msg==="ERR_SHORT_SUBJECT"){
        return "Kindly prove a subject or purpose of contact."
    }else{
        return "Something went wrong...Please give me few moments to fix this..."
    }
}

function verify(req){
    const { cmail, cname, csubject, cbody } = req.body;
    if(validateEmail(cmail)){
        if(csubject.trim().length>5){
            if(cname.trim().length>5){
                if(cbody.trim().length>10){
                    return "SUCCESS"
                }else{
                    return "ERR_SHORT_TEXT"
                }
            }else{
                return "ERR_SHORT_NAME"
            }
        }else{
            return "ERR_SHORT_SUBJECT" 
        }
    }else{
        return "ERR_INVALID_EMAIL";
    }
}

export default function handler(req, res) {
    if(req.method==="POST"){
        const { cmail, csubject, cbody, cname } = req.body;
        var transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            tls: {
                ciphers:'SSLv3'
            },
            auth: {
              user: SMTP_USER,
              pass: SMTP_PASS
            }
        });
        var mailOptions = {
            from: SMTP_USER,
            to: SMTP_MAIL_TO,
            subject: csubject+' Web PortFolio Contact',
            html: "<h3>NAME : "+cname +"<h3>"+"<h4>Email : "+cmail +"<h><p>"+cbody+"</p>"
        };
        var result = verify(req);
        if(result==="SUCCESS"){
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    res.status(500).json({
                        success:false,
                        message:"Internal Server Error"
                    });
                  console.log(error.message);
                } 
                else{
                    res.status(200).json({
                        success:true,
                        message:"Message Sent Successfully."
                    });
                }
            });
        }else{
            var msg = raiseError(result);
            res.status(400).json({
                success:false,
                message:msg
            });
        }
    }else{
        res.status(401).send("Not Allowed.")
    }
}