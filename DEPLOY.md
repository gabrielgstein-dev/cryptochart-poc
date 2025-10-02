# 🚀 Guia de Deploy - CryptoChart

## Opções de Hospedagem Gratuita

### 1. 🏆 **Vercel (Recomendado)**

#### **Deploy Automático via GitHub**
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe seu repositório `tradingchart`
5. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build`
   - **Install Command**: `pnpm install`
6. Clique em "Deploy"

#### **Deploy via CLI**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### 2. 🌐 **Netlify**

#### **Deploy via GitHub**
1. Acesse [netlify.com](https://netlify.com)
2. Conecte sua conta GitHub
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Configure:
   - **Build command**: `pnpm build`
   - **Publish directory**: `.next`
   - **Install command**: `pnpm install`

### 3. 🚂 **Railway**

#### **Deploy via GitHub**
1. Acesse [railway.app](https://railway.app)
2. Conecte sua conta GitHub
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Configure:
   - **Build command**: `pnpm build`
   - **Start command**: `pnpm start`

### 4. 📄 **GitHub Pages (Limitado)**

⚠️ **Atenção**: GitHub Pages não suporta SSR. Use apenas se remover o cache SSR.

#### **Configuração**
```bash
# Instalar gh-pages
pnpm add -D gh-pages

# Adicionar script no package.json
"deploy": "gh-pages -d out"

# Deploy
pnpm run deploy
```

## 🔧 Configurações Necessárias

### **Variáveis de Ambiente (Opcional)**
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.coingecko.com
```

### **next.config.ts**
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Apenas para GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true // Apenas para GitHub Pages
  }
}

export default nextConfig
```

## 🎯 Recomendações por Caso de Uso

### **Para Desenvolvimento/Teste**
- ✅ **Vercel**: Deploy automático, SSR completo
- ✅ **Netlify**: Boa alternativa, interface amigável

### **Para Produção**
- ✅ **Vercel**: Melhor performance para Next.js
- ✅ **Railway**: Mais controle, opção de banco de dados

### **Para Portfolio/Demo**
- ✅ **GitHub Pages**: Simples, mas sem SSR
- ✅ **Vercel**: Melhor opção geral

## 📊 Comparação de Limites

| Plataforma | Builds/Mês | Bandwidth | SSR | Domínio Custom |
|------------|------------|-----------|-----|----------------|
| Vercel     | 100        | 100GB     | ✅  | ✅             |
| Netlify    | 300        | 100GB     | ✅  | ✅             |
| Railway    | Ilimitado  | $5 crédito| ✅  | ✅             |
| GitHub     | Ilimitado  | 1GB       | ❌  | ✅             |

## 🚀 Deploy Rápido (Vercel)

```bash
# 1. Fazer push para GitHub
git push origin main

# 2. Acessar vercel.com e importar projeto

# 3. Aguardar deploy automático

# 4. Acessar URL gerada
```

## 🔍 Troubleshooting

### **Erro de Build**
```bash
# Limpar cache
rm -rf .next node_modules
pnpm install
pnpm build
```

### **Erro de API**
- Verificar se a API CoinGecko está funcionando
- Testar localmente primeiro
- Verificar logs de deploy

### **Erro de Dependências**
- Verificar se todas as dependências estão em `dependencies`
- Não usar `devDependencies` para código de produção
