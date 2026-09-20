# sated 法律条款页面（病友饭卡 / Sated）

供 App Store 审核与 App 内「关于」分组使用的静态页面，零依赖、无需构建。复用 everdot-legal 模式。

## 文件

| 文件 | 用途 |
|---|---|
| `index.html` | 导航首页 |
| `privacy.html` | 隐私政策（中英双语同页） |
| `support.html` | 支持页与常见问题（中英双语同页） |
| `style.css` | 共用样式（深浅色自适应、移动优先） |

## 对外 URL（GitHub Pages）

```
https://andyzheung.github.io/sated-legal/              首页
https://andyzheung.github.io/sated-legal/privacy.html  隐私政策（ASC App Privacy / 版本页）
https://andyzheung.github.io/sated-legal/support.html  支持页（ASC 版本页"技术支持网址"）
```

## 部署

仓库为公开仓库（GitHub 免费账户 Pages 仅支持公开仓库）：

```bash
cd /Users/andyzheung/Work/Project/AI-Projects/sated-legal
git init && git add . && git commit -m "docs: 隐私政策与支持页"
git branch -M main
gh repo create sated-legal --public --source=. --push
gh api repos/andyzheung/sated-legal/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

## 维护

修改内容后更新 privacy.html 中英两处生效日期，`git push` 后 Pages 自动重新发布。

数据来源与内容依据：`sated/ref-doc/app-store-submission-readiness-2026-09-12/privacy-policy-draft.md` 与 `support-page-draft.md`。
