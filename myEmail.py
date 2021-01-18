# This file will act as a mailing engine for this website...

import smtplib 
from email.mime.multipart import MIMEMultipart 
from email.mime.text import MIMEText
import ssl


    
def send(to, subject="Test", text="Testing the mail agent"):
    
                                   #The Email address are removed from the file and you have to put your own
    try:
        msg = MIMEMultipart()                   #Configure message
        msg['From'] = "nalinstudios@gmail.com"
        msg['To'] = to
        msg['Subject'] = subject
        msg.attach(MIMEText(text, 'plain')) 

        s = smtplib.SMTP("smtp.sendgrid.net", 587)                      #Start communicating with gmail smtp server
        s.starttls(context = ssl.create_default_context())
        s.login("apikey", "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") 

        body = msg.as_string()                  #Send the mail
        s.sendmail("nalinstudios@gmail.com", to, body)
        s.quit()
    except Exception as e:
        with open('error.log', 'a+') as errorlogs:
            errorlogs.write(f"Couldn't send mail to {to} due to {e}. \n Subject:\n {subject}\nMessage:\n {text}")
        raise e
