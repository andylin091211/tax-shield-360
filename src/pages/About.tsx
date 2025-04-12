
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Target, Briefcase, Headphones } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-gray-600 mb-8">
              致力于为企业提供智能财税管理解决方案，帮助企业实现业财融合
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">公司简介</h2>
              <p className="text-gray-600 mb-6">
                流程力税盾360是一家专注于企业财税管理数字化转型的科技公司，致力于通过创新技术手段帮助企业解决财税管理难题，实现业财融合。
              </p>
              <p className="text-gray-600 mb-6">
                我们汇聚了一批拥有丰富财税经验和技术背景的专业人才，深入理解企业财税管理的难点和痛点，通过智能技术为企业提供全方位的财税管理解决方案。
              </p>
              <p className="text-gray-600 mb-8">
                公司成立以来，已服务数百家企业客户，涵盖制造、贸易、服务等多个行业，帮助客户有效降低财税风险，提升财务管理效率。
              </p>
              <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white">
                了解更多
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-brand-purple/10 p-8 rounded-lg text-center">
                  <span className="text-4xl font-bold text-brand-purple">5+</span>
                  <p className="text-gray-600 mt-2">研发团队</p>
                </div>
                <div className="bg-brand-purple/10 p-8 rounded-lg text-center">
                  <span className="text-4xl font-bold text-brand-purple">100+</span>
                  <p className="text-gray-600 mt-2">企业客户</p>
                </div>
                <div className="bg-brand-purple/10 p-8 rounded-lg text-center">
                  <span className="text-4xl font-bold text-brand-purple">30+</span>
                  <p className="text-gray-600 mt-2">专利技术</p>
                </div>
                <div className="bg-brand-purple/10 p-8 rounded-lg text-center">
                  <span className="text-4xl font-bold text-brand-purple">20+</span>
                  <p className="text-gray-600 mt-2">行业解决方案</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">使命与愿景</h2>
            <p className="text-xl text-gray-600">
              我们的目标是什么，我们将如何实现
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">我们的使命</h3>
              <p className="text-gray-600 mb-6">
                通过智能技术手段，帮助企业实现财税管理的数字化转型和业财融合，降低合规风险，提升管理效率。
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">降低企业财税合规风险</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">提高财务管理效率</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">促进企业业财融合</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Award size={28} className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">我们的愿景</h3>
              <p className="text-gray-600 mb-6">
                成为中国领先的企业财税管理智能化解决方案提供商，推动企业财税管理数字化转型。
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">智能财税管理领域的创新者</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">企业业财融合的推动者</span>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-brand-purple flex-shrink-0 mr-3" />
                  <span className="text-gray-700">数字化转型的助力者</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">核心价值观</h2>
            <p className="text-xl text-gray-600">
              指导我们工作和发展的基本原则
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">以客户为中心</h3>
              <p className="text-gray-600">
                深入理解客户需求，提供超出期望的产品和服务，持续为客户创造价值。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">专业创新</h3>
              <p className="text-gray-600">
                保持专业态度，不断创新，追求卓越，提供最高质量的产品和服务。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">诚信负责</h3>
              <p className="text-gray-600">
                诚实守信，勇于担当，对客户、员工和社会负责，构建和谐共赢的关系。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">我们的团队</h2>
            <p className="text-xl text-gray-600">
              专业的团队为您提供优质的服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">张明</h3>
                <p className="text-gray-500 mb-3">创始人兼CEO</p>
                <p className="text-gray-600 text-sm">
                  拥有20年财税管理经验，曾任多家大型企业财务总监。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">李强</h3>
                <p className="text-gray-500 mb-3">技术总监</p>
                <p className="text-gray-600 text-sm">
                  拥有15年软件开发经验，专注于企业财务系统和大数据技术。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">王芳</h3>
                <p className="text-gray-500 mb-3">财税专家</p>
                <p className="text-gray-600 text-sm">
                  资深注册会计师，税务筹划专家，拥有丰富的跨国企业财税管理经验。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">陈伟</h3>
                <p className="text-gray-500 mb-3">客户成功总监</p>
                <p className="text-gray-600 text-sm">
                  专注于客户体验和服务质量提升，确保客户获得最佳使用体验。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-purple text-white rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-2/3 p-10">
                <h2 className="text-3xl font-bold mb-4">想了解更多信息？</h2>
                <p className="text-xl opacity-90 mb-8">
                  联系我们获取更多关于流程力税盾360的信息和定制解决方案
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
                    联系我们
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    获取演示
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 bg-brand-lightPurple flex items-center justify-center p-10">
                <div className="text-center">
                  <Headphones size={56} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">客户服务热线</h3>
                  <p className="text-2xl font-bold">400-123-4567</p>
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

export default About;
