import json
from joblib import dump, load
from flask import Flask, render_template, request, jsonify

# Flask
app =  Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/index.html')
def index():
    return render_template("index.html")

# @app.route('/results')
# def model():
#   J=[]
#   userData = request.form.getlist("userData[]")
#   userData = [int(i) for i in userData]
#   J.append(userData)
#   classifier = load('insertnameofjoblib.joblib')
#   result=classifier.predict(J)
#   if (result==0):
#         outcome="Sorry, We Predict You Will Not Find Any Positions With Your Salary Requirements In Your Selected Area. Try Again!"
#   else:
#         outcome="Congrats! Head Over To The Jobs Page For All Listed Positions In Your Area!"
#   return outcome


if __name__=="__main__":
    app.run(debug=True)