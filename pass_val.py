from flask import Flask 
from flask import request
app = Flask(__name__)
@app.route('/pass_val',methods=['GET', 'POST'])
def pass_val():
    name=request.args.get('value')
    return {'reply':'success'}
app.run(debug=True)