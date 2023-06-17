from flask import Flask, request
import os
import openai

openai.organization = "org-OcpyA7VqpEkcFM2BWDVDBff3"
openai.api_key = "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"

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
    gpt4_response = response.choices[0].text.strip()

    return gpt4_response


if __name__ == "__main__":
    app.run()