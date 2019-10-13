from flask import Flask 
from flask import request
from flask import jsonify
app = Flask(__name__)
@app.route('/pass_val',methods=['GET', 'POST'])
def pass_val():
    name=request.args.get('value')
    return '{funcname}({data})'.format(
        funcname=request.args.get('callback'),
        data=jsonify({'reply':'success'}),
    )
app.run(debug=True)