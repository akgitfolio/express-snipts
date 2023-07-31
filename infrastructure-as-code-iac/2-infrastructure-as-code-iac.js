import pulumi

# Create a new EC2 instance
instance = pulumi.Output.create(
    pulumi.aws.ec2.Instance('my-instance',
    instance_type='t2.micro',
    ami='ami-00000000',
    security_groups=['my-security-group'])
)
