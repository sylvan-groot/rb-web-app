from flask import Flask
app = Flask(__name__)

@app.route("/")
def greet():
    return "Webhook1234"

if __name__ == "__main__":
    app.run()