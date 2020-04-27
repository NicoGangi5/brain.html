# {{url}}/led?status=on
@app.route('/', methods=['GET'])
def led():
    status = request.args.get('status')
    if status == "on":
        GPIO.output(23, GPIO.HIGH)
        return jsonify({"message": "Led successfully turned on"})
    elif status == "off":
        GPIO.output(23, GPIO.LOW)
        return jsonify({"message": "Led successfully turned off"})
    else:
        return jsonify({"message": "Not a valid status"})
