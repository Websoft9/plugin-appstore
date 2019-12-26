# Parameters

The AWX deployment package contains a sequence software (referred to as "components") required for AWX to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.

## Path

### AWX

AWX installation directory: */opt/awx*  
AWX configuration file: */etc/awx/settings.py*  
Ansible Python packages: */opt/awx/embedded/lib/python2.7/site-packages*

```python
# The important items in the configuration file
TATIC_ROOT = '/opt/awx/static'
PROJECTS_ROOT = '/var/lib/awx/projects'
JOBOUTPUT_ROOT = '/var/lib/awx/job_status'
```

### Nginx

Nginx vhost configuration file: */etc/nginx/conf.d/default.conf*  
Nginx main configuration file: */etc/nginx/nginx.conf*  
Nginx logs file: */var/log/nginx/*  
Nginx & uWSGI configuration file: */etc/nginx/uwsgi_params*  

### uWSGI

uWSGI installation directory: */opt/awx/bin/uwsgi*  

### Python

Python installation directory: */usr/lib/python2.7* and */usr/lib/python*  
Python VM directory: */usr/bin/python2.7*  and */usr/bin/python*  

### Ansible

Ansible installation directory: */opt/awx/embedded/lib/python2.7/site-packages/ansible-2.7.4.dist-info*

### RabbitMQ

RabbitMQ installation & configuration directory: */usr/lib/rabbitmq*  
RabbitMQ logs file: */var/log/rabbitmq*

### PostgreSQL

PostgreSQL installation directory: */usr/pgsql-v*  # v是版本号  
PostgreSQL data file: */data/pgsql/base*  
PostgreSQL configuration file: */data/pgsql/postgresql.conf*    
PostgreSQL logs file: */data/pgsql/pg_log*  
PostgreSQL Web Management URL: *http://Internet IP:9090*, get credential from [Username and Password](/stack-accounts.md)

## Ports

These Ports is need when use AWX, refer to [Safe Group Setting on Cloud Console](https://support.websoft9.com/docs/faq/tech-instance.html)

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| PostgreSQL | 5432 | Remote connect PostgreSQL | Optional |
| HTTP | 80 | HTTP requests for AWX | Required |
| HTTPS | 443 | HTTPS requests AWX | Optional |
| phpPgAdmin on Docker | 9090 | Web managment GUI for PostgreSQL | Optional |

## Version

You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:

```shell
# Python Version
python --version

# Nginx version:
nginx -v

# PostgreSQL version:
psql --version

# Dokcer:
docker --version
```