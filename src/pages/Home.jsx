import { Link } from 'react-router-dom'

const work = [
  {
    k: '拆书做课',
    d: '用 RIA 便签法把书拆成能讲的课。先收敛范围、再拆片段、最后落成课件，不只读一遍做笔记。',
    items: ['选书与范围收敛', 'RIA 便签拆解', '课件与现场带练'],
  },
  {
    k: 'AI 内训',
    d: '拿真实任务练，不刷课。标书审查、文档生成、日报周报，练完能直接接回日常工作。',
    items: ['AI 工具实操', '标书与合同辅助', '内训课程设计'],
  },
  {
    k: '售前与文档',
    d: '光伏、充电桩 EPC 售前支持；招标文件、合同的审核意见，看的是废标风险和条款权益。',
    items: ['招标文件审查', '合同审核意见', '售前方案材料'],
  },
]

export default function Home() {
  return (
    <div>
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow mb-5">KKK的AI修炼场</div>
          <h1 className="headline text-[38px] md:text-[52px] mb-6">
            把书拆成能讲的课，<br />
            把 AI 用进真实任务。
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#5b5b60] max-w-2xl mb-10">
            这里放我做课、做培训、做业务沉淀的记录。不收藏工具，不刷课，
            每一样都从手头真实要交的活儿开始，做完能直接拿去用。
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/about" className="btn-primary">关于我 →</Link>
            <span className="text-[13px] text-[#86868b]">管理培训 · 售前支持 · 拆书做课</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-black/[.06] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-3">平时在做什么</div>
          <h2 className="headline text-[26px] md:text-[32px] mb-10">三件占掉大部分时间的事</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {work.map(w => (
              <div key={w.k} className="apple-card p-6">
                <div className="text-[17px] font-semibold text-[#1d1d1f] mb-3">{w.k}</div>
                <p className="text-[13.5px] leading-relaxed text-[#5b5b60] mb-5">{w.d}</p>
                <ul className="space-y-1.5 text-[12.5px] text-[#86868b]">
                  {w.items.map(i => <li key={i}>· {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-black/[.06]">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow mb-3">怎么做事</div>
          <h2 className="headline text-[26px] md:text-[32px] mb-6">先跑通，再打磨</h2>
          <p className="text-[15px] leading-relaxed text-[#5b5b60]">
            需求先问清给谁看、解决什么问题、有没有硬指标；方案能简单就别复杂。
            做完给出处、给验证方法，剩下的风险如实说。这套习惯也用在课上和培训里。
          </p>
        </div>
      </section>
    </div>
  )
}
