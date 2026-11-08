import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-black/[.06] bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="text-[16px] font-semibold text-[#1d1d1f] mb-2">KKK的AI修炼场</div>
            <p className="text-[13px] leading-relaxed text-[#6e6e73] max-w-md">
              把书拆成能讲的课，把 AI 用进真实任务。
            </p>
          </div>
          <div className="text-[13px] text-[#6e6e73] space-y-2">
            <div><Link to="/" className="hover:text-[#1f5c52]">首页</Link></div>
            <div><Link to="/about" className="hover:text-[#1f5c52]">关于我</Link></div>
            <div><Link to="/about" className="hover:text-[#1f5c52]">联系我</Link></div>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-black/[.06] text-[12px] text-[#86868b] leading-relaxed">
          © 2026 kk · 本站在 kenyanghui/chaiAI（作者 杨辉，MIT License）基础上改造
        </div>
      </div>
    </footer>
  )
}
