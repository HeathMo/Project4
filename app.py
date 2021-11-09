import json
from typing import Dict, List
from joblib import load
from flask import Flask, render_template, request, jsonify
import pandas as pd

# Flask
app =  Flask(__name__)

# loading models and transfomers
clf, model_cols,  scaler, labelencoder = load('/Users/carlysethomas/Desktop/Project_4/ML_models_mine.sav')

@app.route('/')
def home():
    return render_template("index.html")

@app.route("/visualizations.html")
def visuals():
    return render_template("visualizations.html")

@app.route('/index.html')
def index():
    return render_template("index.html")

def predict(feature_vector: List) -> str:
    common_features = set(model_cols).intersection((feature_vector))
    missing_features = set(model_cols).difference(set(feature_vector))
    common_feature_dict = dict(zip(common_features,[[1]] * len(common_features)))
    missing_features_dict = dict(zip(missing_features,[[0]] * len(missing_features)))
    common_feature_dict.update(missing_features_dict)
    single_test = pd.DataFrame.from_dict(common_feature_dict)
    scaled_single = scaler.transform(single_test)
    single_predict = clf.predict(scaled_single)
    output = labelencoder.inverse_transform(single_predict)
    return output[0]

@app.route('/endpoint', methods=['POST'])
def endpoint():
    inputData = request.form.getlist('data[]')
    print(inputData, type(inputData))


    outcome = predict(inputData)
    
    return jsonify(
        results = False if outcome == "" else True,
        message = outcome,
    );



if __name__=="__main__":
    app.run(debug=True)