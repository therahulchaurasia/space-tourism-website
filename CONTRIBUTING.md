# Contributing Guidelines For Space Toursim Website🚀!

Below you will find the process and workflow used to review and merge your changes.

### Step 0 : Find an issue

- Take a look at the Existing Issues or create your **own** Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Note : Every change in this project should/must have an associated issue.

### Step 1 : Fork the Project

- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile.
  Keep a reference to the original project in `upstream` remote.

```bash
git clone https://github.com/<your-username>/space-tourism-website.git
cd space-toursim-website-OS
git remote add upstream https://github.com/therahulchaurasia/space-tourism-website.git

```

- If you have already forked the project, update your copy before working.

```bash
git remote update
git checkout master
git rebase upstream/master

```

### Step 2 : Branch

Create a new branch. Use its name to identify the issue your addressing.

```bash
# It will create a new branch with name Branch_Name and switch to that branch
git checkout -b Branch_name

```

### Step 3 : Work on the issue assigned

- Work on the issue(s) assigned to you.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:

```bash
# To add all new files to branch Branch_Name
git add .

# To add only a few files to Branch_Name
git add <some files>

```

### Step 4 : Commit

- To commit give a descriptive message for the convenience of reviewer by:

```bash
git commit -m "message"

```

### Step 5 : Work Remotely

- When your work is ready and complies with the project conventions, upload your changes to your fork:

```bash
git push -u origin Branch_Name

```

### Step 6 : Pull Request

- Go to your repository in browser and click on compare and pull requests.
  Then add a title and description to your pull request that explains your contribution.

### Need more help?🤔

You can refer to the following articles on basics of Git and Github and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources)
  Let's learn something together!❤️🤝
