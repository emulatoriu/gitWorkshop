import os

print("Hi there - awaiting your feedback in form of a python script")

script_path = os.path.dirname(os.path.realpath(__file__))
print(script_path)
feedback_path =  script_path + "/FeedbackScripts/"
file_contents = []
collaborated_file_name = script_path + "/allFeedbacks.java"
if os.path.exists(collaborated_file_name):
    os.remove(collaborated_file_name)
collaborated_code_file = file = open(collaborated_file_name,'a+')
collaborated_code_file.write("class MainClass\n{\n\tpublic static void main(String[] args)\n\t{")

for file in os.listdir(feedback_path):
    # check only text files
    #if file.endswith('.py'):
    if file.endswith('.java'):
        f = open(feedback_path + file, "r")
        file_content_list = f.readlines()
        for string_element in file_content_list:
            if string_element.__contains__("System.out."):
                #file_content = f"\nprint(\"************\")\nprint(\"{file}\")\n{string_element}\nprint(\"************\")"
                file_content = f"\n\t\tSystem.out.println(\"************\");\n\t\tSystem.out.println(\"{file}\");\n{string_element}\t\tSystem.out.println(\"************\");"
                file_contents.append(file_content)

#collaborated_file_name = script_path + "/allFeedbacks.py"

#if os.path.exists(collaborated_file_name):
#    os.remove(collaborated_file_name)

#collaborated_code_file = file = open(collaborated_file_name,'a+')
for code_parts in file_contents:
    collaborated_code_file.write(code_parts)

collaborated_code_file.write("\n\t}\n}")    
collaborated_code_file.close()