from flask import Flask, render_template, jsonify, request
from google.cloud import storage
import os
from datetime import timedelta
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

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
    
    # Get the userId parameter from the request
    user_id = request.args.get('userId')
    
    # Define the folder path within the bucket
    folder_path = f'{user_id}/'

    bucket = storage_client.bucket(bucket_name)
    blobs = bucket.list_blobs(prefix=folder_path)
    
    # Get the first image in the folder
    first_image = None
    for blob in blobs:
        if blob.name.endswith('.png'):
            first_image = blob.name
            break

    if first_image:
        blob = bucket.blob(first_image)
        
        # Generate a signed URL for the blob
        url = blob.generate_signed_url(
            version='v4',
            expiration=timedelta(minutes=15),  # URL valid for 15 minutes
            method='GET'
        )
        return jsonify({'url': url})
    else:
        return jsonify({'error': 'No image found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
