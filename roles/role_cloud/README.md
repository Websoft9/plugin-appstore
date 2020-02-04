Ansible Role: cloud
=========

在CentOS或者Ubuntu服务器处理云厂家异同,以及设置交换分区

Requirements
------------

无特殊要求,此 role 需要 root 用户权限,可以在playbook全局加入 `become: yes`,或者如下调用 role:

```
- hosts: all
  roles:
    - role: role_cloud
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
- hosts: all
  become: yes

  roles:
    - { role: role_cloud }
```


License
-------

BSD

