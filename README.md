1. Create Virtual environment
    $ sudo apt-get install virtualenv
    $ source env/bin/activate

        $ sudo apt install python3-django
2.  Create project
    $ django-admin startproject <name>
    $ django-admin startapp <name>

3. PROJECT [ECOMMERCE] - Even   a guest user can shop this means that a user can buy without registration.

4. Create data structure  canvas for Ecommerce project, afterwards run:-
    $ python manage.py makemigrations
    $ python manage.py migrate => to push to DB

    thereafter, Added the models to the admin panel.

5. Create Admin:-
    $ python manage.py createsuperuser

    thereafter, fill in.

6. Query All the Products
