from flask import Flask, request, render_template
import os
import openai

openai.organization = "org-dWtPz3lHouUKNmZD89G7NTBy"
openai.api_key = "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"

openai.Model.list()



app = Flask(__name__)


@app.route('/')
def index():
    response = openai.Image.create(
    prompt="Asian guy with very short blonde hair and modern glasses wearing a supreme black jacket, silver necklace chains, and baggy camo pants drawn in anime style",
    n=2,
    size="1024x1024"
    )
    return response["data"][0]["url"]

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