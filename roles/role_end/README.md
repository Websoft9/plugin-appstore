Ansible Role: end
=========

在CentOS或者Ubuntu服务器上结束部署后期的任务

Requirements
------------

无特殊要求,此 role 需要 root 用户权限,可以在playbook全局加入 `become: yes`,或者如下调用 role:

```
- hosts: all
  roles:
    - role: role_end
      become: yes
```

Role Variables
--------------
None



Dependencies
------------

None

Example Playbook
----------------

```
- hosts: db-servers
  become: yes

  roles:
    - { role: role_end }
```


License
-------

BSD

