import requests
import json

url = 'http://0.0.0.0:5000/lifestyleheatmap/'

data = [
    {
        "attribute": "weight",
        "value": 100,
        "maxValue": 100,
        "type": "slider"
    }
]

json_data = json.dumps(data)
print(json_data)
headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
call = requests.post(url, data=json_data, headers=headers)
print (call, call.text)