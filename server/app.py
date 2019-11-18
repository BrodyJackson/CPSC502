from flask import Flask, request, redirect, url_for, flash, jsonify
import numpy as np
import pickle as p
import json
import lifestyleconfig
import apiServices

app = Flask(__name__)


@app.route('/')
def root():
    return 'Im aliiiiive'

@app.route('/lifestyleheatmap/', methods=['GET','POST'])
def calculate_heatmap_info():
    data = request.get_json()
    print('hello')
    heatmap_data = apiServices.determine_diversity_scores(data)
    return jsonify(heatmap_data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')