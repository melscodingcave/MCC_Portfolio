from flask import Flask, render_template, url_for, request, redirect
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import time

app = Flask(__name__)
load_dotenv()  # load variables from .env into os.environ
limiter = Limiter(get_remote_address, app=app)


@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/contact', methods=['POST'])
@limiter.limit("5 per hour")
def contact():
    submitted_at = int(request.form.get("ts", "0"))
    if time.time() - submitted_at < 6:
        return ("", 204)

    ALLOWED_INQURY_TYPES = {
        "job", "freelance_small", "freelance_ongoing", "collab", "other"
    }

    inquiry_type = (request.form.get("inquiry_type") or "").strip()
    if inquiry_type not in ALLOWED_INQURY_TYPES:
        return ("", 204)

    if request.form.get("no_resell") != "on":
        return ("", 204)

    # Honeypot: if this field is filled, treat as spam and pretend success
    if request.form.get('company_website'):
        return ("", 204)

    name = request.form.get('name', '').strip()
    email = request.form.get('email', '').strip()
    subject = request.form.get('subject', '').strip()
    message_body = request.form.get('message', '').strip()

    if not (name and email and subject and message_body):
        return redirect(url_for('home_page', status='error'))

    # Build email
    from_addr = (
        os.environ.get('MAIL_FROM')
        or os.environ.get('MAIL_USERNAME')
        or 'no-reply@melscodingcave.com'
    )

    labels = {
        "job": "JOB",
        "freelance_small": "FREELANCE",
        "freelance_ongoing": "ONGOING",
        "collab": "COLLAB",
        "other": "OTHER",
    }

    tag = labels.get(inquiry_type, "OTHER")
    msg = EmailMessage()
    msg['Subject'] = f"[{tag}] {subject}"
    msg['From'] = from_addr
    msg['To'] = "melanie.basso@melscodingcave.com"
    msg['Reply-To'] = email  # so you can just hit "Reply" in your inbox
    msg.set_content(
        f"New message from your portfolio site:\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n\n"
        f"Message:\n{message_body}"
    )

    try:
        smtp_server = os.environ.get('MAIL_SERVER')
        smtp_port = int(os.environ.get('MAIL_PORT', '587'))
        smtp_user = os.environ.get('MAIL_USERNAME')
        smtp_password = os.environ.get('MAIL_PASSWORD')

        if not smtp_server:
            raise RuntimeError("MAIL_SERVER not configured")

        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            if smtp_user and smtp_password:
                server.login(smtp_user, smtp_password)
            server.send_message(msg)

    except Exception as e:
        # Log so you can see what went wrong while developing
        app.logger.exception("Error sending contact email")
        return redirect(url_for('home_page', status='error'))

    return redirect(url_for('home_page', status='success'))


@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)
