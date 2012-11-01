#! /bin/zsh

if [ -n "$1" ]
then 
	commit_message="$1"
else
	commit_message="Updated site `date`."
fi

git add .
git commit -a -m "$commit_message"
git push origin master
