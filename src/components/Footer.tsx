
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-brand-purple mb-4">流程力税盾360</h2>
            <p className="text-gray-600 mb-4">
              智能财税管理系统，满足企业四流一致的合规账需求，实现业财融合的企业流程管理。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 13.5C7.7 13.5 7 12.8 7 12C7 11.2 7.7 10.5 8.5 10.5C9.3 10.5 10 11.2 10 12C10 12.8 9.3 13.5 8.5 13.5ZM15.5 13.5C14.7 13.5 14 12.8 14 12C14 11.2 14.7 10.5 15.5 10.5C16.3 10.5 17 11.2 17 12C17 12.8 16.3 13.5 15.5 13.5ZM19.1 10C19 6.5 15.7 3.6 12 3.6C8.3 3.6 5 6.5 4.9 10C3.3 10.5 2 12 2 13.9C2 16.3 3.8 18.2 6.1 18.2C7.1 18.2 7.9 17.9 8.5 17.3L8.7 17.1L9.1 17.3C10 17.8 11 18 12 18C13 18 14 17.8 14.9 17.3L15.3 17.1L15.5 17.3C16.1 17.8 16.9 18.2 17.9 18.2C20.2 18.2 22 16.3 22 13.9C22 12 20.7 10.5 19.1 10Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <span className="sr-only">微博</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.9,9.5C8,10.2 6,12.1 6,14.5C6,17.5 9.2,20 13,20C16.8,20 20,17.5 20,14.5C20,12.1 18,10.2 15.1,9.5C15.1,9.5 16.3,8.7 16.3,7.6C16.3,6.5 15.3,6 15.3,6C15.3,6 15.9,4.6 15,4C14.1,3.4 12.9,4.2 12,4.2C11.1,4.2 9.9,3.4 9,4C8.1,4.6 8.7,6 8.7,6C8.7,6 7.7,6.5 7.7,7.6C7.7,8.7 8.9,9.5 8.9,9.5M12,17.8C9.9,17.8 8.7,16.4 8.7,16.4C8.7,16.4 8.7,14.3 10.2,14.1C10.7,14 12,14.7 12,14.7C12,14.7 13.3,14 13.8,14.1C15.3,14.3 15.3,16.4 15.3,16.4C15.3,16.4 14.1,17.8 12,17.8M20.8,7.3C20.8,7.3 20.4,6.5 19.4,6.3C18.4,6.1 17.9,7 17.9,7C17.9,7 18.1,5.2 17.4,4.5C16.7,3.8 15.5,4.3 15.5,4.3C15.5,4.3 16.2,2.8 15.5,2.1C14.8,1.4 13.5,2.1 13.5,2.1L14.6,3.3L13.4,2.3C13.4,2.3 12.5,1.9 12,2.7C11.5,1.9 10.6,2.3 10.6,2.3L9.4,3.3L10.5,2.1C10.5,2.1 9.2,1.4 8.5,2.1C7.8,2.8 8.5,4.3 8.5,4.3C8.5,4.3 7.3,3.8 6.6,4.5C5.9,5.2 6.1,7 6.1,7C6.1,7 5.6,6.1 4.6,6.3C3.6,6.5 3.2,7.3 3.2,7.3C3.2,7.3 2.4,8.3 3.5,8.9C4.6,9.5 6.2,8.2
                   6.2,8.2C6.2,8.2 5,9.6 5.7,10.2C6.4,10.8 8,10.2 8,10.2C8,10.2 7.1,11.4 7.8,12C8.5,12.6 10.1,11.8 10.1,11.8C10.1,11.8 9.8,13.4 10.8,13.7C11.8,14 12.2,12.7 12.2,12.7C12.2,12.7 12.6,14 13.6,13.7C14.6,13.4 14.3,11.8 14.3,11.8C14.3,11.8 15.9,12.6 16.6,12C17.3,11.4 16.4,10.2 16.4,10.2C16.4,10.2 18,10.8 18.7,10.2C19.4,9.6 18.2,8.2 18.2,8.2C18.2,8.2 19.8,9.5 20.9,8.9C22,8.3 20.8,7.3 20.8,7.3Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">产品</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-brand-purple">产品特点</Link>
              </li>
              <li>
                <Link to="/products#features" className="text-gray-600 hover:text-brand-purple">核心功能</Link>
              </li>
              <li>
                <Link to="/products#integration" className="text-gray-600 hover:text-brand-purple">业财一体化</Link>
              </li>
              <li>
                <Link to="/products#automation" className="text-gray-600 hover:text-brand-purple">智能审核</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">解决方案</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/small-business" className="text-gray-600 hover:text-brand-purple">初创企业</Link>
              </li>
              <li>
                <Link to="/solutions/medium-business" className="text-gray-600 hover:text-brand-purple">中小企业</Link>
              </li>
              <li>
                <Link to="/solutions/large-business" className="text-gray-600 hover:text-brand-purple">大型企业</Link>
              </li>
              <li>
                <Link to="/solutions/custom" className="text-gray-600 hover:text-brand-purple">定制方案</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">公司</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-purple">关于我们</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-purple">联系我们</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-brand-purple">招贤纳士</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-purple">博客</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} 流程力税盾360. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
