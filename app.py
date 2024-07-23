# import flask/render_template
# have index and view
# host on 8080

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/view')
def view():
    return render_template('view.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
