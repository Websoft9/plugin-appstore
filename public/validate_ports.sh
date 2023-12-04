#!/bin/bash

# 检查参数是否存在
if [ $# -eq 0 ]; then
    echo "Error: No arguments provided."
    exit 1
fi


# 存储被占用的端口
occupied_ports=""

# 遍历所有参数
for port in "$@"
do
    # 检查参数是否是数字
    if ! [[ $port =~ ^[0-9]+$ ]]; then
        echo "Error: Argument '$port' is not a number."
        exit 1
    fi

    # 检查参数是否在1到65535之间
    if [ $port -lt 1 ] || [ $port -gt 65535 ]; then
        echo "Error: Argument '$port' is not between 1 and 65535."
        exit 1
    fi

    # 尝试使用netstat检查端口是否被占用
    if command -v netstat >/dev/null 2>&1; then # 检查netstat是否存在
        if netstat -tuln 2>/dev/null | grep -q ":$port "; then
            occupied_ports="$occupied_ports $port"
        fi
    else
        # 如果netstat不可用，尝试使用lsof
        if command -v lsof >/dev/null 2>&1; then # 检查lsof是否存在
            if lsof -i :$port > /dev/null 2>&1; then
                occupied_ports="$occupied_ports $port"
            fi
        else
            # 如果netstat和lsof都不可用，尝试使用/proc/net/tcp和/proc/net/tcp6文件
            if command -v awk >/dev/null 2>&1 && command -v grep >/dev/null 2>&1; then # 检查awk和grep是否存在
                if awk -v port=$port 'BEGIN{printf "%x\n", port}' | xargs -I {} grep -q {} /proc/net/tcp /proc/net/tcp6 2>/dev/null; then
                    occupied_ports="$occupied_ports $port"
                fi
            else
                # 如果上述所有方法都不可用，尝试使用Docker
                if command -v docker >/dev/null 2>&1; then # 检查docker是否存在
                    if docker run -it --rm -p $port:80 alpine true 2>/dev/null; then               
                        :
                    else
                        occupied_ports="$occupied_ports $port"
                    fi
                fi
            fi
        fi
    fi
done

# 如果有被占用的端口，打印出来
if [ -n "$occupied_ports" ]; then
    echo "$occupied_ports"
else
    echo "ok"
fi
