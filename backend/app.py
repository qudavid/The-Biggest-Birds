from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def index():
    pass

@app.route('/message', methods=['GET'])
def get_prompt_from_user():
    message = request.args.get('message')
    


if __name__ == "__main__":
    app.run()