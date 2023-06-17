from flask import Flask, request, render_template
import os
import openai

openai.organization = "org-eLa1AesrPBLo5REyigH7wlXk"
openai.api_key = "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"

openai.Model.list()

app = Flask(__name__)

def createImageFromPrompt(prompt):
    response = openai.Image.create(prompt=prompt, n=2, size="512x512")
    return response['data']

@app.route('/', methods=["GET", "POST"])
def index():
    
    if request.method == 'POST':
        images = []
        prompt = request.form['prompt']
        res = createImageFromPrompt(prompt)

        if len(res) > 0:
            for img in res:
                images.append(img['url'])

    return render_template('index.html', **locals())

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