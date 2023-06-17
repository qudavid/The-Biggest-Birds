from flask import Flask, request, render_template
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

    completion = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "user", "content": message}
        ]
    )
    return completion.choices[0].message



if __name__ == "__main__":
    app.run()