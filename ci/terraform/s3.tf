terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.70"
    }
  }
}

provider "aws" {
  profile = "default"
  region = "us-east-1"
}

resource "aws_s3_bucket" "b" {
  bucket = "app.neighborly.tools"
  acl    = "public-read"
  policy = file("policy.json")
  versioning {
    enabled = true
  }
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}


resource "aws_s3_bucket" "b" {
  bucket = "neighborly.tools.build"
  acl    = "private"

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket" "b" {
  bucket = "neighborly.tools.ui.terraform"
  acl    = "private"
  versioning {
    enabled = true
  }
  tags = {
    Name = "neighborly.tools.ui.terraform"    
  }
}