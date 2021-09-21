import React from "react";
import "../css/main.css";

function MainBody({history}) {
  // const userFetch = useCallback(async  ()=>{
  //   const res = await fetch("http://localhost:5000/users/test")
  //   const userList = await res.json();
  //   await setUserList(userList);
  // }, []);

  // useEffect(userFetch, [userFetch]);

  const keyToSearch = (e)=>{
    if(e.keyCode === 13) {
      let query = e.target.value
      alert(query)
      // const tmpList = searchList(query);
      history.push(`/search/result/${query}`);
      
      // history.push([tmpList],`/search/result/${search_query}`)
      // history.push(`/search/result/${search_query}`, { state :tmpList })
      // history.pushState(`/search/result/${search_query}`, { state :tmpList })
      // history.pushState({ state :tmpList },`/search/result/${search_query}`)
      // history.push({pathname : `/search/result/${search_query}`, state :{helpList:tmpList} })
    }
  }

  const btnToSearch = ()=>{
      let search_query = document.querySelector("input.main_search").value
      alert(search_query)
  }
  return (
    <section className="main_body">
      <article className="main_top">
        <h1>국내 재활용 공방을 한곳에</h1>
        
        <div className="main_search_box">
          <input
          onKeyDown={keyToSearch}
            name="search"
            className="main_search"
            placeholder="공방명이나 재료를 입력해주세요"
          />
          <button onClick={btnToSearch}>
            <span class="fas fa-search fa-2x"></span>
          </button>
        </div>
      </article>
      <article className="main_bottom">
        <div className="area">
          <h2>지역별 공방</h2>
          <p>우리 지역의 공방을 찾아봐요</p>
          <span class="fas fa-map-marked-alt fa-4x up"></span>
        </div>
        <div className="material">
          <h2>재료별 검색</h2>
          <p>새로 태어날 재활용품 재료들을 찾아볼 수 있어요 </p>
          <span class="far fa-lightbulb fa-4x up"></span>
        </div>
        <div className="way">
          <h2>택배 / 방문</h2>
          <p>택배를 보내거나 직접 방문하여 재활용품을 전달할 수 있어요</p>
          {/* <span class="fas fa-box fa-4x"></span> */}
          <span class="fas fa-seedling fa-4x up"></span>
        </div>
      </article>
    </section>
  );
}

export default MainBody;
