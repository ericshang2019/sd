

### 一：shell介绍[^0]

1：shell诞生于unix，是与 Unix/Linux 交互的命令行程序，本身支持的命令不多，但是它可以调用其它程序，每个程序就是一个命令，这使得 Shell 命令的数量可以无限扩展，其结果就是 Shell 的功能非常强大，主要用来开发一些实用的、自动化的小工具。

2：shell在运维中的重要性~运维手链（运维“手链”的组成：每颗“珍珠”都是一项服务，将珍珠穿起来的“线”就是 Shell）

![img](http://c.biancheng.net/cpp/uploads/allimg/170702/1-1FF20RUB23.png)

3：linux运维重要脚本语言：Shell和Python，sh 是 UNIX 上的标准 shell，bash shell 是 Linux 的默认 shell,bash 兼容 sh，查看当前 Linux 的默认 Shell，那么可以输出 SHELL 环境变量：

```shell
$ echo $SHELL
/bin/bash
```

4：shell提示符，对于普通用户，Base shell 默认的提示符是美元符号`$`；对于超级用户（root 用户），Bash Shell 默认的提示符是井号`#`，提示符表示 Shell 等待输入命令。

Shell 通过`PS1`和`PS2`两个环境变量来控制提示符格式：

- PS1 控制最外层命令行的提示符格式。
- PS2 控制第二层命令行的提示符格式。

```shell
[mozhiyan@localhost ~]$ echo $PS1
[\u@\h \W]\$
[mozhiyan@localhost ~]$ echo $PS2
>
[mozhiyan@localhost ~]$ 
```

### 二：shell语法

##### 1：运行shell脚本的两种方法

- 作为可执行程序 [^1]


  ```shell
  chmod +x ./test.sh  #使脚本具有执行权限
  ./test.sh  #执行脚本
  ```

- 作为解释器参数[^2]
  
  ```shell
  /bin/sh test.sh
  /bin/php test.php
  ```

完整例子

```shell
#!/bin/bash
# Author : mozhiyan
# Copyright (c) http://see.xidian.edu.cn/cpp/linux/
# Script follows here:
echo "What is your name?"
read PERSON
echo "Hello, $PERSON"
```

运行脚本

```shell
chmod +x ./test.sh
$./test.sh
What is your name?
mozhiyan
Hello, mozhiyan
$
```

##### 2：shell变量

在 Bash shell 中，在默认情况下不会区分变量类型，每一个变量的值都是字符串，无论你给变量赋值时有没有使用引号，值都会以字符串的形式存储，变量名只能包含数字、字母和下划线

定义和使用变量

```shell
skill="Java"
echo "I am good at ${skill}Script"
```
单引号和双引号区别
```shell
#!/bin/bash
url="http://c.biancheng.net"
website1='C语言中文网：${url}'
website2="C语言中文网：${url}"
echo $website1
echo $website2
```

将命令的结果赋值给变量，两种方式

```shell
variable=`command`
variable=$(command)
```

只读变量，不能重新赋值

```shell
#!/bin/bash
myUrl="http://see.xidian.edu.cn/cpp/shell/"
readonly myUrl
myUrl="http://see.xidian.edu.cn/cpp/danpianji/"  # 报错
```

三种变量类型

- 局部变量

  局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量

- 环境变量

  所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量

- shell变量

  shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行

##### 3：特殊变量列表

| 变量 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| $0   | 当前脚本的文件名                                             |
| $n   | 传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是$1，第二个参数是$2。 |
| $#   | 传递给脚本或函数的参数个数。                                 |
| $*   | 传递给脚本或函数的所有参数，被双引号(" ")包含时，会将所有的参数作为一个整体，以"$1 $2 … $n"的形式输出所有参数 |
| $@   | 传递给脚本或函数的所有参数。被双引号(" ")包含时，会将各个参数分开，以"$1" "$2" … "$n" 的形式输出所有参数。 |
| $?   | 上个命令的退出状态，或函数的返回值。                         |
| $$   | 当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID。 |

##### 4：转义字符

| 转义字符 | 含义                             |
| -------- | -------------------------------- |
| \\       | 反斜杠                           |
| \a       | 警报，响铃                       |
| \b       | 退格（删除键）                   |
| \f       | 换页(FF)，将当前位置移到下页开头 |
| \n       | 换行                             |
| \r       | 回车                             |
| \t       | 水平制表符（tab键）              |
| \v       | 垂直制表符                       |

##### 5：可以使用的变量替换形式

| 形式            | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| ${var}          | 变量本来的值                                                 |
| ${var:-word}    | 如果变量 var 为空或已被删除(unset)，那么返回 word，但不改变 var 的值。 |
| ${var:=word}    | 如果变量 var 为空或已被删除(unset)，那么返回 word，并将 var 的值设置为 word。 |
| ${var:?message} | 如果变量 var 为空或已被删除(unset)，那么将消息 message 送到标准错误输出，可以用来检测变量 var 是否可以被正常赋值。 若此替换出现在Shell脚本中，那么脚本将停止运行。 |
| ${var:+word}    | 如果变量 var 被定义，那么返回 word，但不改变 var 的值。      |

##### 6：运算符

Bash 支持很多运算符，包括算数运算符、关系运算符、布尔运算符、字符串运算符和文件测试运算符，原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用。

expr表达式计算工具[^3]

```shell
#!/bin/bash
val=`expr 2 + 2`
echo "Total value : $val"
```

###### 6.1：算数运算符

| 运算符 | 说明                                          | 举例                          |
| ------ | --------------------------------------------- | ----------------------------- |
| +      | 加法                                          | `expr $a + $b` 结果为 30。    |
| -      | 减法                                          | `expr $a - $b` 结果为 10。    |
| *      | 乘法                                          | `expr $a \* $b` 结果为  200。 |
| /      | 除法                                          | `expr $b / $a` 结果为 2。     |
| %      | 取余                                          | `expr $b % $a` 结果为 0。     |
| =      | 赋值                                          | a=$b 将把变量 b 的值赋给 a。  |
| ==     | 相等。用于比较两个数字，相同则返回 true。     | [ $a == $b ] 返回 false。     |
| !=     | 不相等。用于比较两个数字，不相同则返回 true。 | [ $a != $b ] 返回 true。      |

###### 6.2：关系运算符，只支持数字，不支持字符串，除非字符串的值是数字

| 运算符 | 说明                                                  | 举例                       |
| ------ | ----------------------------------------------------- | -------------------------- |
| -eq    | 检测两个数是否相等，相等返回 true。                   | [ $a -eq $b ] 返回 true。  |
| -ne    | 检测两个数是否相等，不相等返回 true。                 | [ $a -ne $b ] 返回 true。  |
| -gt    | 检测左边的数是否大于右边的，如果是，则返回 true。     | [ $a -gt $b ] 返回 false。 |
| -lt    | 检测左边的数是否小于右边的，如果是，则返回 true。     | [ $a -lt $b ] 返回 true。  |
| -ge    | 检测左边的数是否大等于右边的，如果是，则返回 true。   | [ $a -ge $b ] 返回 false。 |
| -le    | 检测左边的数是否小于等于右边的，如果是，则返回 true。 | [ $a -le $b ] 返回 true。  |

###### 6.3：布尔运算符

| 运算符 | 说明                                                | 举例                                     |
| ------ | --------------------------------------------------- | ---------------------------------------- |
| !      | 非运算，表达式为 true 则返回 false，否则返回 true。 | [ ! false ] 返回 true。                  |
| -o     | 或运算，有一个表达式为 true 则返回 true。           | [ $a -lt 20 -o $b -gt 100 ] 返回 true。  |
| -a     | 与运算，两个表达式都为 true 才返回 true。           | [ $a -lt 20 -a $b -gt 100 ] 返回 false。 |

###### 6.4：字符串运算符

| 运算符 | 说明                                      | 举例                     |
| ------ | ----------------------------------------- | ------------------------ |
| =      | 检测两个字符串是否相等，相等返回 true。   | [ $a = $b ] 返回 false。 |
| !=     | 检测两个字符串是否相等，不相等返回 true。 | [ $a != $b ] 返回 true。 |
| -z     | 检测字符串长度是否为0，为0返回 true。     | [ -z $a ] 返回 false。   |
| -n     | 检测字符串长度是否为0，不为0返回 true。   | [ -z $a ] 返回 true。    |
| str    | 检测字符串是否为空，不为空返回 true。     | [ $a ] 返回 true。       |

###### 6.5：文件测试运算符

| 操作符  | 说明                                                         | 举例                      |
| ------- | ------------------------------------------------------------ | ------------------------- |
| -b file | 检测文件是否是块设备文件，如果是，则返回 true。              | [ -b $file ] 返回 false。 |
| -c file | 检测文件是否是字符设备文件，如果是，则返回 true。            | [ -b $file ] 返回 false。 |
| -d file | 检测文件是否是目录，如果是，则返回 true。                    | [ -d $file ] 返回 false。 |
| -f file | 检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。 | [ -f $file ] 返回 true。  |
| -g file | 检测文件是否设置了 SGID 位，如果是，则返回 true。            | [ -g $file ] 返回 false。 |
| -k file | 检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。  | [ -k $file ] 返回 false。 |
| -p file | 检测文件是否是具名管道，如果是，则返回 true。                | [ -p $file ] 返回 false。 |
| -u file | 检测文件是否设置了 SUID 位，如果是，则返回 true。            | [ -u $file ] 返回 false。 |
| -r file | 检测文件是否可读，如果是，则返回 true。                      | [ -r $file ] 返回 true。  |
| -w file | 检测文件是否可写，如果是，则返回 true。                      | [ -w $file ] 返回 true。  |
| -x file | 检测文件是否可执行，如果是，则返回 true。                    | [ -x $file ] 返回 true。  |
| -s file | 检测文件是否为空（文件大小是否大于0），不为空返回 true。     | [ -s $file ] 返回 true。  |
| -e file | 检测文件（包括目录）是否存在，如果是，则返回 true。          | [ -e $file ] 返回 true。  |

##### 7：字符串

###### 7.1：拼接字符串

```shell
your_name="qinjx"
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting $greeting_1
```

###### 7.2：获取字符串长度

```shell
string="abcd"
echo ${#string} #输出 4
```

###### 7.3：提取子字符串

```shell
string="alibaba is a great company"
echo ${string:1:4} #输出liba
```

###### 7.4：查找字符串

```shell
string="alibaba is a great company"
echo `expr index "$string" is`
```

###### 7.5：处理路径的字符串

```shell
#  参数：
#  -a,表示处理多个路径；
# -s, 用于去掉指定的文件的后缀名；

 basename /home/yin/1.txt          -> 1.txt

 basename -a /home/yin/1.txt /home/zhai/2.sh     -> 
1.txt
2.sh basename -s .txt /home/yin/1.txt    -> 1
 basename /home/yin/1.txt .txt       -> 1
 
 dirname /usr/bin/          -> /usr
 dirname dir1/str dir2/str  -> 
dir1
dir2
 dirname stdio.h            -> .
```

7.6：8种字符串截取方法总结

假设变量： var=http://www.aaa.com/123.htm

```shell
# # 号截取，删除左边字符，保留右边字符,结果是 ：www.aaa.com/123.htm
echo ${var#*//}  

# ## 号截取，删除左边字符，保留右边字符,结果是 123.htm
echo ${var##*/}

# %号截取，删除右边字符，保留左边字符，结果是：http://www.aaa.com
echo ${var%/*}

# %% 号截取，删除右边字符，保留左边字符，结果是：http:
echo ${var%%/*}

# 从左边第几个字符开始，及字符的个数，结果是：http:
echo ${var:0:5}

# 从左边第几个字符开始，一直到结束，结果是 ：www.aaa.com/123.htm
echo ${var:7}

# 从右边第几个字符开始，及字符的个数，结果是：123
echo ${var:0-7:3}

# 从右边第几个字符开始，一直到结束，结果是：123.htm
echo ${var:0-7}
```



##### 8：数组

定义数组

```shell
array_name=(value0 value1 value2 value3)

array_name2=(
value0
value1
value2
value3
)

#单独定义数组的各个分量，可以不使用连续的下标，而且下标的范围没有限制
array_name[0]=value0
array_name[1]=value1
array_name[2]=value2
```

读取数组，读取数组元素值的一般格式是：${array_name[index]}，使用@ 或 * 可以获取数组中的所有元素

```shell
#!/bin/sh
NAME[0]="Zara"
NAME[1]="Qadir"
NAME[2]="Mahnaz"
NAME[3]="Ayan"
NAME[4]="Daisy"
echo "First Index: ${NAME[0]}"
echo "Second Index: ${NAME[1]}"
echo ${NAME[*]}
echo ${NAME[@]}
```

获取数组长度，获取数组长度的方法与获取字符串长度的方法相同

```shell
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}
```

##### 9：printf 命令，格式化输出语句

```shell
# format-string为双引号
$ printf "%d %s\n" 1 "abc"
1 abc
# 单引号与双引号效果一样 
$ printf '%d %s\n' 1 "abc" 
1 abc
# 没有引号也可以输出
$ printf %s abcdef
abcdef
# 格式只指定了一个参数，但多出的参数仍然会按照该格式输出，format-string 被重用
$ printf %s abc def
abcdef
$ printf "%s\n" abc def
abc
def
$ printf "%s %s %s\n" a b c d e f g h i j
a b c
d e f
g h i
j
# 如果没有 arguments，那么 %s 用NULL代替，%d 用 0 代替
$ printf "%s and %d \n" 
and 0
# 如果以 %d 的格式来显示字符串，那么会有警告，提示无效的数字，此时默认置为 0
$ printf "The first program always prints'%s,%d\n'" Hello Shell
-bash: printf: Shell: invalid number
The first program always prints 'Hello,0'
$
```

##### 10：if else语句

###### 9.1：if ... else 语句

```shell
#!/bin/sh
a=10
b=20
if [ $a == $b ]
then
   echo "a is equal to b"
fi
if [ $a != $b ]
then
   echo "a is not equal to b"
fi
```

###### 9.2：if ... else ... fi 语句

```shell
#!/bin/sh
a=10
b=20
if [ $a == $b ]
then
   echo "a is equal to b"
else
   echo "a is not equal to b"
fi
```

###### 9.3：if ... elif ... fi 语句

```shell
#!/bin/sh
a=10
b=20
if [ $a == $b ]
then
   echo "a is equal to b"
elif [ $a -gt $b ]
then
   echo "a is greater than b"
elif [ $a -lt $b ]
then
   echo "a is less than b"
else
   echo "None of the condition met"
fi
```

###### 9.4：if ... else 语句也可以写成一行，以命令的方式来运行

```shell
if test $[2*3] -eq $[1+5]; then echo 'The two numbers are equal!'; fi;
```

###### 9.5：test 命令

用于检查某个条件是否成立，与方括号([ ])类似，它可以进行数值、字符和文件三个方面的测试

数值测试

| 参数 | 说明           |
| ---- | -------------- |
| -eq  | 等于则为真     |
| -ne  | 不等于则为真   |
| -gt  | 大于则为真     |
| -ge  | 大于等于则为真 |
| -lt  | 小于则为真     |
| -le  | 小于等于则为真 |

```shell
num1=100
num2=100
if test $[num1] -eq $[num2]
then
    echo 'The two numbers are equal!'
else
    echo 'The two numbers are not equal!'
fi
```

字符串测试

| 参数      | 说明                 |
| --------- | -------------------- |
| =         | 等于则为真           |
| !=        | 不相等则为真         |
| -z 字符串 | 字符串长度伪则为真   |
| -n 字符串 | 字符串长度不伪则为真 |

```shell
num1=100
num2=100
if test num1=num2
then
    echo 'The two strings are equal!'
else
    echo 'The two strings are not equal!'
fi
```

文件测试

| 参数      | 说明                                 |
| --------- | ------------------------------------ |
| -e 文件名 | 如果文件存在则为真                   |
| -r 文件名 | 如果文件存在且可读则为真             |
| -w 文件名 | 如果文件存在且可写则为真             |
| -x 文件名 | 如果文件存在且可执行则为真           |
| -s 文件名 | 如果文件存在且至少有一个字符则为真   |
| -d 文件名 | 如果文件存在且为目录则为真           |
| -f 文件名 | 如果文件存在且为普通文件则为真       |
| -c 文件名 | 如果文件存在且为字符型特殊文件则为真 |
| -b 文件名 | 如果文件存在且为块特殊文件则为真     |

```shell
cd /bin
if test -e ./bash
then
    echo 'The file already exists!'
else
    echo 'The file does not exists!'
fi
```









[^0]: http://c.biancheng.net/cpp/shell/
[^1]: 注意，一定要写成./test.sh，而不是test.sh。运行其它二进制的程序也一样，直接写test.sh，linux系统会去PATH里寻找有没有叫test.sh的，而只有/bin,/sbin,/usr/bin，/usr/sbin等在PATH里，你的当前目录通常不在PATH里，所以写成test.sh是会找不到命令的，要用./test.sh告诉系统说，就在当前目录找。通过这种方式运行bash脚本，第一行一定要写对，好让系统查找到正确的解释器。
[^2]: 不需要在第一行写脚本解释器的约束标记信息，写了也没用
[^3]: 表达式和运算符之间要有空格，例如 2+2 是不对的，必须写成 2 + 2，这与我们熟悉的大多数编程语言不一样，完整的表达式要被 ` ` 包含，注意这个字符不是常用的单引号，在 Esc 键下边

