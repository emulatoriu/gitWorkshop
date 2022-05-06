import os

print("Hi there - awaiting your feedback in form of a python script")

script_path = os.path.dirname(os.path.realpath(__file__))
feedback_path =  script_path + "/FeedbackScripts/"
#print(script_path)

file_contents = []

for file in os.listdir(feedback_path):
    # check only text files
    if file.endswith('.py'):
        f = open(feedback_path + file, "r")
        file_content = f"\nprint(\"************\")\nprint(\"{file}\")\n{f.read()}\nprint(\"************\")"
        file_contents.append(file_content)

collaborated_file_name = script_path + "/allFeedbacks.py"

if os.path.exists(collaborated_file_name):
    os.remove(collaborated_file_name)

collaborated_code_file = file = open(collaborated_file_name,'a+')

for code_parts in file_contents:
    collaborated_code_file.write(code_parts)
collaborated_code_file.close()