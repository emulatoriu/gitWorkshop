import os

print("Hi there - awaiting your feedback in form of a javascript or python script")

script_path = os.path.dirname(os.path.realpath(__file__))
feedback_path =  script_path + "/FeedbackScripts/"
#print(script_path)

file_contents_py = []
file_contents_js = []

for file in os.listdir(feedback_path):
    # check only text files
    if file.endswith('.py'):
        f = open(feedback_path + file, "r")
        file_content = f"\nprint(\"************\")\nprint(\"File: {file}\")\n{f.read()}\nprint(\"************\")"
        file_contents_py.append(file_content)
    elif file.endswith('.js'):
        f = open(feedback_path + file, "r")
        file_content = f"\nconsole.log(\"************\")\nconsole.log(\"File: {file}\")\n{f.read()}\nconsole.log(\"************\")"
        file_contents_js.append(file_content)

collaborated_file_name_py = script_path + "/allFeedbacks.py"
collaborated_file_name_js = script_path + "/allFeedbacks.js"

if os.path.exists(collaborated_file_name_py):
    os.remove(collaborated_file_name_py)
    
if os.path.exists(collaborated_file_name_js):
    os.remove(collaborated_file_name_js)    

collaborated_code_file_py = file = open(collaborated_file_name_py,'a+')
collaborated_code_file_js = file = open(collaborated_file_name_js,'a+')

for code_parts in file_contents_py:
    collaborated_code_file_py.write(code_parts)
collaborated_code_file_py.close()

for code_parts in file_contents_js:
    collaborated_code_file_js.write(code_parts)
collaborated_code_file_js.close()