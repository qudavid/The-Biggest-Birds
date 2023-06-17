from flask import Flask, request, render_template
import os
import openai

openai.organization = "org-dWtPz3lHouUKNmZD89G7NTBy"
openai.api_key = "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"

openai.Model.list()

app = Flask(__name__)

def createImageFromPrompt(prompt):
    response = openai.Image.create(prompt=prompt, n=2, size="512x512")
    return response['data']

@app.route('/', methods=["GET", "POST"])
def index():
<<<<<<< HEAD
    response = openai.Image.create(
    prompt="Asian guy with very short blonde hair and modern glasses wearing a supreme black jacket, silver necklace chains, and baggy camo pants drawn in anime style",
    n=2,
    size="1024x1024"
    )
    return response["data"][0]["url"]
=======
    if request.method == 'POST':
        images = []
        prompt = request.form['prompt']
        res = createImageFromPrompt(prompt)

        if len(res) > 0:
            for img in res:
                images.append(img['url'])

    return render_template('index.html', **locals())

>>>>>>> 979aebcfdfc644a3c1339821468f16c0fe55e47c

@app.route('/message', methods=['GET'])
def get_prompt_from_user():
    message = request.args.get('message')

    completion = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "user", "content": "Write a children's story that rhymes about" +
              message + "with a moral or lesson at the end of the story."}
        ],
        temperature=1.95
    )
    return completion.choices[0].message



if __name__ == "__main__":
    app.run()