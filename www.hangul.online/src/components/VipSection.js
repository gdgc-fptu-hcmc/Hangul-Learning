import React, { useState } from 'react';
import vipImg from '../cdn.resource.com/assets/google_cloud_innovators-75618312d3201e65d0ab30b4a8e972887f6bf621.jpg';
import '../styles/FeaturesSection.css';

const VipSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className='guest-front-door-block media-msg-body' id='become-an-innovator' label='Trở thành thành viên VIP' tabIndex='0'>
        <div className='media-msg-text'>
          <h2 className='ql-display-medium'>Trở thành <strong>thành viên VIP</strong>.</h2>
          <span className='ql-body-large'>Học tập liên tục với cộng đồng người học tiếng Hàn. Tham gia VIP để nhận quyền truy cập không giới hạn và hỗ trợ 1-1.</span>
          <ql-button href='subscriptions0d31.html?locale=vi' outlined>
            Tham gia ngay
          </ql-button>
        </div>
        <div className='media-msg-thumbnail'>
          <img role="presentation" src={vipImg} />
          <ql-icon-button className='vid-button' icon='video_youtube' onClick={() => setIsVideoOpen(true)}></ql-icon-button>
        </div>
      </section>
      
      {isVideoOpen && (
        <ql-dialog id='video-modal-rP4FK0XGo38' noDefaultAction>
          <iframe allowFullScreen src='https://www.youtube.com/embed/rP4FK0XGo38'></iframe>
        </ql-dialog>
      )}
    </>
  );
};

export default VipSection;


