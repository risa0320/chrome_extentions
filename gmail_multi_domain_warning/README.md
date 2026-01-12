# Gmail の宛先管理 Chrome拡張機能

## ファイル構成
- `manifest.json`: Chrome拡張機能の設定ファイル
- `content.js`: Gmailの宛先管理機能を実装するJavaScriptコード
-  emailUtils.js: メールアドレスの操作に関するユーティリティ関数
-  warnings.js: ユーザーへの警告メッセージを管理するコード
-  ui:
     - warnings.html: 警告メッセージのHTMLテンプレート
     - warnings.css: 警告メッセージのスタイルシート

## デプロイ方法
1. Chromeブラウザを開き、`chrome://extensions/`にアクセス
2. 右上の「デベロッパーモード」をオンにする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. このリポジトリのルートディレクトリを選択
5. 拡張機能がインストールされ、Gmailで動作するようになる
