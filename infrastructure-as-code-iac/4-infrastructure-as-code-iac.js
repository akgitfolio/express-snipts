---
- hosts: all
  tasks:
    - name: Create EC2 instance
      ec2:
        key_name: my_key_name
        image: ami-00000000
        instance_type: t2.micro
        security_groups: my_security_group
