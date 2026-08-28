#!/usr/bin/env python3
with open('/home/pupeng/projects/nzyy.cc/app/theory/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Chinese curly quotes with straight single quotes
content = content.replace('“', "'")  # "
content = content.replace('”', "'")  # "

with open('/home/pupeng/projects/nzyy.cc/app/theory/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed quotes in theory page")
