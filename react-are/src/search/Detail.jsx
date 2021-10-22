import React from "react";
import { Tmap } from "./index";

import "../css/detail.css";

function Detail() {
  return (
    <div className="detail_all">
      <header className="detail_header">
        <h2>BOX ATELIER</h2>
        <h4>With. RE;CODE</h4>
      </header>
      <div>BOX ATELIER - 리폼/리페어 지속 가능한 패션 서비스 제공</div>
      <div className="detail_section">
        <div>
          <h3>Address</h3>
          <span>서울 용산구 양녕로 445 노들섬</span>
        </div>
        <div>
          <h3>OPEN</h3>
          <span>12시 ~ 저녁 8시 ( 월요일 휴무 )</span>
        </div>
        <div className="detail_site">
          <h3>SITE</h3>
          <span className="site_icon">
            <a href="https://www.instagram.com/recode_/" target="_blank">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a
              className="booking"
              href="https://booking.naver.com/booking/6/bizes/418377/items/3611519"
              target="_blank"
            >
              Naver Book
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3>RE;CODE'S ATELIER PROJECT</h3>
        <div>
          <p>래코드가 제안하는 지속가능한 패션 서비스</p>
          <p>Reform & Repair</p>
          <p>옷장에서 잠자고 있던 소중한 옷이 재탄생됩니다.</p>
          <p>간단한 수선과 리폼에 대한 상담을 통해서</p>
          <p>고쳐 입고 다시 입는 문화를 전파 & 싱글맘의 자립을 지원</p>
        </div>
      </div>
      <div>
        <h3>공방 소개</h3>
        <div>
          <p>더 이상 입지 않는 옷의 업사이클 서비스 제공</p>
          <h4>수선 (Repair)</h4>
          <p>간단한 수선을 통해 </p>
          <h4>리폼 (Reform)</h4>
          <p>유행이 지나 입지 않는 옷을 새롭게 재탄생 시켜줌</p>
          <p></p>
          <p></p>
        </div>
      </div>
      <section>
        <div>
          <h3>상세정보</h3>
          <p>래코드 박스아뜰리에</p>
          <p>래코드가 운영하는 '박스아뜰리에'에서는</p>
          <p>더이상 입지 않는 옷의 업사이클 서비스를 제공합니다.</p>
          <p>한번 입고 버리는 옷이 아닌,</p>
          <p>고쳐서 오래오래 입어보세요.</p>
          <h4>1) 수선 (REPAIR)</h4>
          <p>간단한 수선을 통해 소중한 옷을 고쳐 오래 입어보세요.</p>
          <h4>2) 리폼 (REFORM)</h4>
          <p>
            유행이 지나 입지않는 옷을 가져오면 새로운 디자인으로
            재탄생해드립니다.
          </p>
          <p>수선/리폼은 1:1 상담을 통해 비용과 소요시간이 책정됩니다.</p>
          <p>상담시 의뢰할 의류를 가져와주세요.</p>
        </div>
      </section>
      <section className="detail_map">
        <div>
          <h3>여기서 지도를 보여줄 곳</h3>
          {/* 
          <div className="map">
            <Tmap />
          </div>
		   */}
        </div>
      </section>
      <div className="postscr">
        <h3>여기부터는 후기~</h3>
      </div>
    </div>
  );
}

export default Detail;
