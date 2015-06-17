# file-uploader

Meteor File Uploader exemple. This uses [meteor-file-upload](https://github.com/carlosacp/meteor-file-uploader).

# Disclaimer:

It's still under development. Not ready to use in production.

# Developers:

* checkout this repo:

```
git clone git@github.com:carlosacp/file-uploader.git
cd file-uploader
```

* init submodule:

```
git submodule init
```

* update submodule:

```
git submodule update
```

* start meteor:

```
meteor
```

# Quick references (please, read this before commit)

* [Working with git submodule](https://chrisjean.com/git-submodules-adding-using-removing-and-updating).

* [Tips with git submodule](http://blogs.atlassian.com/2013/03/git-submodules-workflows-tips).

* Please, note the tips:

> always publish the submodule change before publishing the change to the superproject that references it

[see here](http://stackoverflow.com/questions/5814319/git-submodule-push)

> remember to commit all your changes before running git submodule update as if there are changes they will be overwritten!

* [Why git submodule is bad](https://codingkilledthecat.wordpress.com/2012/04/28/why-your-company-shouldnt-use-git-submodules).

# If you need to make changes to submodule (IMPORTANT!)

* go to submodule dir

```
cd packages/meteor-file-uploader
```

* checkout submodule master (if you change submodule before this step your changes will be lost)

```
git checkout master
```

* make the changes you desire

* commit submodule changes

```
git commit -am "<message>"
```

* push submodule changes

```
git push
```

* go to parent project

```
cd ../../
```

* add new submodule version

```
git add packages/meteor-file-uploader
```

* commit this change

```
git commit -m "submodule packages/meteor-file-uploader update"
```

* keep going with your work. Please, don't take too long to push your changes.
