import React from "react";
import profileImg from "../src/assets/profileImg.jpg";
import EXPERT_ICON from "../src/assets/EXPERT_ICON.jpg";
import heart from "../src/assets/heart.jpg";
import comment from "../src/assets/comment.jpg";
import ellipse2 from "../src/assets/ellipse2.jpg";

function Comment({ likeBool, commentBool }) {
  const lcCommentArr = [
    {
      img: <img src={heart} alt="Heart" style={{ width: '32px', height: '32px' }} />,
      count: "5",
      imgRender: likeBool,
    },
    {
      img:  <img src={comment} alt="comment" style={{ width: '32px', height: '32px' }} />,
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
              src={profileImg}
              alt="Profile"
              className="p_main_feed_item_profile"
            />
          </div>
          <div className="p_main_feed_item_header">
          <div className="p_main_profile_name">안녕 나 응애 </div>
          <div className="p_main_feed_item_profile_name">
            <img src={EXPERT_ICON}  alt="" />  &nbsp;
            <span className="p_main_feed_item_profile_line">1일전</span>
          </div>

          </div>
        </div>
        <div className="p_main_comment_profile_right">
         
        <img src={ellipse2} alt="ellipse2" style={{ width: '32px', height: '32px' }} />
        </div>
      </div>
      <div className="p_main_comment">
        <div className="p_main_my_comment">
          어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
          아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
          기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
          올라온다고 하니 꼭 봐주세용~!
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

export default Comment;
