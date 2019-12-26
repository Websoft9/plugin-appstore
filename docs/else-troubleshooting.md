# Troubleshooting

We collect the most common troubleshooting of using AWX for your reference:

## Database related

#### Database service could not be started?

Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started  

It is recommended to first check through the command.

```shell
# restart postgresql service
systemctl restart postgresql-11

# view disk space
df -lh

# view memory rate
free -lh
```

#### phpPgAdmin page access blank?

Please try another browser, such as chrome or firefox. If the phpPgAdmin can be opened normally before, and now appears to be incomplete or blank, it is recommended to clean up the browser cache, cookies and other information

## Instance related

Instance troubleshooting is closely related to the Instance provider that is Cloud Platform   
Please refer to [Cloud Platform Documentation](https://support.websoft9.com/docs/faq/tech-instance.html)

## Network related

## Other