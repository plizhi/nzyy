#!/usr/bin/env python3
import re

with open('/home/pupeng/projects/nzyy.cc/app/theory/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all description values and escape inner quotes, then convert to template literal
def fix_desc(match):
    prefix = match.group(1)  # "description:\n      "
    value = match.group(2)   # the quoted string content
    # Escape backticks and ${ in the value
    value = value.replace('`', '\\`')
    value = value.replace('${', '\\${')
    # Escape any remaining double quotes that are Chinese quote remnants
    # These are the ones that appear as pairs inside the content
    # Just replace all " with ' (single quotes) for safety
    value = value.replace('"', "'")
    return f'{prefix}`{value}`'

# Match description: "..." with possible newlines
pattern = r'(description:\n      )"([^"]*)"'
content = re.sub(pattern, fix_desc, content, flags=re.DOTALL)

with open('/home/pupeng/projects/nzyy.cc/app/theory/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
