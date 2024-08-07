

```shell
echo "\e[1;32m[Husky] Checking for staged files...\e[0m" # Blue color
# Check for staged files and run lint-staged if any are found
STAGED_FILES=$(git diff --cached --name-only)
echo "\e[1;32m[Husky] Staged files:\e[0m"
echo $STAGED_FILES
if [ -n "$STAGED_FILES" ]; then
    echo "\n\e[1;33m ---------------------------- \e[0m" # Yellow color
    echo "\e[1;33m[Husky] Running lint-staged...\e[0m" # Yellow color
    echo "\e[1;33m ---------------------------- \e[0m\n" # Yellow color
    npm run lint-staged
    git add $STAGED_FILES # add the files back to the staging area
    if [ $? -ne 0 ]; then
        echo "\e[1;31m[Husky] lint-staged failed, please fix the errors before committing\e[0m" # Red color
        exit 1
    fi
 
    echo "\n\e[1;32m --------------------------- \e[0m" # Green color
    echo "\e[1;32m[Husky] lint-staged completed\e[0m" # Green color
    echo "\e[1;32m --------------------------- \e[0m\n" # Green color
else
    echo "\e[1;31m[Husky] No staged files to lint\e[0m" # Red color
fi
```