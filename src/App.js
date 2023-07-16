import "./App.css";
import profileImg from "../src/assets/profileImg.jpg";
import ARROW from "../src/assets/ARROW.jpg";
import bell from "../src/assets/bell.jpg";
import EXPERT_ICON from "../src/assets/EXPERT_ICON.jpg";
import Ellipse from "../src/assets/Ellipse.jpg";
import Comment from "./Comment";
import Reply from "./reply";
import heart from "../src/assets/heart.jpg";
import comment from "../src/assets/comment.jpg";
import mark from "../src/assets/mark.jpg";
import ellipse2 from "../src/assets/ellipse2.jpg";
import imagemode from "../src/assets/imagesmode.jpg";

function App() {
  const tag = ["#2023", "#TODAYISMONDAY", "#TOP", "#POPS!", "#WOW", "#ROW"];

  const lcSectionArr = [
    {
      img: (
        <img
          src={heart}
          alt="Heart"
          style={{ width: "32px", height: "32px" }}
        />
      ),
      count: "5",
      countBool: true,
    },
    {
      img: (
        <img
          src={comment}
          alt="comment"
          style={{ width: "32px", height: "32px" }}
        />
      ),
      count: "5",
      countBool: true,
    },
    {
      img: (
        <img src={mark} alt="mark" style={{ width: "32px", height: "32px" }} />
      ),
      countBool: false,
    },
    {
      img: (
        <img
          src={ellipse2}
          alt="ellipse2"
          style={{ width: "32px", height: "32px" }}
        />
      ),
      countBool: false,
    },
  ];
  return (
    <>   
    <div className="p_main">
      <header className="com_header">
        <img src={ARROW} alt="" />
        <h1 className="com_logo">자유톡</h1>

        <img src={bell} alt="" />
      </header>
      <main>
        <div className="p_main_content">
          <div className="p_main_feed">
            <div className="p_main_feed_item">
              <div className="p_main_feed_item_header">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="p_main_feed_item_profile"
                />
                <div>
                  <div className="p_main_feed_item_profile_name">
                    <b>안녕 나 응애</b> &nbsp;
                    <img src={EXPERT_ICON} alt="" /> &nbsp;
                    <span className="p_main_feed_item_profile_line">1일전</span>
                  </div>
                  <div className="p_main_feed_item_profile_line2">
                    <span>165cm</span>{" "}
                    <img
                      className="p_main_feed_item_profile_symbol"
                      src={Ellipse}
                      alt=""
                    />
                    <span>53kg</span>
                  </div>
                </div>
                <button className="p_main_feed_item_profile_button">팔로우</button>
              </div>
              <br />
              <div className="p_main_content_head">
                <span>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</span>
              </div>
              <br />
              <div className="p_main_content_head1">
                지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
                혹시 어떤 상품이 제일 괜찮았어? <br />
                <br />
                후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
                제일 재밌었다던데 맞아??? <br />
                <br />
                올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
                아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
                있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
              </div>
              <div className="p_main_tag_div">
                {tag.map((item, index) => (
                  <div className="p_main_tag" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <img
                src="https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg"
                alt="Post"
                className="p_main_feed_item_image"
              />
            </div>
            <div className="p_main_feed_interaction">
              {/* comment like save section */}
              <div className="p_main_like_comment_section">
                {lcSectionArr?.map((item, index) => {
                  return (
                    <div
                      key={item.img + index}
                      className="p_main_lc_inner_section"
                    >
                      <div className="p_main_lc_img_section">{item.img}</div>
                      {item.countBool && (
                        <span className="p_main_lc_img_section_count">
                          {item.count}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              {/* comment chat section */}
              <br />
              <div className="p_main_comment_chat">
                <Comment likeBool={true} commentBool={true} />
                <br />
                <div className="p_main_comment_reply">
                  <Reply likeBool={true} commentBool={false} />
                </div>
                <br />
              </div>
              {/* comment upload section */}
              <div className="p_main_comment_upload">
                <div className="p_main_upload_img">
                  <img src={imagemode} alt="comment" />
                </div>
                <div className="p_main_upload_input">
                  <input
                    type="text"
                    className="p_main_upload_text"
                    placeholder="댓글을 남겨주세요."
                  />
                </div>
                <button className="p_main_upload_inputtext align-right">
                제일
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
