# import mysql.connector
import os
import psycopg2

class Config:
  # conn = mysql.connector.connect(
  #   host="127.0.0.1",
  #   database="blog_db",
  #   user="admin",
  #   password="asswordassword"
  # )

  # cursor = conn.cursor()

  conn = psycopg2.connect("postgresql://yael:TUvNe86RaiGwj4EcLwyQFw@quirky-linsang-10328.7tt.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full")

