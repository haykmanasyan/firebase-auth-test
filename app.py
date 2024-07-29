from flask import Flask, render_template, jsonify, request
from google.cloud import storage
import os
from datetime import timedelta

app = Flask(__name__)

# Set the environment variable for the Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/home/hayk/Downloads/enduring-broker-426815-b2-62d4e2cb97a2.json"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/view')
def view():
    return render_template('view.html')

@app.route('/get-signed-url')
def get_signed_url():
    # Initialize a storage client
    storage_client = storage.Client()

    # The name of the bucket
    bucket_name = 'xmpl-bkt-2'
    # The name of the file in the bucket
    blob_name = 'path/to/your/image.png'

    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)

    # Generate a signed URL for the blob
    url = blob.generate_signed_url(
        version='v4',
        expiration=timedelta(minutes=15),  # URL valid for 15 minutes
        method='GET'
    )

    return jsonify({'url': url})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
