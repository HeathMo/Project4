# Project 4: Data Analyst Job Search

![image](images/background.png)

## **Background**

For this project, the team will demonstrate their skills acquired to date in regards to obtaining, cleaning, organizing, and publishing data with the additional challenge of incorporating machine learning to develop a website.  The intent of the website is to help future data analysts learn where potential career opportunities may be for them.

## **Table of Contents**

- [Step 1: Obtaining and Cleaning](#step-1-obtaining-and-cleaning)
- [Step 2: Machine Learning](#step-2-machine-learning)
- [Step 3: Tableau](#step-3-tableau)
- [Step 4: HTML/Flask/JavaScript](#step-4-html/flask/javascript)
- [Step 5: Deploy Website](#step-5-deploy-website)
- [Status](#status-under-construction)
- [Team Members](#team-members)

## **Step 1: Obtaining and Cleaning**

The team identified a dataset on Kaggle that had the potential to fit the needs for the website.

Source: [Kaggle Data Analyst Jobs Dataset](https://www.kaggle.com/andrewmvd/data-analyst-jobs)

After reviewing the dataset, several columns would not be required and those were dropped from the csv along with any nulls.  The csv still contained over 1800 data points which was sufficient for the intent of the project.

## **Step 2: Machine Learning**

•	Random Forest, a supervised machine learning algorithm, was used on the project to predict one of six salary ranges.
•	Random Forest Classification and Random Forest Regressor were evaluated, and the group agreed on using Classification.
•	The data was labeled, scaled, fitted, and predicted.
•	We found the model’s accuracy improved when we remapped from nearly ninety unique salary ranges to just six.
•	An adequate accuracy rate was achieved for the project.

## **Step 3: Tableau**

The team utilized Tableau to create some meaningful visualizations that the user may be interested in such as:
- Top 10s for locations, industries, sectors, and company ownership types
- Reviews of locations, industries, sectors, and company ownership types relative to average company ratings
- Maps of job locations with income, population, and median age layers

[Link to Tableau Public](https://public.tableau.com/app/profile/heather.mott/viz/DataScienceJobs_16360772251990/CoverPage_1#1)

## **Step 4: Flask/JavaScript**
JavaScript
In order for the JavaScript to work accordingly, the team completed the following steps:
1. Create variables for each dropdown selection using jQuery to capture the selected value items
2. Capture the selected items and convert those items into an array of variables
3. Include a configuration or 'config' using an ajax function to create a better user experience (the user is able to toggle between the selections and their results)

Flask
In order for the Flask work accordingly, the team completed the following steps:
1. Define the entire drop down list and convert the selections into binary labels (0s or 1s) using the def function called "listToBinary"
2. Convert the selected 0s and 1s into an array
3. Connect the array in to the function call "predict" where the list of binaries are scaled and connected to the machine learning file (to produce the label encoder categories display on screen)
4. Lastly, connect the flask/app.py file to the javascript file by using the 'POST' method to display the output to the user

## **Step 5: HTML and Deploying Website**

The team used the code and displayed it on a delpoyed website using HTML and stylized with CSS. The navigation bar shows the home page, Tableau visualisations, and a More Info page to learn more about Data Science as a profession



## **Status: Under Construction**

## **Team Members**

- [Byron Pineda](https://github.com/byronpineda225)
- [Carlyse Thomas](https://github.com/CLyseT)
- [Felicia Felix](https://github.com/Felicia620)
- [Heather Mott](https://github.com/HeathMo)
- [Peta-Gaye Lysius](https://github.com/petagaye2001)
- [Ryan Flammia](https://github.com/rflammia-py)
