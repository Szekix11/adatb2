import sqlite3

con = sqlite3.connect("employee.db")
print("Database opened successfully")

con.execute(
    "create table Employees (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, address TEXT NOT NULL, phonenumber TEXT NOT NULL, ime TEXT NOT NULL, buy TEXT NOT NULL, phonetype TEXT NOT NULL, date TEXT NOT NULL)")

print("Table created successfully")

con.close()
