# Basic { Flask + React } App

<p>This is an app made with Flask (backend) and React (frontend)</p>

<h3>1# First thing first, set up the backend:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" width="30" style="margin-bottom:-7;"/></h3>

- Create the backend folder in the app-folder
- Then install Flask, SQLAlchmy and  


<pre>
\backend> Pip install Flask
\backend> Pip install Flask-SQLAlchemy
\backend> Pip install Flask-cors
</pre>

- After this, you can start building your backend **API**
> Check out the files : `config.py`, `main.py` and `model.py` in the backend folder.

<details open>
<summary>Here's the config.py :</summary>

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# create the app
app = Flask(__name__)
CORS(app)

# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///flapp01.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# create the extension
db = SQLAlchemy(app)
```

</details>

***

<h3>2# Set up the Frontend: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="30" style="margin-bottom:-7;"/></h3>

- Create the frontend folder in the app-folder by installing React JS

<pre><code style="color:cyan;">\> <span style="color:yellow;">pnpm</span> create vite frontend --template react
</code></pre>

> Note that: I used `Vite Js` and `PNPM`, feel free to use whatever you like.

- Then get in the frontend folder/directory and install the node package

<pre><code style="color:cyan;">\> cd frontend
\frontend> <span style="color:yellow;">pnpm</span> install
</code></pre>

***

<h3> 3# Add some styling tools (optional): <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="20" style="margin-bottom:-3;" alt="Tailwind Css Icon" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" width="20" style="margin-bottom:-3;" alt="Framer Motion Icon" /></h3>

- <p>Still in the frontend side, install <a href="https://www.framer.com/motion/" style="color:skyblue">Tailwind Css</a> </p>

<pre>
<code style="color:skyblue;">\frontend> <span style="color:yellow;">pnpm</span> install -D tailwindcss
\frontend> <span style="color:yellow;">npx</span> tailwindcss init
</code>
</pre>

- <p>The same again, install <a href="https://www.framer.com/motion/" style="color:fuchsia">Framer Motion</a> </p>

<pre><code style="color:fuchsia;">\frontend> <span style="color:yellow;">pnpm</span> install framer-motion</code></pre>

$${\color{#00cec9}Enjoy ~ !}$$

Why do I use `PNPM` instead of `NPM` ? Well.. It's simply because it is ~~-better-~~ faster and lightweight.

***
X: @Momodo241