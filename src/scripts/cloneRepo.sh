#!/bin/bash
# Script to clone a github repository

username=$1
repoName=$2

mkdir ./myRepos
cd myRepos

git clone git@github.com:$username/$repoName.git
echo "We finished cloning"
