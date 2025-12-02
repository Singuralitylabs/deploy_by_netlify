"use client";

import { useState } from "react";

// アイコンコンポーネント
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
    <line x1="6" x2="6.01" y1="6" y2="6"/>
    <line x1="6" x2="6.01" y1="18" y2="18"/>
  </svg>
);

const CloudUploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M12 12v9"/>
    <path d="m16 16-4-4-4 4"/>
  </svg>
);

const GitBranchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <line x1="6" x2="6" y1="3" y2="15"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 9a9 9 0 0 1-9 9"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <rect width="20" height="14" x="2" y="3" rx="2"/>
    <line x1="8" x2="16" y1="21" y2="21"/>
    <line x1="12" x2="12" y1="17" y2="21"/>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// ナビゲーション項目
const navItems = [
  { id: "webserver", label: "Webサーバーとは" },
  { id: "deployment", label: "デプロイメントとは" },
  { id: "flow", label: "デプロイの流れ" },
  { id: "services", label: "デプロイ方法" }
];

// デプロイの流れ
const deployFlowSteps = [
  {
    number: "01",
    title: "開発完了",
    description: "ローカル環境でアプリケーションの開発とテストを完了させます。",
    icon: <MonitorIcon />
  },
  {
    number: "02",
    title: "GitHubにプッシュ",
    description: "ソースコードをGitHubリポジトリにアップロードします。",
    icon: <GitBranchIcon />
  },
  {
    number: "03",
    title: "ホスティングサービスと連携",
    description: "Vercelなどのサービスにログインし、リポジトリを連携します。",
    icon: <CloudUploadIcon />
  },
  {
    number: "04",
    title: "自動ビルド＆デプロイ",
    description: "サービスが自動でビルドを実行し、サーバーに配置します。",
    icon: <ServerIcon />
  },
  {
    number: "05",
    title: "公開完了",
    description: "URLが発行され、世界中からアクセス可能になります。",
    icon: <GlobeIcon />
  }
];

// デプロイサービス情報
const deployServices = [
  {
    id: "github-pages",
    name: "GitHub Pages",
    tagline: "静的サイトに最適な無料ホスティング",
    description: "GitHubが提供する無料のホスティングサービスです。リポジトリから直接静的サイトを公開できます。HTMLやCSS、JavaScriptで作られたシンプルなサイトに最適です。",
    color: "from-slate-600 to-slate-800",
    textColor: "text-slate-300",
    features: [
      "完全無料で利用可能",
      "GitHubと完全統合",
      "カスタムドメイン対応",
      "HTTPS標準対応"
    ],
    limitations: [
      "静的サイトのみ（サーバーサイド処理不可）",
      "Next.jsはエクスポートが必要"
    ],
    bestFor: "ポートフォリオサイト、ドキュメント、ブログ",
    url: "https://pages.github.com"
  },
  {
    id: "vercel",
    name: "Vercel",
    tagline: "Next.js開発元が提供する最適なプラットフォーム",
    description: "Next.jsを開発しているVercel社が提供するホスティングサービスです。Next.jsアプリケーションのデプロイに最も適しており、ゼロコンフィグで簡単にデプロイできます。",
    color: "from-black to-slate-900",
    textColor: "text-white",
    recommended: true,
    features: [
      "Next.jsに完全最適化",
      "自動プレビューデプロイ",
      "エッジ関数対応",
      "分析ダッシュボード"
    ],
    limitations: [
      "無料枠に制限あり（商用利用時）",
      "チーム利用は有料"
    ],
    bestFor: "Next.jsアプリケーション、フルスタック開発",
    url: "https://vercel.com"
  },
  {
    id: "netlify",
    name: "Netlify",
    tagline: "使いやすさと豊富な機能が魅力",
    description: "直感的なUIと豊富な機能が特徴のホスティングサービスです。フォーム処理やサーバーレス関数など、バックエンド機能も提供しています。",
    color: "from-teal-600 to-emerald-700",
    textColor: "text-white",
    features: [
      "ドラッグ&ドロップデプロイ",
      "フォーム処理機能内蔵",
      "プレビュー機能",
      "プラグインエコシステム"
    ],
    limitations: [
      "Next.jsの一部機能は非対応",
      "ビルド時間に制限あり"
    ],
    bestFor: "静的サイト、Jamstackアプリケーション",
    url: "https://netlify.com"
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages",
    tagline: "高速なグローバルCDNを活用",
    description: "Cloudflareの巨大なCDNネットワークを活用した高速なホスティングサービスです。無料枠が非常に充実しており、ビルド回数の制限も緩やかです。",
    color: "from-orange-500 to-amber-600",
    textColor: "text-white",
    features: [
      "超高速グローバルCDN",
      "無制限の帯域幅（無料）",
      "Workers連携",
      "無料プランが充実"
    ],
    limitations: [
      "Next.jsは一部設定が必要",
      "管理画面がやや複雑"
    ],
    bestFor: "高トラフィックサイト、グローバル展開",
    url: "https://pages.cloudflare.com"
  }
];

export default function DeployGuidePage() {
  const [activeSection, setActiveSection] = useState("webserver");
  const [expandedService, setExpandedService] = useState(null);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* 背景エフェクト */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* ヘッダー */}
      <header className="sticky top-0 z-50 border-b border-slate-800/50 backdrop-blur-md bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-xl">
                <RocketIcon />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">
                  デプロイ<span className="text-cyan-400">ガイド</span>
                </span>
                <p className="text-xs text-slate-500">プログラミング初心者向け</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-slate-800 text-cyan-400"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-6 py-12">
        {/* ヒーローセクション */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 mb-6 border border-slate-700/50">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Next.js アプリケーション対応
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            アプリを
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              インターネットに公開
            </span>
            しよう
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            開発したアプリケーションを世界中の人々がアクセスできるようにする
            <br className="hidden md:block" />
            「デプロイ」について、基礎から丁寧に解説します。
          </p>
        </section>

        {/* セクション1: Webサーバーとは */}
        <section id="webserver" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
              <ServerIcon />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Webサーバーとは</h2>
              <p className="text-slate-500">インターネット公開の仕組みを理解しよう</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 説明カード */}
            <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Webサーバーの役割</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                <span className="text-white font-semibold">Webサーバー</span>とは、インターネットを通じてWebページやアプリケーションを配信するコンピュータのことです。
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                私たちがブラウザでURLにアクセスすると、Webサーバーがリクエストを受け取り、HTMLやCSS、JavaScriptなどのファイルを返送します。この仕組みによって、世界中のどこからでもWebサイトを閲覧できるのです。
              </p>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400">
                  💡 <span className="text-slate-300">ポイント：</span>Webサーバーは24時間365日稼働し続け、いつでもアクセスに応答できる状態を維持しています。
                </p>
              </div>
            </div>

            {/* 図解カード */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold mb-6 text-center">Webサーバーの仕組み</h3>
              <div className="flex flex-col items-center gap-4">
                {/* ユーザー */}
                <div className="flex items-center gap-4 p-4 bg-slate-800/80 rounded-xl w-full">
                  <div className="p-2 bg-violet-500/20 rounded-lg">
                    <UsersIcon />
                  </div>
                  <div>
                    <p className="font-semibold">ユーザー（あなた）</p>
                    <p className="text-sm text-slate-400">ブラウザでURLにアクセス</p>
                  </div>
                </div>

                {/* 矢印 */}
                <div className="flex flex-col items-center text-slate-500">
                  <span className="text-sm">リクエスト送信</span>
                  <svg className="w-6 h-8" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4v24M6 22l6 6 6-6"/>
                  </svg>
                </div>

                {/* Webサーバー */}
                <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-xl w-full border border-cyan-500/30">
                  <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                    <ServerIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400">Webサーバー</p>
                    <p className="text-sm text-slate-400">ファイルを保管・配信</p>
                  </div>
                </div>

                {/* 矢印 */}
                <div className="flex flex-col items-center text-slate-500">
                  <svg className="w-6 h-8" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 28V4M6 10l6-6 6 6"/>
                  </svg>
                  <span className="text-sm">レスポンス返送</span>
                </div>

                {/* 表示結果 */}
                <div className="flex items-center gap-4 p-4 bg-slate-800/80 rounded-xl w-full">
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                    <MonitorIcon />
                  </div>
                  <div>
                    <p className="font-semibold">ブラウザに表示</p>
                    <p className="text-sm text-slate-400">HTML/CSS/JSを描画</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション2: デプロイメントとは */}
        <section id="deployment" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-violet-500/10 rounded-2xl border border-violet-500/20">
              <CloudUploadIcon />
            </div>
            <div>
              <h2 className="text-3xl font-bold">デプロイメントとは</h2>
              <p className="text-slate-500">アプリを公開するための重要なステップ</p>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800/50">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-violet-400">デプロイメント</span>の定義
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                デプロイメント（Deployment）とは、開発したアプリケーションを<span className="text-white font-semibold">Webサーバーに配置</span>し、インターネット上で公開することです。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">💻</span> 開発環境（ローカル）
                  </h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• 自分のパソコンで動作</li>
                    <li>• localhost:3000 でアクセス</li>
                    <li>• 自分だけが見られる</li>
                  </ul>
                </div>
                <div className="p-6 bg-violet-500/10 rounded-2xl border border-violet-500/30">
                  <h4 className="font-bold mb-3 flex items-center gap-2 text-violet-400">
                    <span className="text-2xl">🌐</span> 本番環境（公開後）
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Webサーバーで動作</li>
                    <li>• 独自のURLでアクセス</li>
                    <li>• 世界中から閲覧可能</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl border border-cyan-500/20">
                <h4 className="font-bold mb-3">🎯 つまり、デプロイとは...</h4>
                <p className="text-slate-300">
                  開発完了したアプリを「自分だけが見られる状態」から「誰でもアクセスできる状態」にすることです。Webサーバーにファイルを配置（デプロイ）することで、URLを知っている人なら誰でもあなたのアプリを使えるようになります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション3: デプロイの流れ */}
        <section id="flow" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <GitBranchIcon />
            </div>
            <div>
              <h2 className="text-3xl font-bold">デプロイの流れ</h2>
              <p className="text-slate-500">5つのステップで公開完了</p>
            </div>
          </div>

          <div className="relative">
            {/* 接続線 */}
            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-emerald-500 hidden md:block" />

            <div className="space-y-6">
              {deployFlowSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 items-start group"
                >
                  {/* ステップ番号 */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-black text-slate-500 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300 z-10">
                    {step.number}
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-grow p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 group-hover:border-slate-700 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-slate-800 rounded-xl text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 補足説明 */}
          <div className="mt-12 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
            <h4 className="font-bold mb-3 text-emerald-400">✨ 自動化のメリット</h4>
            <p className="text-slate-400">
              VercelやNetlifyなどのサービスを使うと、GitHubにコードをプッシュするだけで自動的にビルドとデプロイが実行されます。これにより、手動でファイルをアップロードする手間がなくなり、常に最新のコードが公開されます。
            </p>
          </div>
        </section>

        {/* セクション4: 主なデプロイ方法 */}
        <section id="services" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
              <GlobeIcon />
            </div>
            <div>
              <h2 className="text-3xl font-bold">主なデプロイ方法</h2>
              <p className="text-slate-500">4つの人気サービスを比較</p>
            </div>
          </div>

          <div className="grid gap-6">
            {deployServices.map((service) => (
              <div
                key={service.id}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-500 ${
                  expandedService === service.id
                    ? "border-slate-600"
                    : "border-slate-800/50 hover:border-slate-700"
                }`}
              >
                {/* おすすめバッジ */}
                {service.recommended && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-xs font-bold text-white">
                    Next.jsにおすすめ
                  </div>
                )}

                {/* ヘッダー部分（クリックで展開） */}
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className={`w-full p-6 md:p-8 bg-gradient-to-r ${service.color} text-left`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold ${service.textColor}`}>
                        {service.name}
                      </h3>
                      <p className={`${service.textColor} opacity-80 mt-1`}>
                        {service.tagline}
                      </p>
                    </div>
                    <div className={`p-2 rounded-full bg-white/10 ${service.textColor} transition-transform duration-300 ${
                      expandedService === service.id ? "rotate-90" : ""
                    }`}>
                      <ArrowRightIcon />
                    </div>
                  </div>
                </button>

                {/* 展開コンテンツ */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedService === service.id ? "max-h-[600px]" : "max-h-0"
                }`}>
                  <div className="p-6 md:p-8 bg-slate-900/80">
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* 特徴 */}
                      <div>
                        <h4 className="font-bold mb-3 text-emerald-400 flex items-center gap-2">
                          <CheckIcon /> 特徴・メリット
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                              <span className="text-emerald-400 mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 制限事項 */}
                      <div>
                        <h4 className="font-bold mb-3 text-amber-400">⚠️ 注意点</h4>
                        <ul className="space-y-2">
                          {service.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                              <span className="text-amber-400 mt-0.5">•</span>
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
                      <div>
                        <span className="text-sm text-slate-500">おすすめの用途：</span>
                        <span className="text-sm text-slate-300 ml-2">{service.bestFor}</span>
                      </div>
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        公式サイトへ <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 比較表 */}
          <div className="mt-12 bg-slate-900/50 rounded-3xl p-6 md:p-8 border border-slate-800/50 overflow-x-auto">
            <h3 className="text-xl font-bold mb-6">サービス比較表</h3>
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">サービス</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Next.js対応</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">無料枠</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/50">
                  <td className="py-4 px-4 font-semibold">GitHub Pages</td>
                  <td className="py-4 px-4"><span className="text-amber-400">△ 静的のみ</span></td>
                  <td className="py-4 px-4">完全無料</td>
                  <td className="py-4 px-4 text-slate-400">シンプル、GitHub統合</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="py-4 px-4 font-semibold">Vercel</td>
                  <td className="py-4 px-4"><span className="text-emerald-400">◎ 最適</span></td>
                  <td className="py-4 px-4">充実</td>
                  <td className="py-4 px-4 text-slate-400">Next.js開発元、ゼロコンフィグ</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="py-4 px-4 font-semibold">Netlify</td>
                  <td className="py-4 px-4"><span className="text-cyan-400">○ 良好</span></td>
                  <td className="py-4 px-4">充実</td>
                  <td className="py-4 px-4 text-slate-400">フォーム機能、使いやすいUI</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Cloudflare Pages</td>
                  <td className="py-4 px-4"><span className="text-cyan-400">○ 良好</span></td>
                  <td className="py-4 px-4">非常に充実</td>
                  <td className="py-4 px-4 text-slate-400">高速CDN、無制限帯域</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめセクション */}
        <section className="p-8 md:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/50">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">さあ、デプロイしてみよう！</h2>
            <p className="text-slate-400 mb-8">
              Next.jsアプリケーションなら、まずはVercelでのデプロイがおすすめです。
              <br />
              GitHubと連携するだけで、数分で世界中に公開できます。
            </p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
            >
              <RocketIcon />
              Vercelで始める
            </a>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-800/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
          <p>デプロイ講座 - プログラミング初心者向け教材</p>
        </div>
      </footer>
    </div>
  );
}