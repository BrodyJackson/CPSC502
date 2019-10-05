from flask import Flask, request, redirect, url_for, flash, jsonify
import numpy as np
import pickle as p
import json

app = Flask(__name__)


@app.route('/')
def root():
    return 'Im aliiiiive'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')