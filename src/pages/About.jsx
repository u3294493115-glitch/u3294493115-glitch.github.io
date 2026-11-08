export default function About() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow mb-4">关于我</div>
        <h1 className="headline text-[34px] md:text-[44px] mb-4">kk</h1>
        <p className="text-[16px] text-[#5b5b60] mb-12">把书拆成能讲的课，把 AI 用进真实任务。</p>

        <section className="mb-10">
          <div className="text-[13px] font-semibold text-[#1f5c52] mb-3">01 · 我是谁</div>
          <p className="text-[15px] leading-[1.9] text-[#424245]">
            在新能源行业做管理培训与售前支持。日常打交道的是招标文件、合同、课件和跟踪表，
            不是概念。习惯先把需求问清楚再动手，做完给出处、给验证方法，风险如实说。
          </p>
        </section>

        <section className="mb-10">
          <div className="text-[13px] font-semibold text-[#1f5c52] mb-3">02 · 我做什么</div>
          <ul className="space-y-4 text-[15px] leading-[1.9] text-[#424245]">
            <li><span className="font-semibold text-[#1d1d1f]">拆书做课：</span>用 RIA 便签法把书拆成能讲的课，先收敛范围，再拆片段，最后落成课件和现场带练。</li>
            <li><span className="font-semibold text-[#1d1d1f]">AI 内训：</span>拿真实任务练，不刷课。标书审查、文档生成、日报周报，练完能直接接回日常工作。</li>
            <li><span className="font-semibold text-[#1d1d1f]">售前与文档：</span>光伏、充电桩 EPC 售前支持；招标文件的废标风险、合同的审核意见。</li>
            <li><span className="font-semibold text-[#1d1d1f]">知识沉淀：</span>每天记时间开销、写复盘、往笔记库沉；学 AI 和工具都靠真实任务，不另开一套流程。</li>
          </ul>
        </section>

        <section className="mb-10">
          <div className="text-[13px] font-semibold text-[#1f5c52] mb-3">03 · 怎么找到我</div>
          <p className="text-[15px] leading-[1.9] text-[#424245]">
            有具体任务想聊，加微信或发邮件都行，说清来意，我看到会回。这个站没有留言表单，
            不经过任何第三方服务。点邮箱会自动填好主题；只有带「网站反馈」标记的来信会进选题池，
            其它来信不读取、不归档。
          </p>
          <div className="mt-4 space-y-2 text-[15px] leading-[1.9]">
            <div>
              <span className="text-[#6e6e73]">微信　</span>
              <span className="font-medium text-[#1d1d1f]">cqxuzhou</span>
              <span className="text-[13px] text-[#86868b]">　加时说一句来意</span>
            </div>
            <div>
              <span className="text-[#6e6e73]">邮箱　</span>
              <a
                href="mailto:387782861@qq.com?subject=%E3%80%90%E7%BD%91%E7%AB%99%E5%8F%8D%E9%A6%88%E3%80%91"
                className="font-medium text-[#1f5c52] underline underline-offset-4 hover:text-[#17473f]"
              >
                387782861@qq.com
              </a>
              <span className="text-[13px] text-[#86868b]">　点开自动填「网站反馈」主题</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
