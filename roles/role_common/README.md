Ansible Role: common
=========

在CentOS或者Ubuntu服务器上安装常见工具和配置系统自动更新

Requirements
------------

无特殊要求,此 role 需要 root 用户权限,可以在playbook全局加入 `become: yes`,或者如下调用 role:

```
- hosts: all
  roles:
    - role: role_common
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
    - { role: role_common }
```


License
-------

BSD

