from flask import Flask, request
import os
import openai

openai.organization = "org-OcpyA7VqpEkcFM2BWDVDBff3"
openai.api_key = os.getenv("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")

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello"

@app.route('/message', methods=['GET'])
def get_prompt_from_user():
    message = request.args.get('message')
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=message,
        max_tokens=100
    )
    return response


if __name__ == "__main__":
    app.run()