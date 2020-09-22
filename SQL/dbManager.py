import sqlite3

connection = sqlite3.connect('SQL/chinook.db')
print("Connected to DB successfully!")
cursor = connection.execute("SELECT * FROM Customers;")
for row in cursor: 
    print("Customer ID :", row[0], row[1], row[2])
connection.close()