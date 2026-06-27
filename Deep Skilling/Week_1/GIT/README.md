# 🔀 Git Version Control & Repository Management

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

Welcome to the **Git** module! This section serves as a comprehensive reference guide for mastering version control workflows, including branching, merging, and conflict resolution using Git and GitLab.

---

## Objective

Learn how to:

* Create and manage branches
* Merge branches into master
* Resolve merge conflicts
* Push changes to a remote repository

---

# Prerequisites

* Git installed and configured
* Notepad++ configured as default editor
* P4Merge installed (optional for visual comparison)
* Local and remote Git repository available

---

# Part 1: Branching and Merging

## Create a New Branch

### Create Branch

```bash
git branch GitNewBranch
```

### View All Branches

```bash
git branch -a
```

`*` indicates the current branch.

### Switch to New Branch

```bash
git checkout GitNewBranch
```

---

## Add a File

```bash
echo "Branch Content" > branch.txt
```

### Check Status

```bash
git status
```

### Add File

```bash
git add branch.txt
```

### Commit Changes

```bash
git commit -m "Added branch file"
```

### Verify Status

```bash
git status
```

---

## Merge Branch into Master

### Switch to Master

```bash
git checkout master
```

### View Differences

```bash
git diff master GitNewBranch
```

### Visual Comparison Using P4Merge

```bash
git difftool master GitNewBranch
```

### Merge Branch

```bash
git merge GitNewBranch
```

### View Commit History

```bash
git log --oneline --graph --decorate
```

### Delete Branch

```bash
git branch -d GitNewBranch
```

### Verify Status

```bash
git status
```

---

# Creating Merge Request in GitLab

## Push Branch to Remote

```bash
git push origin GitNewBranch
```

## Create Merge Request

1. Login to GitLab.
2. Open your project.
3. Navigate to **Merge Requests**.
4. Click **New Merge Request**.
5. Select:

   * Source Branch: GitNewBranch
   * Target Branch: master
6. Review changes.
7. Click **Create Merge Request**.
8. Merge after approval.

---

# Part 2: Conflict Resolution

## Verify Master Status

```bash
git status
```

Ensure the working tree is clean.

---

## Create Branch

```bash
git checkout -b GitWork
```

---

## Create hello.xml

```bash
echo "<message>Hello from GitWork</message>" > hello.xml
```

### Add and Commit

```bash
git add hello.xml
git commit -m "Added hello.xml in GitWork"
```

---

## Switch to Master

```bash
git checkout master
```

### Create Same File with Different Content

```bash
echo "<message>Hello from Master</message>" > hello.xml
```

### Add and Commit

```bash
git add hello.xml
git commit -m "Added hello.xml in master"
```

---

## View History

```bash
git log --oneline --graph --decorate --all
```

---

## Compare Branches

### Command Line Difference

```bash
git diff master GitWork
```

### Visual Difference

```bash
git difftool master GitWork
```

---

## Merge Branch

```bash
git merge GitWork
```

A conflict will occur because both branches modified the same file.

---

## Conflict Example

```xml
<<<<<<< HEAD
<message>Hello from Master</message>
=======
<message>Hello from GitWork</message>
>>>>>>> GitWork
```

---

## Resolve Conflict

Edit the file and keep the required content.

Example:

```xml
<message>Hello from Master and GitWork</message>
```

---

## Add and Commit Resolved File

```bash
git add hello.xml
git commit -m "Resolved merge conflict"
```

---

## Ignore Backup Files

Open `.gitignore`

```text
*.bak
```

### Commit Changes

```bash
git add .gitignore
git commit -m "Added backup files to gitignore"
```

---

## List Branches

```bash
git branch
```

### Delete Merged Branch

```bash
git branch -d GitWork
```

### View Log

```bash
git log --oneline --graph --decorate
```

---

# Part 3: Clean Up and Push to Remote Repository

## Verify Repository Status

```bash
git status
```

Working tree should be clean.

---

## View Available Branches

```bash
git branch -a
```

---

## Pull Latest Changes

```bash
git pull origin master
```

---

## Push Local Changes

```bash
git push origin master
```

---

## Verify on Remote Repository

1. Open GitLab repository.
2. Refresh the repository page.
3. Verify:

   * Latest commits are visible.
   * Merged changes are available.
   * Deleted branches are removed.

---

# Conclusion

In this lab, we learned:

* Creating and switching branches
* Committing changes in a branch
* Merging branches into master
* Creating merge requests in GitLab
* Resolving merge conflicts
* Using P4Merge for visual comparison
* Cleaning up merged branches
* Pulling and pushing changes to a remote repository
* Verifying updates in GitLab
