from flask import Flask, request, render_template
import os
import openai

openai.organization = "org-OcpyA7VqpEkcFM2BWDVDBff3"
openai.api_key = "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"

openai.Model.list()



app = Flask(__name__)


@app.route('/')
def index():
    response = openai.Image.create(
    prompt="A cute octopus",
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
            {"role": "user", "content": "Write a children's story that rhymes about" +
              message + "with a moral or lesson at the end of the story."}
        ],
        temperature=1.95
    )
    return completion.choices[0].message



if __name__ == "__main__":
    app.run()