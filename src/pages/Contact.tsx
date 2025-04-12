
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-gray-600 mb-8">
              无论您有任何问题或需求，我们都随时为您提供帮助和支持
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">联系方式</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">电话咨询</h3>
                    <p className="text-gray-600 mb-1">客服热线：400-123-4567</p>
                    <p className="text-gray-600">销售热线：400-123-4568</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                      <Mail size={24} className="text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">电子邮件</h3>
                    <p className="text-gray-600 mb-1">客户服务：service@shieldflow360.com</p>
                    <p className="text-gray-600">商务合作：business@shieldflow360.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">公司地址</h3>
                    <p className="text-gray-600 mb-1">上海市浦东新区张江高科技园区</p>
                    <p className="text-gray-600">科苑路88号8栋501室</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                      <Clock size={24} className="text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">工作时间</h3>
                    <p className="text-gray-600 mb-1">工作日：上午9:00 - 下午6:00</p>
                    <p className="text-gray-600">周六：上午10:00 - 下午2:00（仅客服）</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">关注我们的社交媒体</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors">
                    <span className="sr-only">微信</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.5 13.5C7.7 13.5 7 12.8 7 12C7 11.2 7.7 10.5 8.5 10.5C9.3 10.5 10 11.2 10 12C10 12.8 9.3 13.5 8.5 13.5ZM15.5 13.5C14.7 13.5 14 12.8 14 12C14 11.2 14.7 10.5 15.5 10.5C16.3 10.5 17 11.2 17 12C17 12.8 16.3 13.5 15.5 13.5ZM19.1 10C19 6.5 15.7 3.6 12 3.6C8.3 3.6 5 6.5 4.9 10C3.3 10.5 2 12 2 13.9C2 16.3 3.8 18.2 6.1 18.2C7.1 18.2 7.9 17.9 8.5 17.3L8.7 17.1L9.1 17.3C10 17.8 11 18 12 18C13 18 14 17.8 14.9 17.3L15.3 17.1L15.5 17.3C16.1 17.8 16.9 18.2 17.9 18.2C20.2 18.2 22 16.3 22 13.9C22 12 20.7 10.5 19.1 10Z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors">
                    <span className="sr-only">微博</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.9,9.5C8,10.2 6,12.1 6,14.5C6,17.5 9.2,20 13,20C16.8,20 20,17.5 20,14.5C20,12.1 18,10.2 15.1,9.5C15.1,9.5 16.3,8.7 16.3,7.6C16.3,6.5 15.3,6 15.3,6C15.3,6 15.9,4.6 15,4C14.1,3.4 12.9,4.2 12,4.2C11.1,4.2 9.9,3.4 9,4C8.1,4.6 8.7,6 8.7,6C8.7,6 7.7,6.5 7.7,7.6C7.7,8.7 8.9,9.5 8.9,9.5M12,17.8C9.9,17.8 8.7,16.4 8.7,16.4C8.7,16.4 8.7,14.3 10.2,14.1C10.7,14 12,14.7 12,14.7C12,14.7 13.3,14 13.8,14.1C15.3,14.3 15.3,16.4 15.3,16.4C15.3,16.4 14.1,17.8 12,17.8M20.8,7.3C20.8,7.3 20.4,6.5 19.4,6.3C18.4,6.1 17.9,7 17.9,7C17.9,7 18.1,5.2 17.4,4.5C16.7,3.8 15.5,4.3 15.5,4.3C15.5,4.3 16.2,2.8 15.5,2.1C14.8,1.4 13.5,2.1 13.5,2.1L14.6,3.3L13.4,2.3C13.4,2.3 12.5,1.9 12,2.7C11.5,1.9 10.6,2.3 10.6,2.3L9.4,3.3L10.5,2.1C10.5,2.1 9.2,1.4 8.5,2.1C7.8,2.8 8.5,4.3 8.5,4.3C8.5,4.3 7.3,3.8 6.6,4.5C5.9,5.2 6.1,7 6.1,7C6.1,7 5.6,6.1 4.6,6.3C3.6,6.5 3.2,7.3 3.2,7.3C3.2,7.3 2.4,8.3 3.5,8.9C4.6,9.5 6.2,8.2
                   6.2,8.2C6.2,8.2 5,9.6 5.7,10.2C6.4,10.8 8,10.2 8,10.2C8,10.2 7.1,11.4 7.8,12C8.5,12.6 10.1,11.8 10.1,11.8C10.1,11.8 9.8,13.4 10.8,13.7C11.8,14 12.2,12.7 12.2,12.7C12.2,12.7 12.6,14 13.6,13.7C14.6,13.4 14.3,11.8 14.3,11.8C14.3,11.8 15.9,12.6 16.6,12C17.3,11.4 16.4,10.2 16.4,10.2C16.4,10.2 18,10.8 18.7,10.2C19.4,9.6 18.2,8.2 18.2,8.2C18.2,8.2 19.8,9.5 20.9,8.9C22,8.3 20.8,7.3 20.8,7.3Z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors">
                    <span className="sr-only">领英</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">发送消息</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名
                    </label>
                    <Input
                      id="name"
                      placeholder="请输入您的姓名"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司名称
                    </label>
                    <Input
                      id="company"
                      placeholder="请输入您的公司名称"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      电子邮箱
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="请输入您的电子邮箱"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      联系电话
                    </label>
                    <Input
                      id="phone"
                      placeholder="请输入您的联系电话"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    主题
                  </label>
                  <Input
                    id="subject"
                    placeholder="请输入消息主题"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    消息内容
                  </label>
                  <Textarea
                    id="message"
                    placeholder="请详细描述您的需求或问题"
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <div>
                  <Button type="submit" className="w-full md:w-auto bg-brand-purple hover:bg-brand-lightPurple text-white">
                    发送消息
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">我们的位置</h2>
            <p className="text-xl text-gray-600">
              欢迎来访，期待与您面对面交流
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">地图载入中...</p>
              {/* 实际项目中，这里应该嵌入一个真实的地图组件 */}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">常见问题</h2>
            <p className="text-xl text-gray-600">
              以下是我们的客户经常咨询的问题
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">如何开始使用流程力税盾360？</h3>
              <p className="mt-2 text-gray-600">
                您可以通过官网注册免费试用账号，或联系我们的销售团队获取定制方案和演示。
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">系统是否支持与现有ERP系统对接？</h3>
              <p className="mt-2 text-gray-600">
                是的，流程力税盾360支持与主流ERP系统对接，包括用友、金蝶、SAP等，实现数据自动同步。
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">如何获取技术支持？</h3>
              <p className="mt-2 text-gray-600">
                您可以通过客服热线、电子邮件或系统内的在线客服获取技术支持。我们的专业团队将全力解决您的问题。
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">是否提供实施培训服务？</h3>
              <p className="mt-2 text-gray-600">
                是的，我们提供专业的实施和培训服务，确保您的团队能够充分利用系统的所有功能。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
