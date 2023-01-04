#!/bin/bash
# 使用示例： ./pushUat.sh 测试提交
# npm脚本 "uat": "cross-env-shell sh ./.vscode/pushUat.sh"   ======》  bash环境执行：npm run uat -- 测试提交
result=`git branch | grep "*"` # 获取分支名
curBranch=${result:2} # 去除多余的*
if [ "$curBranch" = 'develop' -o "$curBranch" = 'test' ];then
  echo -e '\033[40;31m ERR! \033[0m''you are in '${curBranch}' branch now!'
  exit 0;
else
  msg=$1 # 获取终端输入的第一个参数
  if [ "$msg" = '' ];then
    echo -e '\033[40;31m ERR! \033[0m''please input commit msg!'
    exit 0;
  else
    echo '提交信息：'$msg
    git add .
    git commit -m "$msg"
    git checkout develop
    git merge $curBranch
    git push
    git checkout test
    git merge develop
    git push
    git checkout $curBranch
  fi
fi