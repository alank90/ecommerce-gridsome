## ================= Initialize git in your project: =========
**$ git init**

**$ git add .**

**$ git commit -m "First commit"** 

*Note- Remember to add node_modules/ directory to .gitignore file befor the commit* 

## === Checkout(Create) Local Branch and Setup Remote Repo to Track It: ===
**$ git checkout -b [new_branch]**

**$ git push -u origin [new_branch]**

***Note- To simplify workflow on your local setup issue command:
**$ git config --global push.default current
 Now in future only have to issue command 
 **$ git push -u   from command line.
 
## ===== Add existing remote branch to a local repo and track branch: =====
**$ git fetch** 

**$ git branch --track branch-name origin/branch-name** 

## =========  Add a new Remote Repo for your branch : ==========
**$ git remote add [name_of_your_remote]**  

## ==== Push changes from your local commit into your remote branch: ==== 
### ======== e.g. git push origin master =============================
**$ git push [name_of_your_new_remote] [name_of_your_branch]** 

## ============= Git Clone ============
**$ git clone [repo url] <optional> new repo name**

## ============ Delete a branch on your local filesystem: ============  
**$ git branch -d [name_of_your_branch]**  

## ============ Delete the branch on github: =============  
**$ git push origin :<name_of_your_github_branch>** 

**$ git remote prune origin**  *// This solves problem of old branches showing up in git branch -r command*

## ======== Download a remote branch to local computer: ========== 
**$ git checkout -t origin/branch-name**  

## ======= Change a Remote Repo on a Local Project ==============

###Change your remote Repo with the **git remote set-url** command.

**$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git**


## ======= Merge Last X Commits into One ======================
### If you want to write the new commit message from scratch, this suffices:

**$ git reset --soft HEAD~3** *//This merges last 3 commits*

**$ git commit -m "Consolidated Last Three Commits with Previous Command"**

## ========= Merging Branches with Git =================
## ========= First make sure both branches are up-to-date w/$ git status, then:
### Switch to branch 'master' 
**$ git checkout master** 
### merge master with your development branch: 
**$ git merge yourDevBranchName**
### Push merged local master branch to remote master branch 
**$ git push -u origin master**

*delete development branch, not needed.*

**$ git branch -d yourDevBranchName**

*Finally, Delete the branch on github* 

**$ git push origin :yourRemoteDevBranchName**

**$ git remote prune origin**  *This solves problem of old branches showing up in git branch -r*  

##  ==================== Remove Remote Repo =======
**$ git remote -v**
### View current remotes
### destination  https://github.com/FORKER/REPOSITORY.git (fetch)
### destination  https://github.com/FORKER/REPOSITORY.git (push)

### Remove remote
**$ git remote rm destination**

### Verify it's gone
**$ git remote -v**

## ========= Remove a Folder from Git Tracking ===================
*Step 1. Add the folder path to your repo's root .gitignore file.*

**path_to_your_folder/  (ie., node_modules/)**

*Step 2. Remove the folder from your local git tracking, but keep it on your disk.*

**$ git rm -r --cached path_to_your_folder/**

*Step 3. Commit the change*

**$ git commit -m "Removed Directory from Git Tracking"**

*Step 4. Push your changes to your git repo.*

**$ git push**

## ===== Git Tags from https://git-scm.com/book/en/v2/Git-Basics-Tagging ===
### List Tags
**$ git tag**

### Annotated Tags:
**$ git tag -a v1.4 -m "my version 1.4"**

### Lightweight Tags: 
**$ git tag v1.4-lw**

### Pushing Tags (Not done automatically to remote server)
**$ git push origin v1.5**

## ================ Revert Last Commit ============================
### See https://www.atlassian.com/git/tutorials/undoing-changes for more examples
**$ git revert HEAD**


## ===========================================
## ============ NPM Commands =================
## ===========================================

 ## ==== List of Globally Installed Packages ============
 **npm list -g --depth 0**

## ==== Updating Global Packages ========================
To update global packages, you can use:

**npm install -g** *nodemon*

To find out which packages need to be updated, you can use *npm outdated -g --depth=0*.

To update all global packages, you can use ***npm update -g***

To force update to another major version use npm package command:

**npm update -g** *nodemon@latest*