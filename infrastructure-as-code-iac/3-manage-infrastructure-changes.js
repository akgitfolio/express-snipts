resource "aws_instance" "my_instance" {
  ami           = "ami-00000000"
  instance_type = "t2.micro"
  security_group = "my_security_group"
  count         = 3
}
