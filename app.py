import json
from joblib import dump, load
from flask import Flask, render_template, request, jsonify

# Flask
app =  Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")


if __name__=="__main__":
    app.run(debug=True)