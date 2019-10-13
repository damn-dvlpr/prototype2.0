# Prototype 2.0
# Explicit Image Filtering
---
Considering the content on the internet, kids these days bump into explicit content either accidentally or due to bad company, providing a safer internet is the duty of everyone. The search engines we use try to filter out content based on predictions and statistics. But this might not be enough to secure tomorrow's great minds from falling into traps. How about a tool that filters content in realtime. <br>

Consider sitting at home and doing a quick google search, suddenly someone passes by and you make a really embarrassing typo which yields disturbing imagery. You dont want that to be seen by everyone, and you might be sensitive enough not to be able to handle it. That is where this tool comes into play.

*Ready for some testing.....?*

## Set up instructions
* Step 1: Load the extension
* Step 2: Start the development server
```
python3 -m venv ~/prototype
source ~/prototype/bin/activate
pip install -r requirements.txt
```
To run the server:
```
python manage.py runserver
```
## Technologies used
* Javascript
* Python
* Django (Python based Web-Framework)
* Firefox add-ons
* Chrome extensions

## Future additions and features
A lock on the extension for it not to be disabled or removed
Text can be filtered too

## Drawbacks as of now
runs only on the local machine
