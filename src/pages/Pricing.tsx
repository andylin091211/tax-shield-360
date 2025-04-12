
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Pricing: React.FC = () => {
  const experiencePlan = {
    title: "体验版",
    price: "免费",
    description: "适合初步探索和评估系统功能的企业",
    audience: "年营收 < 500 万的初创企业",
    buttonText: "开始免费体验",
    features: [
      { text: "基础四流核验（1个主体，1个用户，限100张发票/月）", available: true },
      { text: "简单风险预警", available: true },
      { text: "单主体数据看板", available: true },
      { text: "自动化核验体系", available: false },
      { text: "存货/往来/银行自动对账", available: false },
      { text: "全量税务数据同步", available: false },
      { text: "网银数据同步", available: false },
      { text: "多主体风险穿透分析", available: false },
      { text: "关联交易动态定价监控", available: false },
      { text: "业财一体工具", available: false },
    ]
  };

  const professionalPlan = {
    title: "专家版",
    price: "¥20,000",
    priceDetail: "/年",
    description: "全面的功能满足中小企业的财税管理需求",
    audience: "中小集团企业 (3-50主体架构)",
    buttonText: "联系销售",
    popular: true,
    features: [
      { text: "自动化核验体系", available: true },
      { text: "销售/采购/费用四流一致核验", available: true },
      { text: "存货/往来/银行自动对账", available: true },
      { text: "全量税务数据同步 (发票+申报)", available: true },
      { text: "网银数据同步", available: true },
      { text: "智能监控系统", available: true },
      { text: "多主体风险穿透分析 (≤50主体)", available: true },
      { text: "关联交易动态定价监控", available: true },
      { text: "关联主体税负平衡监控", available: true },
      { text: "业财一体工具", available: true },
      { text: "自动生成税务凭证", available: true },
      { text: "直连电子税务局申报", available: true },
      { text: "主体扩展: +8,000元/主体/年", available: true },
      { text: "用户扩展: +500元/用户/年", available: true },
    ]
  };

  const enterprisePlan = {
    title: "企业版",
    price: "联系我们",
    description: "为大型企业定制的高级解决方案",
    audience: "大型企业 (50+主体架构)",
    buttonText: "获取报价",
    features: [
      { text: "包含专家版全部功能", available: true },
      { text: "更多主体支持（50+）", available: true },
      { text: "企业专属定制功能", available: true },
      { text: "大规模数据处理能力", available: true },
      { text: "专属客户经理", available: true },
      { text: "高级API集成", available: true },
      { text: "集团税务规划建议", available: true },
      { text: "现场实施与培训", available: true },
      { text: "24/7优先技术支持", available: true },
      { text: "季度业务回顾", available: true },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Pricing Header */}
      <section className="pt-20 pb-12 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">简单透明的定价方案</h1>
            <p className="text-xl text-gray-600 mb-8">
              选择最适合您企业需求的方案，助力您实现业财融合
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="py-12 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard {...experiencePlan} />
            <PricingCard {...professionalPlan} />
            <PricingCard {...enterprisePlan} />
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">还不确定选择哪个方案？</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white">
                联系销售顾问
              </Button>
              <Button variant="outline">
                预约产品演示
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">功能对比</h2>
            <p className="text-gray-600">
              详细了解每个方案包含的具体功能
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 text-left font-medium text-gray-600">功能</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-600">体验版</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-600 bg-brand-purple/5">专家版</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-600">企业版</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">四流核验</td>
                  <td className="py-4 px-6 text-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center">
                            <Check size={20} className="text-green-500" />
                            <HelpCircle size={16} className="ml-1 text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">基础功能，1个主体，1个用户，限100张发票/月</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">风险预警</td>
                  <td className="py-4 px-6 text-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center">
                            <Check size={20} className="text-green-500" />
                            <HelpCircle size={16} className="ml-1 text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">简单风险预警功能</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center">
                            <Check size={20} className="text-green-500" />
                            <HelpCircle size={16} className="ml-1 text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">高级风险预警，多主体风险穿透分析 (≤50主体)</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center">
                            <Check size={20} className="text-green-500" />
                            <HelpCircle size={16} className="ml-1 text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">企业级风险预警，无限主体支持</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">数据同步</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">智能监控系统</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">业财一体工具</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">电子税务局对接</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">专属客户经理</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">集团税务规划</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-800 font-medium">现场实施与培训</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-5 h-0.5 bg-gray-300"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-purple/5">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center justify-center">
                            <Check size={20} className="text-yellow-500" />
                            <HelpCircle size={16} className="ml-1 text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">额外付费服务</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">常见问题</h2>
            <p className="text-gray-600">
              关于我们的产品与定价的常见问题解答
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">如何选择适合我企业的方案？</h3>
              <p className="mt-2 text-gray-600">
                根据您企业的规模和需求选择方案：初创企业可选择体验版，中小企业建议选择专家版，大型企业则可选择企业版。您也可以联系我们的销售团队，获取个性化建议。
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">我可以随时升级或降级我的方案吗？</h3>
              <p className="mt-2 text-gray-600">
                是的，您可以随时升级您的方案，升级后将立即生效。降级需要等到当前订阅周期结束后才能生效。
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">是否提供培训和技术支持？</h3>
              <p className="mt-2 text-gray-600">
                是的，我们为所有客户提供基础的技术支持。专家版和企业版客户还可享受更快速的响应和更专业的支持服务。企业版客户还包含现场实施与培训服务。
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">系统是否会定期更新？</h3>
              <p className="mt-2 text-gray-600">
                是的，我们会定期更新系统，以适应最新的财税政策变化和法规要求，并不断优化功能和用户体验。所有客户都可以免费获取这些更新。
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">如何开始免费试用？</h3>
              <p className="mt-2 text-gray-600">
                只需点击"免费试用"按钮，填写相关信息后即可立即开始使用体验版。无需信用卡，试用期结束后如不升级将自动停止服务。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">准备好开始使用了吗？</h2>
            <p className="text-xl text-gray-600 mb-8">
              立即免费试用，体验流程力税盾360如何帮助您的企业实现业财融合
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-lightPurple text-white">
                免费试用
              </Button>
              <Button size="lg" variant="outline">
                联系销售
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
