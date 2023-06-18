from flask_app import app
from flask import render_template, request, redirect, session, flash, Response
from flask_app.models import user, contest
from flask_app.controllers import contests_controller
from flask_cors import cross_origin
from google.oauth2 import id_token
from google.auth.transport import requests

CLIENT_ID = "416332037370-6s6hk3ng74ip1t6flp0idnsg39v9o97f.apps.googleusercontent.com"

@cross_origin()
def authenticate(auth_header):
    try:
        token = auth_header.split(' ')
        if token[0] != 'Bearer':
            return None
        token = token[1]
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
        google_id = idinfo['sub']
        authenticated_user = user.User.get_user_by_google_id({"google_id": google_id})
        if authenticated_user:
            return str(authenticated_user.id)
        else:
            data = {
                "first_name": idinfo['given_name'],
                "last_name": idinfo['family_name'],
                "email": idinfo['email'],
                "google_id": google_id
            }
            return str(user.User.save_user(data))
    except ValueError:
        return None