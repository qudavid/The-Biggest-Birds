from flask import Flask, request, render_template
import os
import openai

openai.organization = "org-dWtPz3lHouUKNmZD89G7NTBy"
openai.api_key = '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'

openai.Model.list()

app = Flask(__name__)

def createImageFromPrompt(prompt):
    response = openai.Image.create(prompt=prompt, n=8, size="512x512")
    return response['data']

@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        images = []
        prompt = request.form['prompt']
        #generate sentiment analysis of the prompt
        completion = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "user", "content": "conduct sentiment analysis on this text:" +
                prompt}
            ],
        )
        prompt = completion.choices[0].message["content"]
        print(prompt)
        #simplify sentiment analysis into one to two words
        completion = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "user", "content": "describe an artwork that represents this sentiment in three sentences:" +
                prompt}
            ],
        )
        prompt = completion.choices[0].message["content"]
        print(prompt)
        res = createImageFromPrompt(prompt)
        if len(res) > 0:
            for img in res:
                images.append(img['url'])

    return render_template('index.html', **locals())


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