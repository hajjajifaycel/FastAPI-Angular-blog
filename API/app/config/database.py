from pymongo import MongoClient



client = MongoClient('mongodb://mongodb:27017/BlogList')


db = client.BlogList

collection_name = db["BlogList"]
