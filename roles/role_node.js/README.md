Ansible Role: xxx
=========

在CentOS或者Ubuntu服务器上安装和配置xxxx 或xxx

Requirements
------------

无特殊要求,此 role 需要 root 用户权限,可以在playbook全局加入 `become: yes`,或者如下调用 role:

```
- hosts: all
  roles:
    - role: role_xxx
      become: yes
```

Role Variables
--------------

下面列出了可用变量和默认值(请参见"defaults/main.yml"):

```



```



Dependencies
------------

None

Example Playbook
----------------

```
- hosts: all
  become: yes
  vars_files:
    - vars/main.yml
  roles:
    - { role: role_xxx }
```

`vars/main.yml` :
```



```

License
-------

BSD

