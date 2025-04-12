
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, ChevronRight, BarChart3, FileCheck, Shield, Database, Repeat, CreditCard, CheckCheck, Bank } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-brand-purple/90 to-brand-lightPurple/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">流程力税盾360智能财税管理系统</h1>
            <p className="text-xl mb-8">
              通过无缝集成业务流、信息流、资金流和票据流，实现企业财税合规与风险防控
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
                免费试用
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Introduction */}
      <section id="introduction" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">全面的企业财税管理解决方案</h2>
            <p className="text-xl text-gray-600">
              流程力税盾360致力于解决企业财税管理的痛点，提供一站式智能财税管理平台
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">智能化四流一致</h3>
              <p className="text-gray-600 mb-6">
                实现业务流、信息流、资金流、票据流的完整打通与智能核验，确保财税数据一致性，降低企业涉税风险。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">自动识别各业务环节数据差异</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">智能匹配销售与采购记录</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">准确核验发票与支付信息</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">多维度数据分析与展示</span>
                </li>
              </ul>
              <Button variant="outline" className="group">
                <span>了解四流一致核验</span>
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-10 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 size={32} className="text-white" />
                  </div>
                  <p className="font-medium">业务流</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileCheck size={32} className="text-white" />
                  </div>
                  <p className="font-medium">信息流</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard size={32} className="text-white" />
                  </div>
                  <p className="font-medium">资金流</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Repeat size={32} className="text-white" />
                  </div>
                  <p className="font-medium">票据流</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Features */}
      <section id="features" className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">核心功能模块</h2>
            <p className="text-xl text-gray-600">
              为企业提供全方位的财税管理工具
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Shield size={28} className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">智能监控系统</h3>
              <p className="text-gray-600 mb-6">
                全面监控企业财税风险，提前识别潜在问题，确保企业财税合规。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">多主体风险穿透分析</span>
                </li>
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">关联交易动态定价监控</span>
                </li>
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">关联主体税负平衡监控</span>
                </li>
              </ul>
              <a href="#" className="text-brand-purple hover:text-brand-lightPurple font-medium inline-flex items-center">
                <span>了解更多</span>
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCheck size={28} className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">自动化核验体系</h3>
              <p className="text-gray-600 mb-6">
                自动检查与核验各类财税数据，确保四流一致，减少人工错误。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">销售/采购/费用四流一致核验</span>
                </li>
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">存货/往来/银行自动对账</span>
                </li>
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">全量税务数据同步</span>
                </li>
              </ul>
              <a href="#" className="text-brand-purple hover:text-brand-lightPurple font-medium inline-flex items-center">
                <span>了解更多</span>
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Database size={28} className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">业财一体工具</h3>
              <p className="text-gray-600 mb-6">
                打通业务与财务系统，实现数据自动同步，提高工作效率。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">自动生成税务凭证</span>
                </li>
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">直连电子税务局申报</span>
                </li>
                <li className="flex">
                  <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700 text-sm">业务数据自动转换为财务凭证</span>
                </li>
              </ul>
              <a href="#" className="text-brand-purple hover:text-brand-lightPurple font-medium inline-flex items-center">
                <span>了解更多</span>
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Integration */}
      <section id="integration" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">无缝数据集成</h2>
              <p className="text-gray-600 mb-6">
                流程力税盾360可与多种企业系统和数据源集成，实现数据自动同步和处理。
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                      <Bank size={24} className="text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">银行数据集成</h4>
                    <p className="text-gray-600">自动同步银行流水和交易记录，实现资金流与其他业务流的对接。</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                      <FileCheck size={24} className="text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">电子发票集成</h4>
                    <p className="text-gray-600">自动获取和处理电子发票数据，确保票据流的准确性和完整性。</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                      <Database size={24} className="text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">ERP系统集成</h4>
                    <p className="text-gray-600">与企业ERP系统无缝对接，实现业务数据与财税系统的互通。</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white">
                  了解集成方案
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-brand-purple/10 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-brand-purple rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">流程力税盾360</span>
                  </div>
                  <div className="absolute top-0 transform -translate-y-1/2">
                    <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white">
                      <span className="text-sm font-medium">银行数据</span>
                    </div>
                  </div>
                  <div className="absolute right-0 transform translate-x-1/2">
                    <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center text-white">
                      <span className="text-sm font-medium">ERP系统</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 transform translate-y-1/2">
                    <div className="w-24 h-24 bg-brand-lightPurple rounded-full flex items-center justify-center text-white">
                      <span className="text-sm font-medium">电子发票</span>
                    </div>
                  </div>
                  <div className="absolute left-0 transform -translate-x-1/2">
                    <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <span className="text-sm font-medium">税务系统</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">使用流程力税盾360的优势</h2>
            <p className="text-xl text-gray-600">
              为什么选择我们的智能财税管理系统
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">降低财税风险</h3>
              <p className="text-gray-600">
                通过智能监控和自动化核验，及时发现并解决潜在财税问题，降低企业合规风险。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">提高工作效率</h3>
              <p className="text-gray-600">
                自动化处理大量重复性工作，让财务人员专注于更有价值的分析和决策支持工作。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">实现业财融合</h3>
              <p className="text-gray-600">
                打通业务与财务壁垒，实现数据和流程的一体化，提升企业整体运营效率。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">决策支持</h3>
              <p className="text-gray-600">
                提供丰富的数据分析和可视化工具，辅助管理层做出更科学的经营决策。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">灵活扩展</h3>
              <p className="text-gray-600">
                系统架构支持灵活扩展，可根据企业规模和需求变化调整功能和容量。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">专业支持</h3>
              <p className="text-gray-600">
                提供专业的实施培训和技术支持服务，确保系统高效运行和使用。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">成功案例</h2>
            <p className="text-xl text-gray-600">
              了解流程力税盾360如何帮助各类企业解决财税管理难题
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">某制造业集团</h3>
                <p className="text-gray-600 mb-4">
                  通过流程力税盾360实现多主体税负平衡，降低整体税负超过15%，同时显著减少税务风险。
                </p>
                <a href="#" className="text-brand-purple hover:text-brand-lightPurple font-medium inline-flex items-center">
                  <span>查看详情</span>
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">某贸易企业</h3>
                <p className="text-gray-600 mb-4">
                  实现销售/采购/费用四流一致自动化核验，处理效率提升200%，避免了多起潜在税务风险。
                </p>
                <a href="#" className="text-brand-purple hover:text-brand-lightPurple font-medium inline-flex items-center">
                  <span>查看详情</span>
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">某服务业公司</h3>
                <p className="text-gray-600 mb-4">
                  借助业财一体工具，实现从业务数据到财务凭证的自动转换，财务人力成本降低30%。
                </p>
                <a href="#" className="text-brand-purple hover:text-brand-lightPurple font-medium inline-flex items-center">
                  <span>查看详情</span>
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">立即开始使用流程力税盾360</h2>
            <p className="text-xl opacity-90 mb-8">
              体验智能财税管理系统如何帮助您的企业实现业财融合，降低财税风险
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
                免费试用
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                联系我们
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
