import sys
import basic

# Check if a filename was provided as an argument
if len(sys.argv) < 2:
    print("Error: Please provide a file to run.")
    sys.exit(1)

# Get the filename from the command-line argument
filename = sys.argv[1]

try:
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()
except FileNotFoundError:
    print(f"Error: File not found at '{filename}'")
    sys.exit(1)

# Run the file content using your interpreter
result, error = basic.run(filename, text)

# This part now only prints if there was an error.
# The normal output will come from the PRINT statements in your .magic file.
if error:
    print(error.as_string())