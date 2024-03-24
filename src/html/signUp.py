from flask import Flask, render_template, request

app = Flask(__name__, static_url_path='/static')

# Route for the login page
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']


        print("Email:", email)
        print("Password:", password)
    return render_template('index.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('pwd')
        repeat_password = request.form.get('repeatpwd')
        name = request.form.get('name')
        phone = request.form.get('phone')
        bank_account = request.form.get('bank')



        print("Form Data Received:")
        print("Email:", email)
        print("Password:", password)
        print("Repeat Password:", repeat_password)
        print("Name:", name)
        print("Phone:", phone)
        print("Bank Account Number:", bank_account)
        
    # Render the signup.html template
    return render_template('signup.html')

@app.route('/forget_password', methods=['GET', 'POST'])
def forget_password():
    if request.method == 'POST':
        email = request.form.get('email')
        phone = request.form.get('phone')
        
        # Process the form data here
        print("Email Address:", email)
        print("Phone Number:", phone)
        
        return render_template('forgetPassword.html')
    
    # If the request method is GET, render the forgetPassword.html template
    return render_template('forgetPassword.html')

if __name__ == '__main__':
    app.run(debug=True)
