import React from "react";
import Profile2 from "../src/assets/Profile2.jpg";
import heart from "../src/assets/heart.jpg";
import EXPERT_ICON from "../src/assets/EXPERT_ICON.jpg";
import comment from "../src/assets/comment.jpg";
import ellipse2 from "../src/assets/ellipse2.jpg";

function Reply({ likeBool, commentBool }) {
  const lcCommentArr = [
    {
      img: <img src={heart} alt="Heart" style={{ width: '32px', height: '32px' }} />,
      count: "5",
      imgRender: likeBool,
    },
    {
      img: <img src={comment} alt="comment" style={{ width: '32px', height: '32px' }} />,
      count: "5",
      imgRender: commentBool,
    },
  ];
  return (
    <>
      <div className="p_main_comment_chat_profile">
        <div className="p_main_comment_profile_left">
          <div className="p_main_profile_pic">
            <img
              src={Profile2}
              alt="Profile"
              className="p_main_feed_item_profile"
            />
          </div>
          <div className="p_main_feed_item_header">
          <div className="p_main_profile_name">ㅇㅅㅇ </div>
          <div className="p_main_feed_item_profile_name">
            <img src={EXPERT_ICON}  alt="" />  &nbsp;
            <span className="p_main_feed_item_profile_line">1일전</span>
          </div>

          </div>
        </div>
        <div className="p_main_comment_profile_right">
        <img src={ellipse2}  alt="ellipse2" style={{ width: '32px', height: '32px' }}  /> 
        </div>
      </div>
      <div className="p_main_comment">
        <div className="p_main_my_comment">
        오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
        </div>
        <br/>
        <div className="p_main_my_comment_lc">
          {lcCommentArr?.map((item, index) => {
            return (
              item.imgRender && (
                <div key={item.img + index} className="p_main_lc_inner_section">
                  <div className="p_main_lc_img_section">{item.img}</div>
                  <span className="p_main_lc_img_section_count">{item.count}</span>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Reply;