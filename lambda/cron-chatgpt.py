import feedparser
import pymysql
import logging

# Set up logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Set up the database connection
host = '<your-database-host>'
user = '<your-database-user>'
password = '<your-database-password>'
database = '<your-database-name>'

def lambda_handler(event, context):
    # Parse the RSS feed
    feed_url = '<your-feed-url>'
    feed = feedparser.parse(feed_url)
    
    # Connect to the database
    conn = pymysql.connect(host=host, user=user, password=password, database=database)
    
    # Loop through the feed entries
    for entry in feed.entries:
        # Get the post data
        title = entry.title
        link = entry.link
        summary = entry.summary
        
        # Insert the post data into the database
        with conn.cursor() as cursor:
            sql = "INSERT INTO posts (title, link, summary) VALUES (%s, %s, %s)"
            cursor.execute(sql, (title, link, summary))
        conn.commit()
        
        # Log the success
        logger.info(f"Saved post '{title}' to database.")
    
    # Close the database connection
    conn.close()
    
    # Return a success message
    return {
        'statusCode': 200,
        'body': 'Posts saved to database.'
    }


"""
  Into DynamoDB Database
"""

import boto3
import feedparser
import logging

# Set up logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Set up the DynamoDB client
dynamodb = boto3.resource('dynamodb')
table_name = '<your-table-name>'
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    # Parse the RSS feed
    feed_url = '<your-feed-url>'
    feed = feedparser.parse(feed_url)
    
    # Loop through the feed entries
    for entry in feed.entries:
        # Get the post data
        title = entry.title
        link = entry.link
        summary = entry.summary
        
        # Insert the post data into the DynamoDB table
        item = {
            'title': title,
            'link': link,
            'summary': summary
        }
        table.put_item(Item=item)
        
        # Log the success
        logger.info(f"Saved post '{title}' to DynamoDB table.")
    
    # Return a success message
    return {
        'statusCode': 200,
        'body': 'Posts saved to DynamoDB table.'
    }