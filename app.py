from flask import Flask, render_template
import os
import json

app = Flask(__name__,
            template_folder='templates',
            static_folder='static')

def load_portfolio_data():
    json_path = os.path.join(app.root_path, 'static', 'data', 'portfolio_data.json')
    try:
        with open(json_path, 'r') as file:
            data = json.load(file)
            return data['portfolio_items']
    except FileNotFoundError:
        print(f"Warning: Could not find portfolio data at {json_path}")
        return []
    except json.JSONDecodeError:
        print(f"Warning: Invalid JSON in portfolio data file")
        return []

@app.route('/')
def home():
    portfolio_items = load_portfolio_data()
    return render_template('index.html', portfolio_items = portfolio_items)

if __name__ == "__main__":
    app.run(debug=True)