const cheatSheets = {
    python: `
            <table>
    <tr><th>Concept</th><th>Code/Function</th><th>Description</th></tr>

    <!-- Python Basics -->
    <tr><td>Python Intro</td><td>print("Hello, World!")</td><td>Prints a message to the console.</td></tr>
    <tr><td>Python Syntax</td><td>x = 5</td><td>Assigns a value to a variable (no semicolons required).</td></tr>
    <tr><td>Python Comments</td><td># This is a comment</td><td>Single-line comment in Python.</td></tr>
    <tr><td>Python Variables</td><td>x = "John"</td><td>Assigns a string value to a variable.</td></tr>

    <!-- Data Types -->
    <tr><td>Python Data Types</td><td>type(5)</td><td>Returns the type of the variable (int, str, etc.).</td></tr>
    <tr><td>Python Numbers</td><td>x = 10</td><td>Integer data type.</td></tr>
    <tr><td>Python Casting</td><td>int("10")</td><td>Converts a string to an integer.</td></tr>
    <tr><td>Python Strings</td><td>name = "Python"</td><td>Creates a string variable.</td></tr>
    <tr><td>Python Booleans</td><td>x = True</td><td>Boolean data type (True/False).</td></tr>

    <!-- Operators -->
    <tr><td>Python Operators</td><td>a + b</td><td>Arithmetic operations (e.g., +, -, *, /).</td></tr>

    <!-- Data Structures -->
    <tr><td>Python Lists</td><td>my_list = [1, 2, 3]</td><td>Creates a list.</td></tr>
    <tr><td>Python Tuples</td><td>my_tuple = (1, 2, 3)</td><td>Creates a tuple (immutable).</td></tr>
    <tr><td>Python Sets</td><td>my_set = {1, 2, 3}</td><td>Creates a set (unordered collection).</td></tr>
    <tr><td>Python Dictionaries</td><td>my_dict = {'key': 'value'}</td><td>Creates a dictionary (key-value pairs).</td></tr>

    <!-- Control Structures -->
    <tr><td>Python If...Else</td><td>if x > 5: print("x is large")</td><td>Conditional execution using if, elif, else.</td></tr>
    <tr><td>Python While Loops</td><td>while x < 10: x += 1</td><td>Executes while a condition is true.</td></tr>
    <tr><td>Python For Loops</td><td>for i in range(5): print(i)</td><td>Iterates over a sequence.</td></tr>

    <!-- Functions -->
    <tr><td>Python Functions</td><td>def my_func(): pass</td><td>Defines a function.</td></tr>
    <tr><td>Python Lambda</td><td>lambda x: x + 1</td><td>Creates an anonymous function (lambda function).</td></tr>

    <!-- Advanced Topics -->
    <tr><td>Python Classes/Objects</td><td>class MyClass:</td><td>Defines a class in Python.</td></tr>
    <tr><td>Python Inheritance</td><td>class SubClass(SuperClass):</td><td>Defines a subclass that inherits from a superclass.</td></tr>
    <tr><td>Python Iterators</td><td>iter(my_list)</td><td>Creates an iterator object from a sequence.</td></tr>
    <tr><td>Python Polymorphism</td><td>def func(obj): obj.method()</td><td>Polymorphism through method overloading.</td></tr>
    <tr><td>Python Scope</td><td>global x</td><td>Declares a global variable inside a function.</td></tr>
    <tr><td>Python Modules</td><td>import math</td><td>Imports a module in Python.</td></tr>
    <tr><td>Python Dates</td><td>from datetime import date</td><td>Handles dates and times in Python.</td></tr>

    <!-- File Handling -->
    <tr><td>Python File Handling</td><td>f = open("file.txt", "r")</td><td>Opens a file for reading.</td></tr>
    <tr><td>Python Read Files</td><td>f.read()</td><td>Reads the contents of a file.</td></tr>
    <tr><td>Python Write/Create Files</td><td>f = open("file.txt", "w")</td><td>Opens a file for writing (or creates it).</td></tr>
    <tr><td>Python Delete Files</td><td>import os; os.remove("file.txt")</td><td>Deletes a file using the os module.</td></tr>

    <!-- Python MySQL -->
    <tr><td>MySQL Get Started</td><td>import mysql.connector</td><td>Connects to a MySQL database.</td></tr>
    <tr><td>MySQL Create Database</td><td>mydb.cursor().execute("CREATE DATABASE mydb")</td><td>Creates a new database in MySQL.</td></tr>
    <tr><td>MySQL Create Table</td><td>mycursor.execute("CREATE TABLE users...")</td><td>Creates a new table in MySQL.</td></tr>

    <!-- Python MongoDB -->
    <tr><td>MongoDB Get Started</td><td>import pymongo</td><td>Connects to a MongoDB database.</td></tr>
    <tr><td>MongoDB Create DB</td><td>myclient["mydatabase"]</td><td>Creates a new MongoDB database.</td></tr>
    <tr><td>MongoDB Insert</td><td>mycollection.insert_one({data})</td><td>Inserts a document into a collection.</td></tr>

    <!-- Python Reference -->
    <tr><td>Python Built-in Functions</td><td>len(), max(), min()</td><td>Common built-in functions in Python.</td></tr>
    <tr><td>Python String Methods</td><td>string.upper(), string.split()</td><td>Common string manipulation methods.</td></tr>
    <tr><td>Python List Methods</td><td>list.append(), list.pop()</td><td>Methods for manipulating lists.</td></tr>
    <tr><td>Python Dictionary Methods</td><td>dict.keys(), dict.values()</td><td>Methods for working with dictionaries.</td></tr>

    <!-- Advanced Built-in Functions -->
    <tr><td>Random Module</td><td>import random; random.randint(1, 10)</td><td>Generates random integers.</td></tr>
    <tr><td>Requests Module</td><td>import requests; requests.get(url)</td><td>Handles HTTP requests.</td></tr>
    <tr><td>Math Module</td><td>import math; math.sqrt(4)</td><td>Performs mathematical operations.</td></tr>

    <!-- Exception Handling -->
    <tr><td>Python Try...Except</td><td>try: code except: error</td><td>Handles exceptions (errors).</td></tr>

    <!-- Input and Output -->
    <tr><td>Python User Input</td><td>input("Enter something: ")</td><td>Takes user input from the console.</td></tr>
    <tr><td>Python String Formatting</td><td>"{} is {}".format("name", "value")</td><td>Formats strings dynamically.</td></tr>

    <!-- How To -->
    <tr><td>Remove List Duplicates</td><td>list(set(my_list))</td><td>Removes duplicates from a list.</td></tr>
    <tr><td>Reverse a String</td><td>string[::-1]</td><td>Reverses a string.</td></tr>
<tr><td>Append</td><td>list.append(x)</td><td>Adds an element x to the end of the list.</td></tr>
<tr><td>Extend</td><td>list.extend(iterable)</td><td>Extends the list by appending all elements from the iterable.</td></tr>
<tr><td>Insert</td><td>list.insert(i, x)</td><td>Inserts an element x at the specified index i.</td></tr>
<tr><td>Remove</td><td>list.remove(x)</td><td>Removes the first occurrence of the element x from the list.</td></tr>
<tr><td>Pop</td><td>list.pop([i])</td><td>Removes and returns the element at index i. Defaults to the last element if index i is not provided.</td></tr>
<tr><td>Clear</td><td>list.clear()</td><td>Removes all items from the list, leaving it empty.</td></tr>
<tr><td>Index</td><td>list.index(x[, start[, end]])</td><td>Returns the index of the first occurrence of the element x. Optional start and end arguments specify a range to search.</td></tr>
<tr><td>Count</td><td>list.count(x)</td><td>Returns the number of occurrences of the element x in the list.</td></tr>
<tr><td>Sort</td><td>list.sort(key=None, reverse=False)</td><td>Sorts the list in ascending order. You can pass a custom sorting function via the key argument and set reverse=True for descending order.</td></tr>
<tr><td>Reverse</td><td>list.reverse()</td><td>Reverses the elements of the list in place.</td></tr>
<tr><td>Copy</td><td>list.copy()</td><td>Returns a shallow copy of the list.</td></tr>
<tr><td>Count</td><td>tuple.count(x)</td><td>Returns the number of occurrences of x in the tuple.</td></tr>
<tr><td>Index</td><td>tuple.index(x)</td><td>Returns the index of the first occurrence of x in the tuple.</td></tr>
<tr><td>Add</td><td>set.add(x)</td><td>Adds an element x to the set.</td></tr>
<tr><td>Remove</td><td>set.remove(x)</td><td>Removes the element x from the set. Raises a KeyError if x is not found.</td></tr>
<tr><td>Discard</td><td>set.discard(x)</td><td>Removes the element x if it exists. Does nothing if x is not found.</td></tr>
<tr><td>Pop</td><td>set.pop()</td><td>Removes and returns an arbitrary element from the set. Raises a KeyError if the set is empty.</td></tr>
<tr><td>Clear</td><td>set.clear()</td><td>Removes all elements from the set.</td></tr>
<tr><td>Union</td><td>set.union(other_set)</td><td>Returns the union of the set and another set.</td></tr>
<tr><td>Intersection</td><td>set.intersection(other_set)</td><td>Returns the intersection of the set and another set.</td></tr>
<tr><td>Difference</td><td>set.difference(other_set)</td><td>Returns the difference between the set and another set.</td></tr>
<tr><td>Symmetric Difference</td><td>set.symmetric_difference(other_set)</td><td>Returns the symmetric difference of two sets.</td></tr>
<tr><td>Is Subset</td><td>set.issubset(other_set)</td><td>Checks if the set is a subset of another set.</td></tr>
<tr><td>Is Superset</td><td>set.issuperset(other_set)</td><td>Checks if the set is a superset of another set.</td></tr>
<tr><td>Is Disjoint</td><td>set.isdisjoint(other_set)</td><td>Returns True if the sets have no elements in common.</td></tr>
<tr><td>Copy</td><td>set.copy()</td><td>Returns a shallow copy of the set.</td></tr>
<tr><td>Get</td><td>dict.get(key[, default])</td><td>Returns the value for key if key is in the dictionary, else returns default.</td></tr>
<tr><td>Keys</td><td>dict.keys()</td><td>Returns a view object displaying the dictionary's keys.</td></tr>
<tr><td>Values</td><td>dict.values()</td><td>Returns a view object displaying the dictionary's values.</td></tr>
<tr><td>Items</td><td>dict.items()</td><td>Returns a view object displaying the dictionary's key-value pairs.</td></tr>
<tr><td>Pop</td><td>dict.pop(key[, default])</td><td>Removes the specified key and returns the value. If the key is not found, it returns the default value if provided.</td></tr>
<tr><td>Popitem</td><td>dict.popitem()</td><td>Removes and returns the last key-value pair as a tuple.</td></tr>
<tr><td>Update</td><td>dict.update([other])</td><td>Updates the dictionary with the key-value pairs from another dictionary or iterable of key-value pairs.</td></tr>
<tr><td>Clear</td><td>dict.clear()</td><td>Removes all items from the dictionary.</td></tr>
<tr><td>Set Default</td><td>dict.setdefault(key[, default])</td><td>Returns the value for key if key is in the dictionary, else inserts key with a value of default.</td></tr>
<tr><td>Copy</td><td>dict.copy()</td><td>Returns a shallow copy of the dictionary.</td></tr>
<tr><td>Lower</td><td>str.lower()</td><td>Converts all uppercase characters in a string to lowercase.</td></tr>
<tr><td>Upper</td><td>str.upper()</td><td>Converts all lowercase characters in a string to uppercase.</td></tr>
<tr><td>Replace</td><td>str.replace(old, new[, count])</td><td>Returns a string where all occurrences of <code>old</code> are replaced with <code>new</code>. If <code>count</code> is given, only the first <code>count</code> occurrences are replaced.</td></tr>
<tr><td>Find</td><td>str.find(sub[, start[, end]])</td><td>Returns the lowest index where substring sub is found. Returns -1 if not found.</td></tr>
<tr><td>Index</td><td>str.index(sub[, start[, end]])</td><td>Like find(), but raises a ValueError if the substring is not found.</td></tr>
<tr><td>Join</td><td>'separator'.join(iterable)</td><td>Joins the elements of an iterable with a specified separator string.</td></tr>
<tr><td>Split</td><td>str.split([sep[, maxsplit]])</td><td>Splits the string into a list of substrings based on the sep delimiter. If maxsplit is given, it performs at most maxsplit splits.</td></tr>
<tr><td>Strip</td><td>str.strip([chars])</td><td>Returns a copy of the string with leading and trailing characters removed. The chars argument specifies which characters to remove.</td></tr>
<tr><td>Startswith</td><td>str.startswith(prefix[, start[, end]])</td><td>Returns True if the string starts with the specified prefix.</td></tr>
<tr><td>Endswith</td><td>str.endswith(suffix[, start[, end]])</td><td>Returns True if the string ends with the specified suffix.</td></tr>
<tr><td>Count</td><td>str.count(sub[, start[, end]])</td><td>Returns the number of occurrences of sub

</table>
    `,
    numpy: `
        <table>
            <tr><th>Operation</th><th>Syntax/Function</th><th>Description</th></tr>

<!-- NumPy Basics -->
<tr><td>Importing NumPy</td><td>import numpy as np</td><td>Imports the NumPy library.</td></tr>
<tr><td>Creating Arrays</td><td>np.array([1, 2, 3])</td><td>Creates a NumPy array.</td></tr>
<tr><td>Array of Zeros</td><td>np.zeros((3, 4))</td><td>Creates a 3x4 array filled with zeros.</td></tr>
<tr><td>Array of Ones</td><td>np.ones((2, 3))</td><td>Creates a 2x3 array filled with ones.</td></tr>

<!-- Array Indexing & Slicing -->
<tr><td>Array Indexing</td><td>arr[2]</td><td>Accesses the 3rd element of an array.</td></tr>
<tr><td>Array Slicing</td><td>arr[1:4]</td><td>Returns elements from index 1 to 3.</td></tr>

<!-- Data Types -->
<tr><td>Array Data Type</td><td>arr.dtype</td><td>Returns the data type of the array.</td></tr>
<tr><td>Change Data Type</td><td>arr.astype('float32')</td><td>Converts the array to a different data type.</td></tr>

<!-- Copy vs View -->
<tr><td>Copy</td><td>arr.copy()</td><td>Creates a copy of the array.</td></tr>
<tr><td>View</td><td>arr.view()</td><td>Creates a view of the array without data duplication.</td></tr>

<!-- Array Shape & Reshaping -->
<tr><td>Shape of Array</td><td>arr.shape</td><td>Returns the shape of the array.</td></tr>
<tr><td>Reshaping Array</td><td>arr.reshape((2, 3))</td><td>Reshapes the array to a new shape.</td></tr>

<!-- Iterating Arrays -->
<tr><td>Iterating Array</td><td>for x in arr: print(x)</td><td>Iterates through array elements.</td></tr>

<!-- Joining & Splitting Arrays -->
<tr><td>Joining Arrays</td><td>np.concatenate((arr1, arr2))</td><td>Concatenates two arrays along an axis.</td></tr>
<tr><td>Splitting Arrays</td><td>np.array_split(arr, 3)</td><td>Splits the array into 3 sub-arrays.</td></tr>

<!-- Searching & Sorting -->
<tr><td>Array Search</td><td>np.where(arr == 2)</td><td>Finds indices where the array equals 2.</td></tr>
<tr><td>Sorting Array</td><td>np.sort(arr)</td><td>Sorts the array in ascending order.</td></tr>

<!-- Filtering Arrays -->
<tr><td>Array Filter</td><td>arr[arr > 2]</td><td>Returns elements greater than 2.</td></tr>

<!-- NumPy Random -->
<tr><td>Random Array</td><td>np.random.rand(3, 2)</td><td>Generates a 3x2 array of random numbers.</td></tr>
<tr><td>Random Permutation</td><td>np.random.permutation(arr)</td><td>Returns a permutation of the array.</td></tr>

<!-- Data Distributions -->
<tr><td>Normal Distribution</td><td>np.random.normal(0, 1, 1000)</td><td>Generates 1000 samples from a normal distribution with mean 0 and standard deviation 1.</td></tr>
<tr><td>Binomial Distribution</td><td>np.random.binomial(n, p, size)</td><td>Generates samples from a binomial distribution.</td></tr>
<tr><td>Poisson Distribution</td><td>np.random.poisson(lambda, size)</td><td>Generates samples from a Poisson distribution.</td></tr>

<!-- NumPy ufunc -->
<tr><td>Element-wise Addition</td><td>np.add(arr1, arr2)</td><td>Adds elements of two arrays.</td></tr>
<tr><td>Element-wise Multiplication</td><td>np.multiply(arr1, arr2)</td><td>Multiplies elements of two arrays.</td></tr>
<tr><td>Rounding</td><td>np.around(arr, decimals=2)</td><td>Rounds array elements to 2 decimal places.</td></tr>
<tr><td>Logarithms</td><td>np.log(arr)</td><td>Calculates the natural logarithm of array elements.</td></tr>
<tr><td>Summation</td><td>np.sum(arr)</td><td>Calculates the sum of all elements.</td></tr>
<tr><td>Finding GCD</td><td>np.gcd.reduce(arr)</td><td>Finds the greatest common divisor.</td></tr>

<!-- Seaborn for Visualization -->
<tr><td>Seaborn Scatterplot</td><td>sns.scatterplot(x='col1', y='col2', data=df)</td><td>Creates a scatter plot with Seaborn.</td></tr>
<tr><td>Seaborn Histogram</td><td>sns.histplot(df['col'])</td><td>Creates a histogram of the column data.</td></tr>
<tr><td>Seaborn Heatmap</td><td>sns.heatmap(df.corr())</td><td>Creates a heatmap based on DataFrame correlations.</td></tr>
<tr><td>Seaborn Pairplot</td><td>sns.pairplot(df)</td><td>Creates pairwise scatterplots for the DataFrame.</td></tr>

<!-- Advanced Plotting Attributes in Matplotlib -->
<tr><td>Plot Title</td><td>plt.title('Plot Title')</td><td>Sets the title for a Matplotlib plot.</td></tr>
<tr><td>X-axis Label</td><td>plt.xlabel('X Axis')</td><td>Sets the label for the X-axis.</td></tr>
<tr><td>Legend</td><td>plt.legend()</td><td>Displays the legend for the plot.</td></tr>
<tr><td>Grid</td><td>plt.grid(True)</td><td>Adds a grid to the plot.</td></tr>
</table>
    `,
    pandas: `
        <table>
            <tr><th>Operation</th><th>Syntax/Function</th><th>Description</th></tr>
<tr><td>Importing Pandas</td><td>import pandas as pd</td><td>Imports the Pandas library.</td></tr>
<tr><td>Creating DataFrame</td><td>pd.DataFrame(data)</td><td>Creates a DataFrame from data.</td></tr>
<tr><td>Read CSV File</td><td>pd.read_csv('file.csv')</td><td>Reads data from a CSV file into a DataFrame.</td></tr>
<tr><td>DataFrame Info</td><td>df.info()</td><td>Provides summary information about the DataFrame.</td></tr>
<tr><td>DataFrame Head</td><td>df.head()</td><td>Returns the first 5 rows of the DataFrame.</td></tr>
<tr><td>Select Column</td><td>df['column']</td><td>Selects a single column from the DataFrame.</td></tr>
<tr><td>Filter Rows</td><td>df[df['column'] > value]</td><td>Filters rows based on column values.</td></tr>
<tr><td>Group By</td><td>df.groupby('column').sum()</td><td>Groups data by column and applies aggregation.</td></tr>
<tr><td>Sort Values</td><td>df.sort_values('column')</td><td>Sorts the DataFrame by a column.</td></tr>
<tr><td>Pivot Table</td><td>df.pivot_table(values, index, columns)</td><td>Creates a pivot table.</td></tr>
<tr><td>Drop Column</td><td>df.drop('column', axis=1)</td><td>Drops a column from the DataFrame.</td></tr>
<tr><td>Drop Duplicates</td><td>df.drop_duplicates()</td><td>Removes duplicate rows from the DataFrame.</td></tr>
<tr><td>Fill Missing Values</td><td>df.fillna(value)</td><td>Fills missing values with the specified value.</td></tr>
<tr><td>Merge DataFrames</td><td>pd.merge(df1, df2, on='key')</td><td>Merges two DataFrames on a key.</td></tr>
<tr><td>Concatenate DataFrames</td><td>pd.concat([df1, df2])</td><td>Concatenates two DataFrames along an axis.</td></tr>
<tr><td>Describe</td><td>df.describe()</td><td>Generates summary statistics for numeric columns.</td></tr>
<tr><td>Apply Function</td><td>df['column'].apply(function)</td><td>Applies a function to each element in a column.</td></tr>
<tr><td>Map Values</td><td>df['column'].map(dictionary)</td><td>Maps values in a column using a dictionary.</td></tr>
<tr><td>Rename Columns</td><td>df.rename(columns={'old_name': 'new_name'})</td><td>Renames columns in the DataFrame.</td></tr>
<tr><td>Set Index</td><td>df.set_index('column')</td><td>Sets a column as the index of the DataFrame.</td></tr>
<tr><td>Reset Index</td><td>df.reset_index()</td><td>Resets the index of the DataFrame.</td></tr>
<tr><td>Rolling Window</td><td>df.rolling(window=3).mean()</td><td>Calculates rolling window statistics.</td></tr>
<tr><th>Operation</th><th>Syntax/Function</th><th>Description</th></tr>

<!-- Pandas Basics -->
<tr><td>Importing Pandas</td><td>import pandas as pd</td><td>Imports the Pandas library.</td></tr>
<tr><td>Creating a DataFrame</td><td>pd.DataFrame(data)</td><td>Creates a DataFrame from a dictionary or 2D array.</td></tr>
<tr><td>Creating a Series</td><td>pd.Series(data)</td><td>Creates a Pandas Series from an array or list.</td></tr>

<!-- Pandas Intro & Getting Started -->
<tr><td>View DataFrame Head</td><td>df.head()</td><td>Returns the first 5 rows of the DataFrame.</td></tr>
<tr><td>View DataFrame Tail</td><td>df.tail()</td><td>Returns the last 5 rows of the DataFrame.</td></tr>
<tr><td>DataFrame Info</td><td>df.info()</td><td>Displays information about the DataFrame, such as index, dtypes, and memory usage.</td></tr>

<!-- Reading Files -->
<tr><td>Read CSV File</td><td>pd.read_csv('file.csv')</td><td>Reads a CSV file into a DataFrame.</td></tr>
<tr><td>Read JSON File</td><td>pd.read_json('file.json')</td><td>Reads a JSON file into a DataFrame.</td></tr>
<tr><td>Save DataFrame to CSV</td><td>df.to_csv('file.csv')</td><td>Saves the DataFrame to a CSV file.</td></tr>

<!-- DataFrame Operations -->
<tr><td>Descriptive Statistics</td><td>df.describe()</td><td>Generates descriptive statistics (count, mean, std, etc.) of numeric columns.</td></tr>
<tr><td>Selecting Column</td><td>df['column']</td><td>Selects a column from the DataFrame.</td></tr>
<tr><td>Selecting Row by Index</td><td>df.iloc[0]</td><td>Selects the first row by index.</td></tr>
<tr><td>Selecting Rows by Condition</td><td>df[df['column'] > 0]</td><td>Selects rows where the column's value is greater than 0.</td></tr>
<tr><td>Dropping Columns</td><td>df.drop('column', axis=1)</td><td>Deletes the specified column from the DataFrame.</td></tr>

<!-- Data Cleaning -->
<tr><td>Handling Missing Data</td><td>df.isnull().sum()</td><td>Shows the number of missing values in each column.</td></tr>
<tr><td>Filling Missing Data</td><td>df.fillna(value)</td><td>Replaces missing values with the specified value.</td></tr>
<tr><td>Drop Rows with Missing Data</td><td>df.dropna()</td><td>Removes rows with any missing values.</td></tr>
<tr><td>Removing Duplicates</td><td>df.drop_duplicates()</td><td>Removes duplicate rows from the DataFrame.</td></tr>

<!-- Cleaning Wrong Format -->
<tr><td>Convert Column Data Type</td><td>df['column'] = pd.to_datetime(df['column'])</td><td>Converts a column to datetime format.</td></tr>

<!-- Correlations -->
<tr><td>Correlation Matrix</td><td>df.corr()</td><td>Returns the correlation matrix of numeric columns.</td></tr>

<!-- Data Analysis -->
<tr><td>Group By</td><td>df.groupby('column').sum()</td><td>Groups the DataFrame by a column and aggregates with a sum.</td></tr>
<tr><td>Pivot Table</td><td>df.pivot_table(index='column1', columns='column2', values='value')</td><td>Creates a pivot table from the DataFrame.</td></tr>

<!-- Plotting -->
<tr><td>Plot DataFrame</td><td>df.plot()</td><td>Generates a line plot for all columns in the DataFrame.</td></tr>
<tr><td>Plotting Histogram</td><td>df['column'].hist()</td><td>Generates a histogram for a column.</td></tr>
<tr><td>Scatter Plot</td><td>df.plot.scatter(x='col1', y='col2')</td><td>Generates a scatter plot of two columns.</td></tr>
<tr><td>Bar Plot</td><td>df['column'].value_counts().plot(kind='bar')</td><td>Generates a bar plot for the frequency of values in a column.</td></tr>

<!-- Advanced DataFrame Manipulation -->
<tr><td>Merging DataFrames</td><td>pd.merge(df1, df2, on='key')</td><td>Merges two DataFrames based on a common column.</td></tr>
<tr><td>Concatenating DataFrames</td><td>pd.concat([df1, df2])</td><td>Concatenates two DataFrames along rows or columns.</td></tr>
<tr><td>Sorting DataFrame</td><td>df.sort_values(by='column')</td><td>Sorts the DataFrame by the specified column.</td></tr>
<tr><td>Reset Index</td><td>df.reset_index(drop=True)</td><td>Resets the index of the DataFrame.</td></tr>
<tr><td>Apply Function to Column</td><td>df['column'].apply(lambda x: x+1)</td><td>Applies a function to each element in a column.</td></tr>
<tr><td>Renaming Columns</td><td>df.rename(columns={'old': 'new'})</td><td>Renames the specified columns in the DataFrame.</td></tr>

<!-- Time Series -->
<tr><td>Resample Time Series Data</td><td>df.resample('M').mean()</td><td>Resamples the time series data by month and calculates the mean.</td></tr>

<!-- String Operations -->
<tr><td>String Contains</td><td>df['column'].str.contains('text')</td><td>Checks if the text is present in a column of strings.</td></tr>
<tr><td>Replace String</td><td>df['column'].str.replace('old', 'new')</td><td>Replaces occurrences of 'old' with 'new' in a column of strings.</td></tr>

<!-- Pandas Advanced Functions -->
<tr><td>Rolling Window</td><td>df['column'].rolling(window=3).mean()</td><td>Calculates a rolling mean over a window of 3 rows.</td></tr>
<tr><td>Shift Data</td><td>df['column'].shift(1)</td><td>Shifts the data in a column down by 1 row.</td></tr>
<tr><td>Cumulative Sum</td><td>df['column'].cumsum()</td><td>Calculates the cumulative sum of a column.</td></tr>
<tr><td>Rank Values</td><td>df['column'].rank()</td><td>Ranks the values in a column.</td></tr>

<!-- Timeit for Performance -->
<tr><td>Measure Execution Time</td><td>import timeit; timeit.timeit('df.apply()')</td><td>Measures the execution time of a DataFrame operation.</td></tr>



        </table>
    `,
    matplotlib: `
        <table>
            <tr><th>Operation</th><th>Syntax/Function</th><th>Description</th></tr>
<tr><td>Importing Matplotlib</td><td>import matplotlib.pyplot as plt</td><td>Imports the Matplotlib library.</td></tr>
<tr><td>Basic Line Plot</td><td>plt.plot(x, y, color='blue', linestyle='-', marker='o')</td><td>Creates a basic line plot with color, linestyle, and marker.</td></tr>
<tr><td>Scatter Plot</td><td>plt.scatter(x, y, color='red', alpha=0.5, s=100)</td><td>Creates a scatter plot with color, transparency, and marker size.</td></tr>
<tr><td>Bar Plot</td><td>plt.bar(x, height, color='green', width=0.4, alpha=0.7)</td><td>Creates a bar plot with specified color, width, and transparency.</td></tr>
<tr><td>Horizontal Bar Plot</td><td>plt.barh(y, width, color='orange')</td><td>Creates a horizontal bar plot.</td></tr>
<tr><td>Histogram</td><td>plt.hist(data, bins=10, color='purple', alpha=0.5)</td><td>Creates a histogram with specified bins and color.</td></tr>
<tr><td>Set Title</td><td>plt.title('Title', fontsize=14, fontweight='bold')</td><td>Sets the title with font size and weight.</td></tr>
<tr><td>Set X-axis Label</td><td>plt.xlabel('X Label', fontsize=12)</td><td>Sets the label for the x-axis with font size.</td></tr>
<tr><td>Set Y-axis Label</td><td>plt.ylabel('Y Label', fontsize=12)</td><td>Sets the label for the y-axis with font size.</td></tr>
<tr><td>Set Limits</td><td>plt.xlim(min, max)</td><td>Sets limits for the x-axis.</td></tr>
<tr><td>Set Y-axis Limits</td><td>plt.ylim(min, max)</td><td>Sets limits for the y-axis.</td></tr>
<tr><td>Legend</td><td>plt.legend(loc='upper right', fontsize=10)</td><td>Adds a legend to the plot with specified location and font size.</td></tr>
<tr><td>Grid</td><td>plt.grid(True, linestyle='--', alpha=0.5)</td><td>Adds gridlines with specified linestyle and transparency.</td></tr>
<tr><td>Save Plot</td><td>plt.savefig('plot.png', dpi=300, bbox_inches='tight')</td><td>Saves the plot as a PNG file with specified resolution and bounding box.</td></tr>
<tr><td>Show Plot</td><td>plt.show()</td><td>Displays the plot.</td></tr>
<tr><td>Multiple Subplots</td><td>plt.subplot(2, 1, 1)</td><td>Creates a 2x1 grid of subplots, focusing on the first one.</td></tr>
<tr><td>Adjust Subplot Parameters</td><td>plt.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1)</td><td>Adjusts the spacing between subplots.</td></tr>
<tr><td>Annotate</td><td>plt.annotate('text', xy=(x, y), xytext=(xtext, ytext), arrowprops=dict(facecolor='black', arrowstyle='->'))</td><td>Adds annotations to the plot with arrows.</td></tr>
<tr><td>Pie Chart</td><td>plt.pie(data, labels=labels, autopct='%1.1f%%', startangle=90)</td><td>Creates a pie chart with labels and percentage display.</td></tr>
<tr><td>Customize Ticks</td><td>plt.xticks(rotation=45, fontsize=10)</td><td>Sets the rotation and font size for x-ticks.</td></tr>
<tr><td>Set Aspect Ratio</td><td>plt.axis('equal')</td><td>Sets equal aspect ratio for x and y axes.</td></tr>
<tr><td>Box Plot</td><td>plt.boxplot(data, notch=True, patch_artist=True)</td><td>Creates a box plot with notches and filled boxes.</td></tr>
<!-- Add more Matplotlib operations here as needed -->

        </table>
    `,
    seaborn: `
        <table>
            <tr><th>Operation</th><th>Syntax/Function</th><th>Description</th></tr>
<tr><td>Importing Seaborn</td><td>import seaborn as sns</td><td>Imports the Seaborn library.</td></tr>
<tr><td>Basic Scatter Plot</td><td>sns.scatterplot(x='column_x', y='column_y', data=df, hue='category', style='style_column')</td><td>Creates a scatter plot with hue and style differentiation.</td></tr>
<tr><td>Line Plot</td><td>sns.lineplot(x='column_x', y='column_y', data=df, palette='tab10', markers=True, dashes=False)</td><td>Creates a line plot with different colors, markers, and no dashes.</td></tr>
<tr><td>Bar Plot</td><td> sns.barplot(x='column_x', y='column_y', data=df, palette='pastel', ci='sd')</td><td>Creates a bar plot with a pastel color palette and confidence interval as standard deviation.</td></tr>
<tr><td>Count Plot</td><td>sns.countplot(x='column', data=df, palette='Set2')</td><td>Creates a count plot showing the number of occurrences of categorical variables.</td></tr>
<tr><td>Histogram</td><td>sns.histplot(data, bins=30, kde=True)</td><td>Creates a histogram with kernel density estimation.</td></tr>
<tr><td>Box Plot</td><td>sns.boxplot(x='category', y='value', data=df, palette='Set3', notch=True)</td><td>Creates a box plot with notches and specified color palette.</td></tr>
<tr><td>Heatmap</td><td>sns.heatmap(data, annot=True, cmap='coolwarm', linewidths=0.5)</td><td>Creates a heatmap with annotations and a specific color map.</td></tr>
<tr><td>Pair Plot</td><td>sns.pairplot(df, hue='category', diag_kind='kde')</td><td>Creates a pair plot colored by category with kernel density on the diagonal.</td></tr>
<tr><td>Facet Grid</td><td>g = sns.FacetGrid(df, col='column_x', row='column_y')</td><td>Creates a grid of subplots for visualizing data across multiple facets.</td></tr>
<tr><td>Set Style</td><td> sns.set_style('whitegrid')</td><td>Sets the style of the plots.</td></tr>
<tr><td>Set Context</td><td>sns.set_context('notebook')</td><td>Sets the context for the visualizations (notebook, talk, paper).</td></tr>
<tr><td>Joint Plot</td><td>sns.jointplot(x='column_x', y='column_y', data=df, kind='scatter')</td><td>Creates a joint plot with scatter visualization.</td></tr>
<tr><td>Pair Plot with Hue</td><td>sns.pairplot(df, hue='category', palette='Set2')</td><td>Creates pair plots with color differentiation based on categories.</td></tr>
<tr><td>Rug Plot</td><td>sns.rugplot(data)</td><td>Adds a rug plot to the axes.</td></tr>
<tr><td>Strip Plot</td><td>sns.stripplot(x='column', y='value', data=df, jitter=True, color='black')</td><td>Creates a strip plot with jitter for better visualization.</td></tr>
<tr><td>Swarm Plot</td><td>sns.swarmplot(x='column', y='value', data=df, color='blue')</td><td>Creates a swarm plot to avoid overlapping points.</td></tr>
<tr><td>Set Palette</td><td> sns.set_palette('deep')</td><td>Sets the color palette for the plots.</td></tr>
<tr><td>Customizing Axes</td><td>plt.xticks(rotation=45)</td><td>Rotates x-ticks for better visibility.</td></tr>
<!-- Add more Seaborn operations here as needed -->

        </table>
    `
};

// Function to display the cheat sheet
let currentTab = null; // Keep track of the current open tab

// Function to show or toggle the cheat sheet
function showSheet(library) {
    const cheatsheetDiv = document.getElementById('cheatsheet');

    if (currentTab === library) {
        // If the same tab is clicked, close the cheat sheet
        cheatsheetDiv.innerHTML = '';
        currentTab = null; // Reset the current tab
    } else {
        // Load the selected cheat sheet
        cheatsheetDiv.innerHTML = cheatSheets[library];
        currentTab = library; // Update the current tab
    }
}

// Adding event listeners to the buttons
document.getElementById('pythonTab').addEventListener('click', function() {
    showSheet('python');
});
document.getElementById('numpyTab').addEventListener('click', function() {
    showSheet('numpy');
});
document.getElementById('pandasTab').addEventListener('click', function() {
    showSheet('pandas');
});
document.getElementById('matplotlibTab').addEventListener('click', function() {
    showSheet('matplotlib');
});
document.getElementById('seabornTab').addEventListener('click', function() {
    showSheet('seaborn');
});

// Download button functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
    const blob = new Blob([document.getElementById('cheatsheet').innerHTML], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'cheatsheet.html';
    link.click();
});
