#!/bin/bash
# X1NG 本地预览 —— 双击运行，关闭此窗口即停止
cd "$(dirname "$0")" || exit 1
PORT=8000
while lsof -nP -iTCP:$PORT -sTCP:LISTEN >/dev/null 2>&1; do PORT=$((PORT+1)); done

echo "正在启动本地服务器（端口 $PORT）…"
if command -v perl >/dev/null 2>&1; then
  perl assets/tools/serve.pl $PORT . &
elif command -v python3 >/dev/null 2>&1 && xcode-select -p >/dev/null 2>&1; then
  python3 -m http.server $PORT --bind 127.0.0.1 &
else
  echo "找不到 perl 或 python3，无法启动服务器。"; read -r -p "按回车键关闭…"; exit 1
fi
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT

# 等服务器真正就绪再打开浏览器
for i in $(seq 1 50); do
  if curl -s -o /dev/null "http://localhost:$PORT/index.html"; then
    echo ""; echo "✅ 已启动：http://localhost:$PORT"; echo "   保持这个窗口打开；看完后关闭窗口即可停止。"
    open "http://localhost:$PORT/index.html"
    wait $SERVER; exit 0
  fi
  if ! kill -0 $SERVER 2>/dev/null; then break; fi
  sleep 0.2
done
echo ""; echo "❌ 服务器没有启动成功，请把上面的报错截图发给 Claude。"
read -r -p "按回车键关闭…"
