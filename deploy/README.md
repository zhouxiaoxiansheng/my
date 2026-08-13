# 部署到 https://xiaoaivip.top/

## 1. 本地打包

```bash
npm install
npm run build
```

打包结果在 `dist/` 目录，把整个 `dist` 内容上传到服务器网站根目录即可。

## 2. 服务器（Nginx）

1. 上传文件到例如 `/var/www/xiaoaivip.top/`
2. 使用仓库内配置：`deploy/nginx-xiaoaivip.top.conf`
3. 启用站点并重载：

```bash
sudo cp deploy/nginx-xiaoaivip.top.conf /etc/nginx/sites-available/xiaoaivip.top
sudo ln -sf /etc/nginx/sites-available/xiaoaivip.top /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 3. 域名解析

在域名控制台把 `xiaoaivip.top`（及可选 `www`）的 **A 记录** 指向服务器公网 IP。

## 4. HTTPS（推荐）

若服务器已装 certbot：

```bash
sudo certbot --nginx -d xiaoaivip.top -d www.xiaoaivip.top
```

完成后即可用 https://xiaoaivip.top/ 访问。

## 5. 宝塔面板

- 网站 → 添加站点 → 域名填 `xiaoaivip.top`
- 网站根目录指向站点目录
- 上传 `dist` 内全部文件到该目录
- SSL → Let's Encrypt 申请证书并开启强制 HTTPS
