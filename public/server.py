from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def serve_frontend():
    return send_from_directory('.', '/public/home.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)