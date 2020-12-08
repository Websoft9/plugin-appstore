DATABASES = {
    'default': {
        'ATOMIC_REQUESTS': True,
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': "awx",
        'USER': "awx",
        'PASSWORD': "awxpass",
        'HOST': "localhost",
        'PORT': "5432",
    }
}

BROADCAST_WEBSOCKET_SECRET = "WDBjM1hQNWVoazI3RzctM3lsQ2Q="
