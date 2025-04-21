#!/bin/bash

# 检查参数是否存在
if [ $# -eq 0 ]; then
    echo "Error: No arguments provided."
    exit 1
fi

occupied_ports=""

check_port() {
    local port=$1
    local hex_port=$(printf "%04x" "$port")

    # 方法1：ss 命令检测
    if command -v ss &>/dev/null; then
        if ss -tuln | grep -q ":${port} "; then
            echo "ss 命令检测"
            return 0
        fi
    fi

    # 方法2：Bash TCP 连接测试
    if timeout 1 bash -c "echo >/dev/tcp/127.0.0.1/$port" 2>/dev/null; then
        echo "Bash TCP 连接测试"
        return 0
    fi

    # 方法3：/proc 文件检测
    if grep -q -E ":[[:space:]]*${hex_port}[[:space:]]+0A " /proc/net/tcp 2>/dev/null ||
       grep -q -E ":[[:space:]]*${hex_port}[[:space:]]+0A " /proc/net/tcp6 2>/dev/null; then
       echo "/proc 文件检测"
        return 0
    fi

    # 方法4：netstat 检测
    if command -v netstat &>/dev/null; then
        if netstat -tuln 2>/dev/null | awk '{print $4}' | grep -q ":${port}$"; then
            echo "netstat 检测"
            return 0
        fi
    fi

    # 方法5：Docker 检测
    if command -v docker >/dev/null 2>&1; then
        if docker ps --format '{{.Ports}}' | grep -q ":${port}->"; then
            echo "Docker 检测"
            return 0
        fi
    fi


    # 默认返回未占用
    echo "检测失败，默认所有端口可安装"
    return 1
}

# 主循环
for port in "$@"; do
    if ! [[ $port =~ ^[0-9]+$ ]] || [ $port -lt 1 ] || [ $port -gt 65535 ]; then
        echo "Error: Invalid port $port" >&2
        exit 1
    fi

    if check_port "$port"; then
        occupied_ports="$occupied_ports $port"
    fi
done

# 结果输出
if [ -n "$occupied_ports" ]; then
    echo "$occupied_ports" | sed 's/^ //'
else
    echo "ok"
fi
