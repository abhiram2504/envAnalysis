from flask import Flask, request, jsonify
from calcEmission import predict


app = Flask(__name__)

@app.route('/calculateEmm', methods=['POST'])
def result():
    try:
        data = request.get_json()
        kwh = data.get('value1')
        waste = data.get('value2')

        emmision = predict(kwh, waste)

        response = {
            'result': emmision
        }
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
