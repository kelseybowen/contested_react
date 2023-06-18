from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app

class User:
    db = "ratings_db"

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.google_id = data['google_id']

    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.db).query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users
    
    @classmethod
    def get_user_by_google_id(cls, data):
        query = "SELECT * FROM users WHERE google_id = %(google_id)s;"
        result = connectToMySQL(cls.db).query_db(query, data)
        if result:
            return cls(result[0])
        else:
            return None

    @classmethod
    def get_user_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL(cls.db).query_db(query, data)
        return cls(result[0])

    @classmethod
    def get_user_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        data = {
            "email": data
        }
        result = connectToMySQL(cls.db).query_db(query, data)
        if result == False or len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def save_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at, google_id) VALUES ( %(first_name)s , %(last_name)s , %(email)s , NOW() , NOW(), %(google_id)s );"
        result = connectToMySQL(cls.db).query_db(query, data)
        return result

    @classmethod
    def update_user(cls, data):
        query = "UPDATE users SET first_name=%(first_name)s, last_name=%(last_name)s, email=%(email)s, updated_at=NOW() WHERE id=%(id)s;"
        result = connectToMySQL(cls.db).query_db(query, data)
        return result

    @classmethod
    def delete_sighting(cls, data):
        query = "DELETE FROM users WHERE id=%(id)s;"
        data = {
            "id": data
        }
        result = connectToMySQL(cls.db).query_db(query, data)
        return result
