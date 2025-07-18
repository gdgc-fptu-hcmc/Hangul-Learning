import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const routeMap = {
  '/': 'Trang chủ',
  '/grammar': 'Ngữ pháp',
  '/vocabulary': 'Từ vựng',
  '/exercises': 'Bài tập',
  '/topik': 'TOPIK',
  '/basic': 'Cơ bản',
  '/basic2': 'Cơ bản 2',
  '/donate': 'Ủng hộ',
  '/guide': 'Hướng dẫn',
  '/privacy-policy': 'Chính sách bảo mật',
  '/terms-of-service': 'Điều khoản dịch vụ'
};

// Map for nested routes
const nestedRouteMap = {
  '/topik/35': 'Đề thi thử TOPIK I kỳ 35',
  '/topik/36': 'Đề thi thử TOPIK I kỳ 36',
  '/topik/37': 'Đề thi thử TOPIK I kỳ 37',
  '/topik/41': 'Đề thi thử TOPIK I kỳ 41',
  '/topik/47': 'Đề thi thử TOPIK I kỳ 47',
  '/topik/52': 'Đề thi thử TOPIK I kỳ 52',
  '/topik/60': 'Đề thi thử TOPIK I kỳ 60',
  '/topik/64': 'Đề thi thử TOPIK I kỳ 64',
  '/topik/83': 'Đề thi thử TOPIK I kỳ 83',
  '/topik/91': 'Đề thi thử TOPIK I kỳ 91'
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  // If we're on homepage, don't show breadcrumb
  if (pathSegments.length === 0) {
    return null;
  }

  // Generate breadcrumb paths
  const breadcrumbItems = [];
  
  // Always add Home as first item
  breadcrumbItems.push({
    name: 'Trang chủ',
    path: '/',
    isLast: pathSegments.length === 0
  });

  // Add path segments
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Check if this is a nested route that has a specific name
    const isLastSegment = index === pathSegments.length - 1;
    const fullPath = currentPath;
    
    // Try to get the name from our maps
    let name = '';
    if (nestedRouteMap[fullPath]) {
      name = nestedRouteMap[fullPath];
    } else if (routeMap[fullPath]) {
      name = routeMap[fullPath];
    } else {
      // Format the segment as a title if no mapping exists
      name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    }
    
    breadcrumbItems.push({
      name: name,
      path: fullPath,
      isLast: isLastSegment
    });
  });

  return (
    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li 
            key={index} 
            className={`breadcrumb-item${item.isLast ? ' active' : ''}`}
            aria-current={item.isLast ? 'page' : undefined}
          >
            {item.isLast ? (
              <span>{item.name}</span>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
