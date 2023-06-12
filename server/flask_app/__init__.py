from flask import Flask, redirect, url_for, session
from authlib.integrations.flask_client import OAuth
import os
from datetime import timedelta

app = Flask(__name__)
# app.secret_key = os.getenv("APP_SECRET_KEY")
# app.secret_key = os.environ.get("APP_SECRET_KEY")

# google_client_id = os.environ.get("GOOGLE_CLIENT_ID")


# app.config['SESSION_COOKIE_NAME'] = 'google-login-session'
# app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=5)

# oauth = OAuth(app)
# google = oauth.register(
#     name='google',
#     client_id=os.getenv("GOOGLE_CLIENT_ID"),
#     client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
#     access_token_url='https://accounts.google.com/o/oauth2/token',
#     access_token_params=None,
#     authorize_url='https://accounts.google.com/o/oauth2/auth',
#     authorize_params=None,
#     api_base_url='https://www.googleapis.com/oauth2/v1/',
#     userinfo_endpoint='https://openidconnect.googleapis.com/v1/userinfo',  # This is only needed if using openId to fetch user info
#     client_kwargs={'scope': 'openid email profile'},
# )

# @app.route('/login')
# def login():
#     google = oauth.create_client('google')
#     redirect_uri = url_for('authorize', _external=True)
#     print(f"REDIRECT URI = {redirect_uri}")
#     return google.authorize_redirect(redirect_uri)

# @app.route('/authorize')
# def authorize():
#     google = oauth.create_client('google')
#     token = google.authorize_access_token()
#     # resp = google.get('account/verify_credentials.json')
#     resp = google.get('userinfo')
#     user_info = resp.json()
#     session['email'] = user_info['email']
#     # resp.raise_for_status()
#     # profile = resp.json()
#     # do something with the token and profile
#     return redirect('/')

# @app.route('/logout')
# def logout():
#     for key in list(session.keys()):
#         session.pop(key)
#     return redirect('/')