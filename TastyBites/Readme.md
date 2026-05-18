python --version
pip install virtualenv
python -m venv myenv 
myenv\\Scripts\\activate
pip install django
django-admin --version
django-admin startproject myproject
cd myproject
python manage.py runserver
python manage.py startapp delivery
python3 manage.py makemigrations
python3 manage.py migrate  