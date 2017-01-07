#potterketo.diet

Start local server:
```
grunt serve
```

Build (do this before depoyment):

```
grunt build
```

Commit build changes to master branch and push to github, then push to Digital Ocean:

```
git subtree push --prefix dist live master
```

If git won't allow the push, can try this:

```
git push live `git subtree split --prefix dist master`:master --force
```

Or push to Digital Ocean via alias:

```
deployketo
```
