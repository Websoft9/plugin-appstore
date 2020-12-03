# Troubleshooting

We collect the most common troubleshooting of using aaPanel for your reference:

> Many troubleshooting is closely related to the Server, if you can confirm troubleshooting is related to Cloud Platform, please refer to [Cloud Platform Documentation](https://support.websoft9.com/docs/faq/tech-instance.html)

#### Database service could not be started?

Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started  

It is recommended to first check through the command.

```shell
# restart mysql service
systemctl restart mysql

# view disk space
df -lh

# view memory rate
free -lh 
```

#### A server error has occurred?

```
docker logs awx_web
```

#### Create mannul Project from SCM type have error "WARNING: There are no available playbook directories in /var/lib/awx/projects...."

Reason: The directory /var/lib/awx/projects of AWX container not mounted to Server
Solution： Mounted the container's /var/lib/awx/projects to Server's path /data/wwwroot/awx/project.
