from flask import Flask, request, render_template
import os
import openai

openai.organization = "org-eLa1AesrPBLo5REyigH7wlXk"
openai.api_key = "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"
openai.Model.list()



app = Flask(__name__)


@app.route('/')
def index():
    response = openai.Image.create(
    prompt="A cute baby sea otter",
    n=2,
    size="1024x1024"
    )
    return response["data"][0]["url"]

@app.route('/message', methods=['GET'])
def get_prompt_from_user():
    message = request.args.get('message')

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": message}
        ]
    )
    return completion.choices[0].message



if __name__ == "__main__":
    app.run()