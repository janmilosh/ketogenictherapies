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

Or push to Digital Ocean via alias:

```
deployketo
```
