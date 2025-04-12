
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { BarChart3, Shield, FileCheck, Database, ArrowRight, CheckCircle } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-purple/90 to-brand-lightPurple/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              流程力税盾360智能财税管理系统
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              满足企业四流一致的合规账需求，实现业财融合的企业流程管理
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">核心功能模块</h2>
            <p className="text-xl text-gray-600">
              为企业提供一站式智能财税管理解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BarChart3 size={48} />}
              title="四流一致"
              description="实现业务流、信息流、资金流、票据流的完美统一，确保财税数据一致性"
            />
            <FeatureCard
              icon={<Shield size={48} />}
              title="财税风险防控"
              description="多维度风险预警分析，自动识别潜在财税合规问题，提前防范风险"
            />
            <FeatureCard
              icon={<FileCheck size={48} />}
              title="智能核算与报表"
              description="自动生成凭证与报表，智能分析财务数据，提高财务工作效率"
            />
            <FeatureCard
              icon={<Database size={48} />}
              title="业财一体化工具"
              description="打通业务系统与财务系统，实现数据自动同步，无缝集成"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" className="group">
                <span>查看所有功能</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">为不同规模企业定制解决方案</h2>
            <p className="text-xl text-gray-600">
              无论您是初创企业还是大型集团，我们都能满足您的财税管理需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">初创企业</h3>
              <p className="text-gray-600 mb-6">适合年营收不足500万的初创企业，提供基础的财税管理功能。</p>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">基础四流核验</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">简单风险预警</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">单主体数据看板</span>
                </li>
              </ul>
              <Link to="/pricing">
                <Button className="w-full bg-white text-brand-purple border border-brand-purple hover:bg-gray-50">
                  了解详情
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-brand-purple relative">
              <div className="absolute top-0 right-0 bg-brand-purple text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                热门选择
              </div>
              <h3 className="text-xl font-bold mb-4">中小企业</h3>
              <p className="text-gray-600 mb-6">适合3-50个主体架构的中小型企业，提供全面的财税管理功能。</p>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">自动化核验体系</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">全量税务数据同步</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">多主体风险穿透分析</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">业财一体工具</span>
                </li>
              </ul>
              <Link to="/pricing">
                <Button className="w-full bg-brand-purple hover:bg-brand-lightPurple text-white">
                  了解详情
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">大型企业</h3>
              <p className="text-gray-600 mb-6">适合50个以上主体架构的大型企业，提供高级定制化解决方案。</p>
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">全功能覆盖</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">定制化解决方案</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">大规模数据处理</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-2" />
                  <span className="text-gray-700">集团税务规划</span>
                </li>
              </ul>
              <Link to="/pricing">
                <Button className="w-full bg-white text-brand-purple border border-brand-purple hover:bg-gray-50">
                  联系销售
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10">
                <h2 className="text-3xl font-bold mb-4">准备好开始使用了吗？</h2>
                <p className="text-gray-600 mb-8">
                  立即免费试用，体验流程力税盾360如何帮助您的企业实现业财融合、防范财税风险。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white">
                    免费试用
                  </Button>
                  <Button variant="outline">
                    联系我们
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-brand-purple/90 to-brand-lightPurple/90 p-10 text-white flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">客户支持</h3>
                  <p className="mb-6">
                    我们的专业团队随时为您提供支持，确保您的系统顺利运行。
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="mr-2" />
                      <span>7×24小时技术支持</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="mr-2" />
                      <span>专业财税咨询</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="mr-2" />
                      <span>定期系统更新</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
