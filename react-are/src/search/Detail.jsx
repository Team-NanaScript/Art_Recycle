import React from "react";
import { Tmap } from "./index";

import "../css/detail.css";

function Detail() {
  return (
    <div>
      <header className="detail_header">
        <h2>BOX ATELIER</h2>
        <h4>With. RE;CODE</h4>
      </header>
      <section>
        <p>BOX ATELIER - 리폼/리페어 지속 가능한 패션 서비스 제공</p>
        <div>
          <h3>Address</h3>
          <h4>서울 용산구 양녕로 445 노들섬</h4>
        </div>
        <div>
          <h3>오픈 시간</h3>
          <p>12시 ~ 저녁 8시 ( 월요일은 쉽니다~ )</p>
        </div>
        <div>
          <h3>관련 정보</h3>
          <p>
            - 인스타그램 : @recode_Instagram DM <br /> - 네이버 예약 서비스 :
            Box atelier
          </p>
        </div>
      </section>
      <section>
        <div>
          <p>
            BOX ATELIER (박스아뜰리에)
            <br />
            래코드가 제안하는 지속가능 패션서비스
            <br />
            Reform & Repair
            <br />
            <br />
            옷장에 잠자고 있던 소중한 옷을 다시 입을 수 있게
            <br />
            작은 래코드의 BOX ATELIER공간에서 재탄생됩니다.
            <br />
            <br />
            간단한 수선과 리폼에 대한 상담을 통해
            <br />
            고쳐 입고 다시 입는 문화를 전파하고
            <br />
            싱글맘의 자립을 지원하는
            <br />
            래코드의 아뜰리에 프로젝트입니다.
            <br />
            <br />
            <h3>상세정보</h3>
            <br />
            래코드 박스아뜰리에
            <br />
            래코드가 운영하는 '박스아뜰리에'에서는
            <br />
            더이상 입지 않는 옷의 업사이클 서비스를 제공합니다.
            <br />
            <br />
            한번 입고 버리는 옷이 아닌,
            <br />
            고쳐서 오래오래 입어보세요.
            <br />
            <br />
            1) 수선 (REPAIR)
            <br />
            간단한 수선을 통해 소중한 옷을 고쳐 오래 입어보세요.
            <br />
            <br />
            2) 리폼 (REFORM)
            <br />
            유행이 지나 입지않는 옷을 가져오면 새로운 디자인으로
            재탄생해드립니다.
            <br />
            <br />
            수선/리폼은 1:1 상담을 통해 비용과 소요시간이 책정됩니다.
            <br />
            상담시 의뢰할 의류를 가져와주세요.
          </p>
        </div>
      </section>
      <section>
        <div>
          <br />
          <h3>여기서 지도를 보여줄 곳</h3>
          <div className="map">
            <Tmap />
          </div>
        </div>
      </section>
      <section>
        <div className="postscr">
          <br />
          <h3>여기부터는 후기~</h3>
          <hr />
          <br />
          <div className="postscr_insert">
            <button className="image">이미지</button>
            <input name="postscript" placeholder="후기를 입력해주세요" />
            <button className="postscr_save">등록</button>
          </div>

          <hr />
          <br />
        </div>
        <div></div>
      </section>
      <section>
        <h3 className="re_size"> 댓글 119 </h3>
        <br />
        <section>
          <div className="postscr">
            <div className="postscr_list">
              <button className="image">REPAIR</button>
              <input
                name="postscript"
                placeholder=" 수선 (REPAIR) : 간단한 수선을 통해 소중한 옷을 고쳐 오래 입어보세요."
                readOnly="readonly"
              />
              <button className="postscr_save">등록</button>
            </div>
          </div>
        </section>
      </section>
      <section>
        <section>
          <div className="postscr">
            <div className="postscr_list">
              <button className="image">REFORM</button>
              <input
                name="postscript"
                placeholder=" 리폼 (REFORM) : 유행이 지나 입지않는 옷을 가져오면 새로운 디자인으로 재탄생해드립니다."
                readOnly="readonly"
              />
              <button className="postscr_save">등록</button>
            </div>
          </div>
          <div></div>
        </section>
      </section>
      <section>
        <section>
          <div className="postscr">
            <div className="postscr_list">
              <button className="image">REPAIR</button>
              <input
                name="postscript"
                placeholder=" 수선 (REPAIR) : 간단한 수선을 통해 소중한 옷을 고쳐 오래 입어보세요."
                readOnly="readonly"
              />
              <button className="postscr_save">등록</button>
            </div>
          </div>
          <div></div>
        </section>
      </section>
      <section>
        <section>
          <div className="postscr">
            <div className="postscr_list">
              <button className="image">REFORM</button>
              <input
                name="postscript"
                placeholder=" 리폼 (REFORM) : 유행이 지나 입지않는 옷을 가져오면 새로운 디자인으로 재탄생해드립니다."
                readOnly="readonly"
              />
              <button className="postscr_save">등록</button>
            </div>
          </div>
          <div></div>
        </section>
      </section>
      <br />
    </div>
  );
}

export default Detail;
