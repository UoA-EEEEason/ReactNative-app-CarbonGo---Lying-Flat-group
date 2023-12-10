# Lying-Flat Team
For COMPSCI 778

# About new page setting and rules

1. Ensure import all of packages

2. Start from 'const xxxScreen = () => {}'

3. Write all of events and functions first in 'const xxxScreen = () => {}'

4. Write 'return()'

5. Use <ImageBackground> to set background color in 'return()'

6. Use <SafeAreaView> to include all of components in <ImageBackground>

7. Use <StatusBar> and <ScrollView> to set page layout in <SafeAreaView>

8. Put all styles after 'export default xxxScreen;'

9. Ensure styles <SafeAreaView>, <StatusBar> and <ScrollView> right - refer './testsScreens/CommonDemo.jsx'

10. You can use the defined components directly (you can add new components if you find them commonly used)

# About github commands

1. git pull => Pull the code of the current branch from github library

2. git pull origin branchname => Pull the code of the branch from github library you want to pull

3. git branch => View the current branch and all local branches

4. git branch -a => View the current branch and all branches

5. git branch branchname => Create a new local branch

6. git checkout branchname => Switch the local branchname branch

7. git add . => Add all changed pages to commit

8. git commit -m "text" => Add commit "text" comment for github push

9. git push => Push your commit to github

10. git push origin branchname => Push your commit to github if  if this is the first time to push this branch

or you can use github tool of VS code

# About github pull requests and merge branch to master

1. Create a branch for each part of the code, such as branch name -> "yixuan - home pages"

2. Edit the code in your working branch and pull and push

3. Whenever you want to write a page or add some functionality, please add an issue to describe your content in github

4. After the new page or function is completed and pushed, add a pull request to describe push content in github and associate the corresponding issue

5. After you create a new PR, add reviewers and wait for approval. Then merge your PR. Please do not merge the PR submitted by others, even if it has been approved.

