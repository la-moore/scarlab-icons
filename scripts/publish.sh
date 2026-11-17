#!/usr/bin/env bash
# Публикует пакеты в npm: ./scripts/publish.sh [--dry-run] [пакет ...]
# Без списка пакетов публикует js и unplugin (в этом порядке: плагин зависит от новой версии js).
# Уже опубликованные версии пропускаются, так что скрипт можно безопасно перезапускать.
set -euo pipefail

cd "$(dirname "$0")/.."

DRY_RUN=""
PACKAGES=()

for arg in "$@"; do
    case "$arg" in
        --dry-run) DRY_RUN="--dry-run" ;;
        *) PACKAGES+=("$arg") ;;
    esac
done

[ ${#PACKAGES[@]} -eq 0 ] && PACKAGES=(js unplugin)

if [ -n "$(git status --porcelain)" ]; then
    echo "Рабочая копия не чистая: закоммитьте изменения перед публикацией." >&2
    exit 1
fi

npm whoami > /dev/null || { echo "Не выполнен вход в npm: запустите npm login" >&2; exit 1; }

npm ci
npm run build:all
npm test
npm run test:types

for pkg in "${PACKAGES[@]}"; do
    name="@scarlab-icons/$pkg"
    version=$(node -p "require('./packages/$pkg/package.json').version")

    if npm view "$name@$version" version > /dev/null 2>&1; then
        echo "→ $name@$version уже опубликован, пропускаю"
        continue
    fi

    echo "→ Публикую $name@$version"
    npm publish -w "$name" --access public $DRY_RUN
done
